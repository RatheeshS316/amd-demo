import { useState, useEffect, useRef } from 'react';
import {
  Shield, ShieldAlert, Mail, Link as LinkIcon, Activity, Bell, LogOut,
  X, ChevronRight, AlertTriangle, Lock, User, Search, MapPin, Download,
  ArrowUpRight, Fingerprint, Eye, Send, Bot, Globe, Zap, Phone,
  UserCircle, Settings, Crosshair, ShieldCheck, Paperclip, FileText
} from 'lucide-react';

export const GlassCard = ({ children, className = '', onClick, delay = '' }) => (
  <div onClick={onClick} className={`glass-card p-6 ${delay} ${onClick ? 'cursor-pointer' : ''} ${className}`}>
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

export const AnimatedNumber = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
      else setCount(end);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return <span>{count}{suffix}</span>;
};

export const Badge = ({ type, children }) => {
  const colors = {
    safe: 'bg-[#ff3333]/10 text-[#ff3333] border-[#ff3333]/30',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    danger: 'bg-gradient-to-r from-[#FF7B00]/20 to-[#FF003C]/20 text-[#FF3333] border-[#FF3333]/50 animate-pulse-red',
    info: 'bg-gray-500/10 text-gray-300 border-gray-500/30',
  };
  return <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${colors[type]}`}>{children}</span>;
};

export const ParticlesOverlay = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#ff3333] rounded-full animate-float shadow-[0_0_15px_#ff3333]" style={{animationDelay:'1s',animationDuration:'4s'}}></div>
    <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-[#FF7B00] rounded-full animate-float shadow-[0_0_20px_#FF7B00]" style={{animationDelay:'0s',animationDuration:'5s'}}></div>
    <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-white rounded-full animate-float shadow-[0_0_10px_#ffffff]" style={{animationDelay:'2s',animationDuration:'3s'}}></div>
    <div className="absolute top-[30%] right-[30%] w-2.5 h-2.5 bg-[#ff3333] rounded-full animate-float shadow-[0_0_15px_#ff3333]" style={{animationDelay:'1.5s',animationDuration:'6s'}}></div>
  </div>
);

export const Copilot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'ShieldMind Copilot online. Upload threat logs, screenshots, or ask for analysis.' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping, isOpen]);
  const handleFileUpload = (e) => { const file = e.target.files[0]; if (file) setAttachedFile(file); };
  const handleSend = () => {
    if (!input.trim() && !attachedFile) return;
    let msgContent = input;
    if (attachedFile) msgContent = `[Attached File: ${attachedFile.name}] ` + msgContent;
    setMessages(prev => [...prev, { sender: 'user', text: msgContent, hasFile: !!attachedFile }]);
    setInput(''); setAttachedFile(null); setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'ai', text: 'Deep analyzing attached payload and contextual request. Cross-referencing with global threat DB... High probability of zero-day exploit signature matched.' }]);
    }, 2500);
  };
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="glass-card w-[350px] sm:w-[400px] h-[550px] mb-4 flex flex-col animate-pop-in p-0 border-[#ff3333]/50 shadow-[0_15px_50px_rgba(255,51,51,0.2)]">
          <div className="p-4 border-b border-[#222] bg-[#0a0a0a] flex justify-between items-center rounded-t-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,51,51,0.15)_0%,transparent_70%)]"></div>
            <div className="flex items-center gap-3 relative z-10">
              <Bot className="w-6 h-6 text-[#FF7B00] animate-pulse-glow" />
              <span className="font-bold text-white tracking-wide">ShieldMind AI Copilot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white relative z-10 transition-transform hover:rotate-90"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-[#050505]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`} style={{ animationDuration: '0.4s' }}>
                <div className={`max-w-[85%] p-3 rounded-xl shadow-md ${msg.sender === 'user' ? 'bg-gradient-to-r from-[#441111] to-[#661111] border border-[#ff3333]/40 text-white rounded-br-none' : 'bg-[#111] text-gray-300 border border-[#333] rounded-bl-none'}`}>
                  {msg.hasFile && <div className="flex items-center gap-2 mb-2 bg-[#050505] p-2 rounded text-xs text-[#ff3333] border border-[#ff3333]/20"><FileText className="w-4 h-4"/> Attached Payload</div>}
                  {msg.text.replace(/\[Attached File: .*\] /, '')}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fade-up" style={{ animationDuration: '0.3s' }}>
                <div className="bg-[#111] border border-[#333] p-3 rounded-xl rounded-bl-none flex gap-1.5 items-center h-10">
                  {[0,150,300].map(d => <div key={d} className="w-2 h-2 bg-[#ff3333] rounded-full animate-bounce" style={{animationDelay:`${d}ms`}}></div>)}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-[#222] bg-[#0a0a0a]">
            {attachedFile && (
              <div className="flex items-center justify-between bg-[#111] border border-[#ff3333]/30 p-2 rounded mb-3 text-xs text-gray-300 animate-pop-in">
                <span className="truncate flex items-center gap-2"><Paperclip className="w-3 h-3 text-[#ff3333]"/> {attachedFile.name}</span>
                <button onClick={() => setAttachedFile(null)}><X className="w-3 h-3 hover:text-red-500"/></button>
              </div>
            )}
            <div className="flex gap-2 items-center">
              <button onClick={() => fileInputRef.current?.click()} className="p-2.5 text-gray-400 hover:text-[#ff3333] transition-colors bg-[#151515] rounded-lg border border-[#333] hover:border-[#ff3333]/50">
                <Paperclip className="w-5 h-5" />
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
              </button>
              <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-[#151515] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_10px_rgba(255,51,51,0.2)] transition-all text-sm" />
              <button onClick={handleSend} className="bg-gradient-to-r from-[#FF7B00] to-[#FF003C] text-white p-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_10px_rgba(255,51,51,0.3)]">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF7B00] to-[#FF003C] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,51,51,0.6)] hover:scale-110 transition-transform animate-float">
        {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8" />}
      </button>
    </div>
  );
};
