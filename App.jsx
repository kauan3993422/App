import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  BellRing, 
  Settings, 
  ShieldCheck, 
  Clock, 
  AlertTriangle,
  Send,
  Smartphone
} from 'lucide-react';

const App = () => {
  const [permission, setPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [statusMsg, setStatusMsg] = useState('');
  const [timer, setTimer] = useState(5);

  // Solicitar permissão nativa
  const requestPermission = async () => {
    if (!('Notification' in window)) {
      setStatusMsg('Este navegador não suporta notificações.');
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    
    if (result === 'granted') {
      sendNotification("Permissão Concedida!", "Agora você receberá alertas reais do sistema.");
    }
  };

  // Função principal de notificação
  const sendNotification = (title, body) => {
    if (permission !== 'granted') {
      setStatusMsg('Erro: Permissão não concedida.');
      return;
    }

    // Tenta usar Service Worker para melhor compatibilidade mobile
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, {
          body: body,
          icon: 'https://cdn-icons-png.flaticon.com/512/311/311933.png',
          badge: 'https://cdn-icons-png.flaticon.com/512/311/311933.png',
          vibrate: [200, 100, 200],
          tag: 'nu-notif'
        });
      });
    } else {
      // Fallback para notificação de janela (Desktop/Android)
      new Notification(title, { body, icon: 'https://cdn-icons-png.flaticon.com/512/311/311933.png' });
    }
  };

  // Notificação agendada (para testar com o app em segundo plano)
  const scheduleNotification = () => {
    setStatusMsg(`Notificação em ${timer} segundos... Bloqueie a tela ou saia do app!`);
    setTimeout(() => {
      sendNotification("Alerta Agendado", "Esta é uma notificação real vinda do sistema.");
      setStatusMsg('Notificação enviada!');
    }, timer * 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header Visual */}
        <div className="bg-indigo-600 p-8 text-white text-center">
          <div className="inline-block p-4 bg-indigo-500 rounded-3xl mb-4 shadow-lg">
            <BellRing size={40} />
          </div>
          <h1 className="text-2xl font-bold">Centro de Alertas</h1>
          <p className="text-indigo-100 text-sm mt-1">Integração Nativa com Sistema</p>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Status de Permissão */}
          <div className={`p-4 rounded-2xl flex items-center gap-3 border ${
            permission === 'granted' ? 'bg-green-50 border-green-100 text-green-700' : 
            permission === 'denied' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-amber-50 border-amber-100 text-amber-700'
          }`}>
            {permission === 'granted' ? <ShieldCheck /> : <AlertTriangle />}
            <div className="text-xs">
              <p className="font-bold uppercase tracking-wider">Permissão do Sistema</p>
              <p>{permission === 'granted' ? 'Ativada: Você receberá notificações reais.' : 
                  permission === 'denied' ? 'Bloqueada: Limpe os dados do site para reativar.' : 'Pendente: Clique no botão abaixo.'}</p>
            </div>
          </div>

          {/* Ações principais */}
          <div className="space-y-3">
            {permission !== 'granted' && (
              <button 
                onClick={requestPermission}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Settings size={20} /> Ativar Notificações
              </button>
            )}

            <button 
              disabled={permission !== 'granted'}
              onClick={() => sendNotification("Teste Imediato", "Isso apareceu no topo do seu celular?")}
              className={`w-full font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                permission === 'granted' ? 'bg-slate-900 text-white shadow-lg active:scale-95' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send size={20} /> Enviar Agora
            </button>
          </div>

          <hr className="border-slate-100" />

          {/* Notificação Agendada */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase">
              <Clock size={16} /> Teste em Segundo Plano
            </div>
            
            <div className="bg-slate-50 p-4 rounded-2xl">
              <label className="text-xs text-slate-400 font-bold mb-2 block uppercase">Tempo de atraso (segundos)</label>
              <input 
                type="range" min="3" max="30" value={timer} 
                onChange={(e) => setTimer(e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="text-center font-black text-indigo-600 mt-2">{timer}s</div>
            </div>

            <button 
              disabled={permission !== 'granted'}
              onClick={scheduleNotification}
              className={`w-full border-2 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                permission === 'granted' ? 'border-indigo-600 text-indigo-600 hover:bg-indigo-50' : 'border-slate-200 text-slate-200 cursor-not-allowed'
              }`}
            >
              Agendar e Sair do App
            </button>
          </div>

          {statusMsg && (
            <div className="text-center text-xs font-medium text-indigo-500 animate-pulse bg-indigo-50 py-2 rounded-lg">
              {statusMsg}
            </div>
          )}

          {/* Guia PWA */}
          <div className="bg-slate-900 p-4 rounded-2xl text-white">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone size={16} className="text-indigo-400" />
              <span className="text-xs font-bold uppercase">Dica de Android/iOS</span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-400">
              Para notificações funcionarem como um app nativo, clique no ícone de <b>compartilhar</b> do seu navegador e selecione <b>"Adicionar à Tela de Início"</b>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;