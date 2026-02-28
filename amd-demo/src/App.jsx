import { useState, useEffect } from 'react';
import {
  Shield, ShieldAlert, Mail, Link as LinkIcon, Activity,
  Bell, LogOut, Fingerprint, Phone
} from 'lucide-react';
import { globalStyles } from './styles.js';
import { Copilot } from './components.jsx';
import {
  LandingPage, LoginPage, DashboardHome, SecurityScorePage,
  ActiveThreatsPage, SuspiciousLoginsPage, DarkWebPage,
  ThreatPredictionPage, NotificationPage, ProfilePage,
  ContactPage, EmailScan, URLScan, AlertsReports
} from './pages.jsx';

const navItems = [
  { id: 'dashboard', icon: <Activity className="w-5 h-5" />, label: 'Command Center' },
  { id: 'suspicious-logins', icon: <Fingerprint className="w-5 h-5" />, label: 'Identity Logs' },
  { id: 'email-scan', icon: <Mail className="w-5 h-5" />, label: 'Email Scanner' },
  { id: 'url-scan', icon: <LinkIcon className="w-5 h-5" />, label: 'URL Scanner' },
  { id: 'alerts', icon: <ShieldAlert className="w-5 h-5" />, label: 'Audit Logs' },
  { id: 'contact', icon: <Phone className="w-5 h-5" />, label: 'Contact Support' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentPage]);

  const navigate = (page) => { setCurrentPage(page); setIsMobileMenuOpen(false); };

  if (currentPage === 'landing') return <><style>{globalStyles}</style><LandingPage navigate={navigate} /></>;
  if (currentPage === 'login') return <><style>{globalStyles}</style><LoginPage navigate={navigate} login={() => navigate('dashboard')} /></>;

  return (
    <div className="flex h-screen overflow-hidden bg-[#050505] text-gray-200 selection:bg-[#ff3333] selection:text-[#0a0a0a]">
      <style>{globalStyles}</style>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 border-r border-[#222] bg-[#0a0a0a] relative z-20 shadow-[5px_0_30px_rgba(0,0,0,0.8)]">
        <div className="p-8 flex items-center gap-4 border-b border-[#222] group cursor-pointer" onClick={() => navigate('landing')}>
          <div className="icon-circle w-12 h-12"><Shield className="w-7 h-7 text-white transition-transform group-hover:scale-110" /></div>
          <span className="text-3xl font-black text-white tracking-wide">Shield<span className="text-[#ff3333]">Mind</span></span>
        </div>
        <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-3">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => navigate(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-[#222] to-transparent border-l-4 border-[#ff3333] text-white shadow-[inset_0_0_20px_rgba(255,51,51,0.05)]'
                  : 'text-gray-400 hover:bg-[#151515] hover:text-white hover:translate-x-1'
              }`}>
              <span className={`transition-transform duration-300 ${currentPage === item.id ? 'text-[#ff3333] scale-110' : 'group-hover:text-[#FF7B00]'}`}>{item.icon}</span>
              <span className="font-bold text-[15px] tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-[#222] bg-[#0d0d0d]">
          <button onClick={() => navigate('landing')} className="w-full flex items-center gap-4 px-5 py-4 text-gray-400 hover:text-[#ff3333] transition-all rounded-xl hover:bg-[#ff3333]/10 group">
            <LogOut className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-[15px]">Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff3333] rounded-full mix-blend-screen filter blur-[300px] opacity-[0.03] pointer-events-none animate-float"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"><div className="cyber-grid opacity-20" /></div>

        <header className="h-28 flex items-center justify-between px-10 border-b border-[#222] bg-[#0a0a0a]/80 backdrop-blur-lg sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4 animate-fade-up">
            <h1 className="text-4xl font-black text-white capitalize hidden sm:block tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
              {currentPage.replace(/-/g, ' ')}
            </h1>
          </div>
          <div className="flex items-center gap-8 animate-fade-up delay-100">
            <button onClick={() => navigate('notification')} className="relative p-2 text-gray-400 hover:text-[#ff3333] transition-colors group">
              <Bell className="w-8 h-8" />
              <span className="absolute top-1 right-2 w-3.5 h-3.5 bg-[#ff3333] rounded-full animate-pulse-red border-2 border-[#0a0a0a]"></span>
            </button>
            <div className="flex items-center gap-4 pl-8 border-l border-[#333] cursor-pointer group" onClick={() => navigate('profile')}>
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-white group-hover:text-[#ff3333] transition-colors">Administrator</p>
                <p className="text-xs text-gray-500 font-mono">ID: 0x89F2A</p>
              </div>
              <div className="icon-circle w-12 h-12 border-2 border-[#222] group-hover:border-[#ff3333] transition-colors"><span className="text-white font-black text-sm">AD</span></div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10 relative z-0 scroll-smooth">
          <div className="max-w-7xl mx-auto pb-24">
            {currentPage === 'dashboard' && <DashboardHome navigate={navigate}/>}
            {currentPage === 'notification' && <NotificationPage />}
            {currentPage === 'security-score' && <SecurityScorePage />}
            {currentPage === 'active-threats' && <ActiveThreatsPage />}
            {currentPage === 'suspicious-logins' && <SuspiciousLoginsPage />}
            {currentPage === 'dark-web' && <DarkWebPage />}
            {currentPage === 'threat-prediction' && <ThreatPredictionPage />}
            {currentPage === 'profile' && <ProfilePage />}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === 'email-scan' && <EmailScan />}
            {currentPage === 'url-scan' && <URLScan />}
            {currentPage === 'alerts' && <AlertsReports />}
          </div>
        </main>

        <Copilot />
      </div>
    </div>
  );
}
