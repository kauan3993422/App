<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centro de Alertas Nativo</title>
    <!-- Scripts necessários para rodar React e Tailwind sem precisar de build -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { -webkit-tap-highlight-color: transparent; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="bg-slate-50">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // Ícones em SVG para garantir compatibilidade e leveza
        const Icons = {
            BellRing: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>
            ),
            ShieldCheck: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            ),
            Settings: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            ),
            Send: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            ),
            Clock: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ),
            AlertTriangle: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            ),
            Smartphone: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            )
        };

        const App = () => {
            const [permission, setPermission] = useState(
                typeof Notification !== 'undefined' ? Notification.permission : 'default'
            );
            const [statusMsg, setStatusMsg] = useState('');
            const [timer, setTimer] = useState(5);

            const requestPermission = async () => {
                if (!('Notification' in window)) {
                    setStatusMsg('Navegador sem suporte a notificações.');
                    return;
                }
                const result = await Notification.requestPermission();
                setPermission(result);
                if (result === 'granted') {
                    sendNotification("Permissão OK!", "Você receberá alertas do sistema.");
                }
            };

            const sendNotification = (title, body) => {
                if (permission !== 'granted') {
                    setStatusMsg('Permissão negada.');
                    return;
                }

                // Tenta via Notification comum (mais compatível com Android 5/6 Chrome)
                try {
                    const n = new Notification(title, { 
                        body, 
                        icon: 'https://cdn-icons-png.flaticon.com/512/311/311933.png' 
                    });
                } catch (e) {
                    // Fallback para ServiceWorker se disponível
                    if ('serviceWorker' in navigator) {
                        navigator.serviceWorker.ready.then(reg => {
                            reg.showNotification(title, { body });
                        });
                    }
                }
            };

            const scheduleNotification = () => {
                setStatusMsg(`Alerta em ${timer}s. Bloqueie a tela!`);
                setTimeout(() => {
                    sendNotification("Alerta Agendado", "Isso veio do sistema enquanto você estava fora.");
                    setStatusMsg('Enviado com sucesso!');
                }, timer * 1000);
            };

            return (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                        
                        <div className="bg-indigo-600 p-8 text-white text-center">
                            <div className="inline-block p-4 bg-indigo-500 rounded-3xl mb-4 shadow-lg">
                                <Icons.BellRing />
                            </div>
                            <h1 className="text-2xl font-bold text-white">Centro de Alertas</h1>
                            <p className="text-indigo-100 text-sm mt-1">Integração Real com Android</p>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className={`p-4 rounded-2xl flex items-center gap-3 border ${
                                permission === 'granted' ? 'bg-green-50 border-green-100 text-green-700' : 
                                permission === 'denied' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-amber-50 border-amber-100 text-amber-700'
                            }`}>
                                {permission === 'granted' ? <Icons.ShieldCheck /> : <Icons.AlertTriangle />}
                                <div className="text-xs">
                                    <p className="font-bold uppercase tracking-wider">Status do Sistema</p>
                                    <p>{permission === 'granted' ? 'Notificações Ativas.' : 'Aguardando Permissão.'}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {permission !== 'granted' && (
                                    <button onClick={requestPermission} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 flex items-center justify-center gap-2">
                                        <Icons.Settings /> Ativar Sistema
                                    </button>
                                )}

                                <button 
                                    disabled={permission !== 'granted'}
                                    onClick={() => sendNotification("Teste Imediato", "Funciona!")}
                                    className={`w-full font-bold py-4 rounded-2xl flex items-center justify-center gap-2 ${
                                        permission === 'granted' ? 'bg-slate-900 text-white shadow-lg active:scale-95' : 'bg-slate-200 text-slate-400'
                                    }`}
                                >
                                    <Icons.Send /> Enviar Notificação
                                </button>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase">
                                    <Icons.Clock /> Agendar para Segundo Plano
                                </div>
                                
                                <input 
                                    type="range" min="3" max="30" value={timer} 
                                    onChange={(e) => setTimer(e.target.value)}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="text-center font-black text-indigo-600">{timer} segundos</div>

                                <button 
                                    disabled={permission !== 'granted'}
                                    onClick={scheduleNotification}
                                    className="w-full border-2 border-indigo-600 text-indigo-600 font-bold py-4 rounded-2xl active:bg-indigo-50"
                                >
                                    Agendar e Sair do App
                                </button>
                            </div>

                            {statusMsg && (
                                <div className="text-center text-xs font-bold text-indigo-500 py-2 bg-indigo-50 rounded-xl">
                                    {statusMsg}
                                </div>
                            )}

                            <div className="bg-slate-900 p-4 rounded-2xl text-white">
                                <div className="flex items-center gap-2 mb-1">
                                    <Icons.Smartphone />
                                    <span className="text-[10px] font-bold uppercase">Dica para o APK</span>
                                </div>
                                <p className="text-[9px] text-slate-400">
                                    Ao gerar o APK no AppsGeyser, use este link direto. Lembre-se de permitir notificações nas configurações do seu Android após instalar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);

        // Registro de Service Worker básico para suporte mobile PWA
        if ('serviceWorker' in navigator) {
            const swCode = `self.addEventListener('push', function(e) { e.waitUntil(self.registration.showNotification('Alerta', { body: 'Notificação Ativa' })); });`;
            const blob = new Blob([swCode], { type: 'application/javascript' });
            navigator.serviceWorker.register(URL.createObjectURL(blob));
        }
    </script>
</body>
</html>

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
