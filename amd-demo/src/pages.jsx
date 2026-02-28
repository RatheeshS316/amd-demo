import {
  Shield, ShieldAlert, Mail, Link as LinkIcon, ArrowUpRight, MapPin,
  Download, Fingerprint, Eye, Globe, Zap, Phone, UserCircle, Settings,
  Lock, User, Search, AlertTriangle, ChevronRight, Bell, ShieldCheck,
  Crosshair, Send, FileText, X
} from 'lucide-react';
import { GlassCard, AnimatedNumber, Badge, ParticlesOverlay } from './components.jsx';

export const LandingPage = ({ navigate }) => (
  <div className="min-h-screen relative overflow-y-auto overflow-x-hidden flex flex-col bg-[#050505]">
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(60,10,10,0.3)_0%,rgba(5,5,5,1)_80%)] z-0 pointer-events-none" />
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"><div className="cyber-grid opacity-20" /></div>
    <ParticlesOverlay />
    <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12 animate-fade-up">
      <div className="flex items-center gap-3">
        <div className="icon-circle w-10 h-10"><Shield className="w-5 h-5 text-white" /></div>
        <span className="text-2xl font-bold tracking-wider text-white">Shield<span className="text-[#ff3333]">Mind</span></span>
      </div>
      <div className="space-x-6 flex items-center">
        <button onClick={() => navigate('login')} className="text-gray-300 hover:text-white font-semibold transition-colors">Login</button>
        <button onClick={() => navigate('login')} className="btn-primary px-6 py-2.5 rounded-lg font-bold tracking-wide">Get Started</button>
      </div>
    </nav>
    <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-24 min-h-[80vh]">
      <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#110505] border border-[#ff3333]/30 mb-8 animate-pop-in">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff3333] animate-pulse-red" />
        <span className="text-sm font-bold text-[#ff3333]">Enterprise Grade Security</span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-6 text-white leading-[1.1] tracking-tight max-w-5xl animate-fade-up">
        AI-Powered <br/><span className="text-cyber-red shimmer-text">Cybersecurity</span> <br/>Platform
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl animate-fade-up delay-200 leading-relaxed font-light">
        Detect, Analyze, Protect. Next-generation threat intelligence combining behavioral analytics and advanced machine learning models.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 animate-fade-up delay-300">
        <button onClick={() => navigate('login')} className="btn-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group">
          Start Protecting <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button onClick={() => navigate('login')} className="btn-secondary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
          View Live Demo
        </button>
      </div>
    </main>
    <section className="relative z-10 w-full border-t border-[#222] bg-[#050505]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center animate-fade-up">
        <div className="icon-circle w-20 h-20 mb-8 animate-pulse-glow"><Shield className="w-10 h-10 text-white" /></div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight">ShieldMind <span className="text-[#ff3333]">&ndash;</span> AI Powered Cybersecurity Platform</h2>
        <GlassCard className="p-8 md:p-12 text-left md:text-center border-[#333]">
          <p className="text-gray-300 text-lg md:text-xl leading-[1.9] font-light relative z-10">
            <strong className="text-white font-bold">ShieldMind</strong> is a next-generation AI-powered cybersecurity web application designed to intelligently detect, analyze, and respond to modern digital threats in real time. Built using a powerful React frontend, Django backend, and Firebase database, the platform provides a secure and seamless environment for monitoring phishing attacks, malicious URLs, suspicious login behavior, and potential security risks.<br/><br/>
            By combining machine learning-driven threat detection with explainable risk scoring, automated response simulation, and interactive user training modules, <span className="text-[#ff3333] font-bold">ShieldMind</span> empowers organizations and individuals to proactively protect their digital ecosystem.<br/><br/>
            The centralized dashboard offers real-time insights, predictive risk indicators, behavioral anomaly detection, and detailed alerts—ensuring faster decision-making and improved security awareness.
          </p>
        </GlassCard>
      </div>
    </section>
  </div>
);

