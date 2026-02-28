export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  body { font-family: 'Inter', sans-serif; background-color: #050505; color: #e2e8f0; margin: 0; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #ff3333; }
  .glass-card {
    background-color: #0d0d0d;
    background-image: linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px);
    background-size: 20px 20px;
    border: 1px solid rgba(50,50,50,0.5);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.8);
    transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
    position: relative; overflow: hidden;
  }
  .glass-card::before {
    content:''; position:absolute; top:0; left:-100%; width:50%; height:100%;
    background:linear-gradient(to right,transparent,rgba(255,51,51,0.08),transparent);
    transform:skewX(-25deg); transition:all 0.7s ease; pointer-events:none; z-index:1;
  }
  .glass-card:hover::before { left:200%; }
  .glass-card:hover { border-color:rgba(255,51,51,0.6); box-shadow:0 12px 35px rgba(255,51,51,0.15),inset 0 0 15px rgba(255,51,51,0.05); transform:translateY(-5px); }
  .icon-circle {
    background:linear-gradient(135deg,#FF7B00,#FF003C); border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 0 15px rgba(255,51,51,0.3); position:relative; flex-shrink:0; aspect-ratio:1/1;
  }
  .icon-circle::after {
    content:''; position:absolute; inset:-2px; border-radius:50%;
    background:linear-gradient(135deg,#FF7B00,#FF003C); filter:blur(8px);
    opacity:0.4; z-index:-1; transition:opacity 0.3s ease;
  }
  .glass-card:hover .icon-circle::after { opacity:0.8; }
  .text-cyber-red { color:#ff3333; text-shadow:0 0 20px rgba(255,51,51,0.3); }
  .btn-primary {
    background:rgba(40,5,5,0.8); border:1px solid #ff3333; color:#ff3333;
    transition:all 0.3s ease; position:relative; overflow:hidden;
  }
  .btn-primary::before {
    content:''; position:absolute; top:0; left:-100%; width:50%; height:100%;
    background:linear-gradient(to right,transparent,rgba(255,255,255,0.2),transparent);
    transform:skewX(-20deg); transition:all 0.5s ease;
  }
  .btn-primary:hover::before { left:150%; }
  .btn-primary:hover { background:#ff3333; color:#050505; box-shadow:0 0 25px rgba(255,51,51,0.6); transform:scale(1.02); }
  .btn-secondary { background:rgba(25,25,25,0.8); border:1px solid rgba(255,255,255,0.1); color:#ffffff; transition:all 0.3s ease; }
  .btn-secondary:hover { background:rgba(50,50,50,0.8); border-color:rgba(255,255,255,0.4); box-shadow:0 0 15px rgba(255,255,255,0.1); }
  .cyber-grid {
    background-size:60px 60px;
    background-image:linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px);
    position:absolute; top:-50%; left:-50%; right:-50%; bottom:-50%; z-index:0;
    transform:perspective(600px) rotateX(60deg) translateY(-100px) translateZ(-200px);
    animation:gridMove 20s linear infinite;
  }
  @keyframes gridMove { 0%{transform:perspective(600px) rotateX(60deg) translateY(0) translateZ(-200px);} 100%{transform:perspective(600px) rotateX(60deg) translateY(60px) translateZ(-200px);} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(40px);} to{opacity:1;transform:translateY(0);} }
  @keyframes popIn { 0%{opacity:0;transform:scale(0.9);} 50%{transform:scale(1.02);} 100%{opacity:1;transform:scale(1);} }
  @keyframes float { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-15px);} }
  @keyframes drawLine { to{stroke-dashoffset:0;} }
  @keyframes pulseRed { 0%{box-shadow:0 0 0 0 rgba(255,51,51,0.5);} 70%{box-shadow:0 0 0 20px rgba(255,51,51,0);} 100%{box-shadow:0 0 0 0 rgba(255,51,51,0);} }
  @keyframes pulseGlow { 0%,100%{filter:drop-shadow(0 0 10px rgba(255,51,51,0.3));} 50%{filter:drop-shadow(0 0 25px rgba(255,51,51,0.8));} }
  @keyframes sweep { 0%{background-position:-200% 0;} 100%{background-position:200% 0;} }
  @keyframes progress { 0%{stroke-dasharray:0 100;} }
  .animate-fade-up { animation:fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
  .animate-pop-in { animation:popIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
  .animate-float { animation:float 6s ease-in-out infinite; }
  .animate-draw { stroke-dasharray:1000; stroke-dashoffset:1000; animation:drawLine 2s ease-out forwards; }
  .animate-pulse-red { animation:pulseRed 2s infinite; }
  .animate-pulse-glow { animation:pulseGlow 3s ease-in-out infinite; }
  .delay-100{animation-delay:100ms;} .delay-200{animation-delay:200ms;} .delay-300{animation-delay:300ms;} .delay-400{animation-delay:400ms;} .delay-500{animation-delay:500ms;}
  .circular-chart { display:block; margin:0 auto; max-width:100%; max-height:250px; }
  .circle-bg { fill:none; stroke:#1a1a1a; stroke-width:2.5; }
  .circle { fill:none; stroke-width:2.5; stroke-linecap:round; animation:progress 2.5s cubic-bezier(0.16,1,0.3,1) forwards; }
  .shimmer-text {
    background:linear-gradient(90deg,#fff 0%,#ff3333 50%,#fff 100%);
    background-size:200% auto; color:transparent;
    -webkit-background-clip:text; background-clip:text; animation:sweep 4s linear infinite;
  }
`;