export const LoginPage = ({ navigate, login }) => (
  <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#050505]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,10,10,0.4)_0%,rgba(5,5,5,1)_100%)] z-0" />
    <ParticlesOverlay />
    <GlassCard className="w-full max-w-md relative z-10 !p-10 animate-pop-in border-[#ff3333]/40 shadow-[0_20px_60px_rgba(255,51,51,0.15)]">
      <div className="flex justify-center mb-8">
        <div className="icon-circle w-20 h-20 animate-pulse-glow"><Shield className="w-10 h-10 text-white" /></div>
      </div>
      <h2 className="text-3xl font-black text-center text-white mb-2 tracking-tight">System Access</h2>
      <p className="text-center text-gray-400 mb-8 text-sm font-medium uppercase tracking-widest">Secure handshake required</p>
      <form onSubmit={(e) => { e.preventDefault(); login('admin'); }} className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Agent Identifier</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#ff3333] transition-colors" />
            <input type="text" className="w-full bg-[#0a0a0a] border border-[#333] text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_15px_rgba(255,51,51,0.2)] transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Decryption Key</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#ff3333] transition-colors" />
            <input type="password" className="w-full bg-[#0a0a0a] border border-[#333] text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_15px_rgba(255,51,51,0.2)] transition-all" />
          </div>
        </div>
        <button type="submit" className="w-full btn-primary py-4 rounded-xl font-bold text-lg mt-8 flex justify-center items-center gap-2">
          Initialize Session <ChevronRight className="w-6 h-6" />
        </button>
      </form>
    </GlassCard>
  </div>
);

export const DashboardHome = ({ navigate }) => (
  <div className="space-y-8 animate-fade-up">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <GlassCard onClick={() => navigate('security-score')} delay="delay-100" className="group hover:border-[#FF7B00] h-[300px] !p-6 flex flex-col items-center">
        <div className="flex justify-center items-start gap-1 w-full h-8 flex-shrink-0">
          <h3 className="text-[1.1rem] font-bold text-white tracking-wide text-center">Security Score</h3>
          <ArrowUpRight className="text-gray-500 w-4 h-4 group-hover:text-[#FF7B00] transition-colors mt-0.5" />
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="relative w-[110px] h-[110px]">
            <svg viewBox="0 0 36 36" className="circular-chart w-full h-full drop-shadow-[0_0_15px_rgba(255,123,0,0.5)] group-hover:scale-105 transition-transform absolute inset-0">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="url(#orangeRedGrad)" />
              <defs><linearGradient id="orangeRedGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF7B00" /><stop offset="100%" stopColor="#FF003C" /></linearGradient></defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-3xl font-black text-white flex items-baseline mt-1"><AnimatedNumber end={85} /><span className="text-xs text-gray-400 ml-1 font-bold">/100</span></div>
            </div>
          </div>
        </div>
        <div className="w-full h-[60px] flex-shrink-0"></div>
      </GlassCard>

      {[
        { id: 'active-threats', title: 'Active Threats', Icon: ShieldAlert, val: 12, sub: 'Action needed', subColor: 'text-[#ff3333] animate-pulse', border: 'hover:border-[#ff3333]' },
        { id: 'notification', title: 'Notifications', Icon: Bell, val: 4, sub: 'Unread alerts', subColor: 'text-gray-400', border: 'hover:border-yellow-500', iconBg: 'linear-gradient(135deg,#eab308,#FF7B00)' },
        { id: 'dark-web', title: 'Dark Web', Icon: Globe, val: 2, sub: 'Exposures found', subColor: 'text-gray-400', border: 'hover:border-[#ff3333]' },
        { id: 'threat-prediction', title: 'AI Prediction', Icon: Zap, val: 14, suffix: '%', sub: 'Risk probability', subColor: 'text-gray-400', border: 'hover:border-[#FF7B00]' },
      ].map(({ id, title, Icon, val, suffix, sub, subColor, border, iconBg }, idx) => (
        <GlassCard key={id} onClick={() => navigate(id)} delay={`delay-${(idx+2)*100}`} className={`group ${border} h-[300px] !p-6 flex flex-col items-center text-center`}>
          <div className="flex justify-center items-start gap-1 w-full h-8 flex-shrink-0">
            <h3 className="text-[1.1rem] font-bold text-white tracking-wide">{title}</h3>
            <ArrowUpRight className="text-gray-500 w-4 h-4 mt-0.5 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="icon-circle w-[85px] h-[85px] group-hover:scale-110 transition-transform" style={iconBg ? {background: iconBg} : {}}>
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end w-full h-[60px] flex-shrink-0 pb-1">
            <h3 className="text-[2.6rem] font-black text-white leading-none tracking-tight mb-2"><AnimatedNumber end={val} suffix={suffix||''} /></h3>
            <p className={`text-[0.65rem] font-black uppercase tracking-[0.15em] ${subColor}`}>{sub}</p>
          </div>
        </GlassCard>
      ))}
    </div>

    <GlassCard className="flex flex-col relative overflow-hidden group">
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-2xl font-black text-white flex items-center gap-3"><MapPin className="w-7 h-7 text-[#ff3333]" />Global Threat Heatmap</h3>
        <Badge type="danger">Live Tracking</Badge>
      </div>
      <div className="flex-1 bg-[#050505] rounded-xl border border-[#222] relative overflow-hidden flex items-center justify-center min-h-[450px]">
        <div className="cyber-grid opacity-30 z-0"></div>
        <div className="absolute inset-0 w-full h-full z-10" style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")',backgroundSize:'110%',backgroundRepeat:'no-repeat',backgroundPosition:'center',filter:'brightness(0.55) sepia(1) hue-rotate(300deg) saturate(3)',opacity:'0.85'}} />
        <div className="absolute top-[35%] left-[30%] z-30 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
          <MapPin className="text-[#ff3333] w-10 h-10 drop-shadow-[0_0_15px_rgba(255,51,51,0.9)] animate-pulse-glow" />
          <div className="w-3 h-3 bg-[#ff3333] rounded-full absolute top-10 animate-ping opacity-80"></div>
        </div>
        <div className="absolute top-[25%] right-[28%] z-30 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
          <MapPin className="text-[#FF7B00] w-10 h-10 drop-shadow-[0_0_15px_rgba(255,123,0,0.9)] animate-pulse-glow" style={{animationDelay:'1s'}} />
          <div className="w-3 h-3 bg-[#FF7B00] rounded-full absolute top-10 animate-ping opacity-80" style={{animationDelay:'1s'}}></div>
        </div>
      </div>
    </GlassCard>
  </div>
);

export const SecurityScorePage = () => (
  <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
    <h2 className="text-3xl font-black text-white flex items-center gap-3 border-b border-[#222] pb-6"><ShieldCheck className="text-[#FF7B00] w-8 h-8"/> Organization Security Posture</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <GlassCard className="flex flex-col items-center justify-center col-span-1 text-center py-12">
        <svg viewBox="0 0 36 36" className="circular-chart w-56 h-56 drop-shadow-[0_0_25px_rgba(255,123,0,0.5)]">
          <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="url(#orangeRedGradLg)" />
          <defs><linearGradient id="orangeRedGradLg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF7B00" /><stop offset="100%" stopColor="#FF003C" /></linearGradient></defs>
        </svg>
        <h1 className="text-7xl font-black text-white mt-8">85<span className="text-3xl text-gray-500">/100</span></h1>
        <p className="text-[#FF7B00] font-bold mt-3 uppercase tracking-widest text-lg">Excellent Posture</p>
      </GlassCard>
      <div className="col-span-2">
        <GlassCard className="h-full">
          <h3 className="text-xl font-bold text-white mb-8 border-b border-[#222] pb-4">Detailed Score Breakdown</h3>
          <div className="space-y-8">
            {[{label:'Network Security',score:92,color:'bg-gradient-to-r from-[#FF7B00] to-[#FF003C]'},{label:'Identity & Access',score:75,color:'bg-gradient-to-r from-yellow-500 to-[#FF7B00]'},{label:'Endpoint Protection',score:88,color:'bg-gradient-to-r from-gray-400 to-white'},{label:'Employee Awareness',score:65,color:'bg-gradient-to-r from-[#333] to-gray-500'}].map((s,i)=>(
              <div key={i} className="animate-fade-up" style={{animationDelay:`${i*100}ms`}}>
                <div className="flex justify-between text-sm mb-2 font-bold uppercase tracking-wider"><span className="text-gray-300">{s.label}</span><span className="text-white text-lg">{s.score}%</span></div>
                <div className="w-full h-3 bg-[#111] rounded-full overflow-hidden shadow-inner">
                  <div className={`h-full ${s.color}`} style={{width:`${s.score}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  </div>
);

export const ActiveThreatsPage = () => (
  <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white flex items-center gap-3 border-b border-[#222] pb-6"><Crosshair className="text-[#ff3333] w-8 h-8"/> Active Threat Radar</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <GlassCard className="flex flex-col items-center justify-center min-h-[450px] relative overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-6 absolute top-6 left-6 z-10">Threat Vectors</h3>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,51,0.1)_0%,transparent_60%)]"></div>
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[350px] z-10">
          <polygon points="100,20 170,50 170,150 100,180 30,150 30,50" fill="rgba(20,20,20,0.8)" stroke="#333" strokeWidth="1" />
          <polygon points="100,40 155,65 155,135 100,160 45,135 45,65" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />
          <polygon points="100,60 140,80 140,120 100,140 60,120 60,80" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />
          {['100,20 170,50','100,20 30,50','100,20 100,180','100,20 170,150','100,20 30,150'].map((pts,i)=><line key={i} x1={pts.split(' ')[0].split(',')[0]} y1={pts.split(' ')[0].split(',')[1]} x2={pts.split(' ')[1].split(',')[0]} y2={pts.split(' ')[1].split(',')[1]} stroke="#444" />)}
          <polygon points="100,40 160,80 130,140 100,130 50,110 70,60" fill="rgba(255,51,51,0.3)" stroke="#ff3333" strokeWidth="2" className="animate-pop-in" />
          <circle cx="100" cy="100" r="3" fill="#ff3333" className="animate-pulse-red" />
          <text x="85" y="12" fill="#fff" fontSize="8" fontWeight="bold">Phishing</text>
          <text x="175" y="55" fill="#fff" fontSize="8" fontWeight="bold">Malware</text>
          <text x="175" y="155" fill="#fff" fontSize="8" fontWeight="bold">DDoS</text>
          <text x="85" y="195" fill="#fff" fontSize="8" fontWeight="bold">Insider</text>
          <text x="2" y="155" fill="#fff" fontSize="8" fontWeight="bold">Data Leak</text>
          <text x="5" y="55" fill="#fff" fontSize="8" fontWeight="bold">Exploits</text>
        </svg>
      </GlassCard>
      <GlassCard className="flex flex-col">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-[#222] pb-4">Real-Time Event Stream</h3>
        <div className="flex-1 space-y-4 overflow-hidden mt-2">
          {[1,2,3,4,5].map(i=>(
            <div key={i} className="bg-[#111] border-l-4 border-[#ff3333] p-4 rounded-r-lg flex justify-between items-center animate-fade-up shadow" style={{animationDelay:`${i*100}ms`}}>
              <div>
                <span className="text-[#ff3333] font-mono text-xs font-black tracking-widest">[BLOCKED]</span>
                <p className="text-gray-200 text-sm mt-1.5 font-medium">SQL Injection attempt via /login API</p>
              </div>
              <span className="text-gray-500 font-mono text-xs bg-[#050505] p-2 rounded">192.168.0.{40+i}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
);

export const SuspiciousLoginsPage = () => (
  <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white flex items-center gap-3 border-b border-[#222] pb-6"><Fingerprint className="text-[#FF7B00] w-8 h-8"/> Identity & Access Logs</h2>
    <GlassCard className="p-0 overflow-hidden">
      <div className="p-6">
        <table className="w-full text-left text-sm">
          <thead><tr className="text-gray-400 border-b border-[#222] uppercase tracking-wider text-xs">
            <th className="pb-4 px-4 font-bold">Time</th><th className="pb-4 px-4 font-bold">User</th>
            <th className="pb-4 px-4 font-bold">Location</th><th className="pb-4 px-4 font-bold">IP / Risk</th>
            <th className="pb-4 px-4 text-right font-bold">Action</th>
          </tr></thead>
          <tbody>
            {[{t:'2 mins ago',u:'admin@corp.com',l:'Moscow, RU',i:'185.33.22.1',r:'High'},{t:'15 mins ago',u:'finance@corp.com',l:'Beijing, CN',i:'45.12.33.1',r:'Critical'},{t:'1 hr ago',u:'guest@corp.com',l:'London, UK',i:'88.22.11.5',r:'Medium'}].map((l,i)=>(
              <tr key={i} className="border-b border-[#222]/50 hover:bg-[#151515] transition-all group">
                <td className="py-5 px-4 text-gray-400">{l.t}</td>
                <td className="py-5 px-4 text-white font-semibold">{l.u}</td>
                <td className="py-5 px-4 text-gray-300">{l.l}</td>
                <td className="py-5 px-4"><span className="font-mono text-gray-500 block mb-1">{l.i}</span><Badge type={l.r==='Critical'||l.r==='High'?'danger':'warning'}>{l.r} Risk</Badge></td>
                <td className="py-5 px-4 text-right"><button className="btn-primary px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider">BLOCK IP</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  </div>
);

export const DarkWebPage = () => (
  <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
    <div className="flex justify-between items-center border-b border-[#222] pb-6">
      <h2 className="text-3xl font-black text-white flex items-center gap-3"><Globe className="text-[#ff3333] w-8 h-8"/> Dark Web Monitor</h2>
      <button className="btn-primary px-8 py-3 rounded-lg font-bold text-sm tracking-widest uppercase flex items-center gap-2"><Search className="w-4 h-4"/> Deep Scan</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[{t:'Compromised Emails',v:45,d:'Corporate emails found in plaintext credential dumps.',icon:<Mail className="w-8 h-8 text-white"/>},{t:'Leaked Passwords',v:12,d:'Hash collisions detected for current active directory passwords.',icon:<Lock className="w-8 h-8 text-white"/>},{t:'Source Code Leaks',v:0,d:'Proprietary codebase snippets found on public repositories.',icon:<FileText className="w-8 h-8 text-white"/>}].map((c,i)=>(
        <GlassCard key={i} delay={`delay-${(i+1)*100}`} className="flex flex-col items-center text-center hover:border-[#ff3333] pt-12 pb-12">
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{c.t}</h3>
          <div className="icon-circle w-24 h-24 mb-6 animate-float">{c.icon}</div>
          <p className="text-gray-400 text-sm px-6 leading-relaxed">{c.d}</p>
          <div className="mt-8 pt-8 border-t border-[#333] w-full">
            <h3 className={`text-5xl font-black ${c.v>0?'text-[#ff3333]':'text-gray-500'}`}><AnimatedNumber end={c.v}/></h3>
            <span className="text-xs text-gray-500 uppercase font-black tracking-widest mt-2 block">Incidents</span>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>
);

export const ThreatPredictionPage = () => (
  <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white flex items-center gap-3 border-b border-[#222] pb-6"><Zap className="text-[#FF7B00] w-8 h-8"/> 7-Day AI Threat Forecast</h2>
    <GlassCard className="p-10">
      <div className="flex justify-between items-center mb-10">
        <div><h3 className="text-2xl font-bold text-white">Predictive Attack Volume</h3><p className="text-gray-400 mt-2 font-medium">Machine learning model forecasting based on historical global trends.</p></div>
        <Badge type="danger">High Confidence Forecast</Badge>
      </div>
      <div className="h-[450px] relative w-full">
        <svg viewBox="0 0 1000 300" className="w-full h-full drop-shadow-[0_10px_30px_rgba(255,51,51,0.2)]">
          <defs><linearGradient id="mainGraphGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(255,123,0,0.6)"/><stop offset="100%" stopColor="rgba(255,0,60,0.05)"/></linearGradient></defs>
          {[50,125,200,275].map(y=><line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="#333" strokeWidth="1" strokeDasharray="4,4"/>)}
          <path d="M0,250 L125,200 L250,220 L375,100 L500,150 L625,60 L750,90 L875,30 L1000,70 L1000,300 L0,300 Z" fill="url(#mainGraphGrad)" className="animate-fade-up delay-200"/>
          <path d="M0,250 L125,200 L250,220 L375,100 L500,150 L625,60 L750,90 L875,30 L1000,70" fill="none" stroke="#ff3333" strokeWidth="5" className="animate-draw" style={{strokeLinecap:'round',strokeLinejoin:'round'}}/>
          {[[125,200],[250,220],[375,100],[500,150],[625,60],[750,90],[875,30]].map((pt,i)=>(
            <g key={i} className="animate-pop-in" style={{animationDelay:`${(i+3)*100}ms`}}>
              <circle cx={pt[0]} cy={pt[1]} r="7" fill="#111" stroke="#FF7B00" strokeWidth="4" className="cursor-pointer"/>
              <text x={pt[0]-12} y={pt[1]-20} fill="white" fontSize="14" fontWeight="900">{300-pt[1]}</text>
            </g>
          ))}
        </svg>
        <div className="flex justify-between text-sm text-gray-500 mt-6 px-6 uppercase tracking-widest font-black">
          {['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7'].map(d=><span key={d}>{d}</span>)}
        </div>
      </div>
    </GlassCard>
  </div>
);

export const NotificationPage = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
    <div className="flex items-center justify-between border-b border-[#222] pb-6">
      <h2 className="text-3xl font-black text-white flex items-center gap-3"><Bell className="text-[#ff3333] w-8 h-8"/> Notification Center</h2>
      <button className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-wider">Mark all as read</button>
    </div>
    <div className="space-y-4 mt-4">
      {[{t:'Critical Payload Blocked',d:'Firewall intercepted a known malware signature from IP 192.168.1.45',time:'2 mins ago',type:'critical'},{t:'Unusual Login Attempt',d:'Multiple failed logins detected for user admin@shieldmind.io from Moscow.',time:'1 hr ago',type:'warning'},{t:'System Update Complete',d:'Threat definition database successfully updated to v2.4.1',time:'5 hrs ago',type:'info'},{t:'Dark Web Alert',d:'Your company domain was found in a recent data dump.',time:'1 day ago',type:'critical'}].map((n,i)=>(
        <div key={i} className={`p-6 rounded-xl border-l-4 flex gap-5 transition-all hover:translate-x-2 ${n.type==='critical'?'bg-[#150505] border-[#ff3333] shadow-[0_5px_15px_rgba(255,51,51,0.1)]':n.type==='warning'?'bg-[#151000] border-yellow-500':'bg-[#0d0d0d] border-[#444]'}`}>
          <div className={`w-4 h-4 rounded-full mt-1.5 ${n.type==='critical'?'bg-[#ff3333] animate-pulse':n.type==='warning'?'bg-yellow-500':'bg-gray-400'}`}></div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">{n.t}</h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">{n.d}</p>
            <span className="text-xs text-gray-500 mt-4 block font-bold uppercase tracking-widest">{n.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ProfilePage = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white flex items-center gap-3 border-b border-[#222] pb-6"><UserCircle className="text-white w-8 h-8"/> Admin Profile & Settings</h2>
    <GlassCard className="flex flex-col md:flex-row gap-10 items-center md:items-start p-10">
      <div className="w-40 h-40 rounded-full border-4 border-[#ff3333] bg-[#111] flex items-center justify-center shadow-[0_0_30px_rgba(255,51,51,0.3)] relative">
        <User className="w-20 h-20 text-gray-400" />
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#ff3333] rounded-full border-4 border-[#0d0d0d]"></div>
      </div>
      <div className="flex-1 space-y-5 text-center md:text-left">
        <div><h3 className="text-4xl font-black text-white">Administrator OS</h3><p className="text-gray-400 font-mono mt-2 text-lg">admin@shieldmind.io</p></div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start"><Badge type="danger">Super Admin</Badge><Badge type="info">Clearance Level 5</Badge></div>
        <p className="text-gray-400 text-sm leading-relaxed mt-4 font-medium border-t border-[#333] pt-4">Last login: 10 minutes ago from 192.168.1.1 (Secure Network). System privileges fully granted. MFA is active.</p>
        <button className="btn-secondary px-8 py-3 rounded-lg font-bold mt-6 flex items-center gap-2 mx-auto md:mx-0 tracking-wider uppercase text-xs"><Settings className="w-4 h-4"/> Manage Account</button>
      </div>
    </GlassCard>
  </div>
);

export const ContactPage = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white flex items-center gap-3 border-b border-[#222] pb-6"><Phone className="text-white w-8 h-8"/> Contact Command Center</h2>
    <GlassCard className="p-10">
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div><label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Agent Name</label><input type="text" className="w-full bg-[#111] border border-[#333] rounded-xl p-4 text-white focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_15px_rgba(255,51,51,0.2)] transition-all font-medium" /></div>
          <div><label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Secure Email</label><input type="email" className="w-full bg-[#111] border border-[#333] rounded-xl p-4 text-white focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_15px_rgba(255,51,51,0.2)] transition-all font-medium" /></div>
        </div>
        <div><label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Incident Category</label>
          <select className="w-full bg-[#111] border border-[#333] rounded-xl p-4 text-white focus:outline-none focus:border-[#ff3333] transition-all font-medium appearance-none">
            <option>Security Breach Report</option><option>System Upgrade Request</option><option>General Inquiry</option>
          </select>
        </div>
        <div><label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Encrypted Message</label><textarea className="w-full bg-[#111] border border-[#333] rounded-xl p-5 text-white focus:outline-none focus:border-[#ff3333] transition-all h-40 resize-none font-medium"></textarea></div>
        <button type="button" className="btn-primary w-full py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 uppercase tracking-widest">Transmit Securely <Send className="w-6 h-6"/></button>
      </form>
    </GlassCard>
  </div>
);

export const EmailScan = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3 border-b border-[#222] pb-6"><Mail className="text-[#ff3333] w-8 h-8"/> Deep Email Analysis</h2>
    <GlassCard className="relative p-8">
      <label className="block text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Raw Email Payload</label>
      <textarea className="w-full h-80 bg-[#0a0a0a] border border-[#333] rounded-xl p-6 text-gray-300 focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_20px_rgba(255,51,51,0.15)] resize-none font-mono text-sm leading-relaxed"></textarea>
      <div className="mt-8 flex justify-end"><button className="btn-primary px-10 py-4 rounded-xl font-bold flex items-center gap-3 text-lg tracking-wide"><Search className="w-6 h-6"/> Analyze Payload</button></div>
    </GlassCard>
  </div>
);

export const URLScan = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
    <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3 border-b border-[#222] pb-6"><LinkIcon className="text-[#ff3333] w-8 h-8"/> Real-time URL Scanner</h2>
    <GlassCard className="p-10">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="relative flex-grow">
          <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
          <input type="text" className="w-full bg-[#111] border border-[#333] text-white rounded-xl pl-16 pr-6 py-5 focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_15px_rgba(255,51,51,0.2)] font-mono text-lg transition-all" />
        </div>
        <button className="btn-primary px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 text-lg tracking-wide whitespace-nowrap"><Eye className="w-6 h-6"/> Scan Domain</button>
      </div>
      <p className="text-gray-500 text-sm mt-6 font-medium"><AlertTriangle className="w-4 h-4 inline mr-1 text-yellow-500"/> URLs are executed in an isolated cloud sandbox environment.</p>
    </GlassCard>
  </div>
);

export const AlertsReports = () => (
  <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
    <div className="flex justify-between items-center border-b border-[#222] pb-6">
      <h2 className="text-3xl font-black text-white flex items-center gap-3"><ShieldAlert className="text-[#ff3333] w-8 h-8"/> Systems Audit Logs</h2>
      <button className="btn-secondary px-8 py-3 rounded-lg font-bold flex gap-2 items-center uppercase tracking-widest text-xs"><Download className="w-4 h-4"/> Export CSV</button>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead><tr className="bg-[#111] text-gray-400 border-b border-[#333] uppercase tracking-widest text-xs">
          <th className="py-5 px-6 font-bold">Date</th><th className="py-5 px-6 font-bold">Event ID</th>
          <th className="py-5 px-6 font-bold">Severity</th><th className="py-5 px-6 font-bold text-right">Action</th>
        </tr></thead>
        <tbody>
          {[1,2,3,4,5,6].map(i=>(
            <tr key={i} className="border-b border-[#222] hover:bg-[#151515] transition-colors group cursor-pointer">
              <td className="py-5 px-6 text-gray-400 font-medium">Oct 24, 2026</td>
              <td className="py-5 px-6 text-white font-mono font-bold">EVT-892{i}1</td>
              <td className="py-5 px-6"><Badge type={i%2===0?'danger':'warning'}>{i%2===0?'CRITICAL':'MEDIUM'}</Badge></td>
              <td className="py-5 px-6 text-right"><button className="text-gray-500 group-hover:text-[#ff3333] transition-colors"><ChevronRight className="w-6 h-6"/></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </GlassCard>
  </div>
);
