import React from 'react';
import { Flame, ShieldCheck, Zap, Send, ChevronRight, Dices, Mail } from 'lucide-react';
import FloatingIcons from './FloatingIcons';
import { useSound } from '../hooks/useSound';

const Hero: React.FC = () => {
  const { playClick, playHover, playCoinsDrop } = useSound();

  return (
    <section id="vault-hero" className="relative min-h-screen flex flex-col items-center overflow-hidden pt-14 md:pt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-casino-black z-0 pointer-events-none">
        {/* Cyber Grid - Very subtle */}
        <div className="absolute inset-0 bg-cyber-grid bg-[size:60px_60px] opacity-10"></div>
        
        {/* Luxury Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-fast"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      
      <FloatingIcons />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex-1 flex flex-col justify-center pb-6">
        
        {/* Trust Badges Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6 animate-fade-in">
            {/* Vault Active Pill - Crystal Glass */}
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-[#0a0a0e]/60 backdrop-blur-xl shadow-lg">
                <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse shadow-[0_0_10px_#5c0105]"></div>
                <span className="text-gray-300 text-xs font-bold tracking-[0.2em] uppercase">Welcome Vault Active</span>
            </div>
        </div>

        {/* Headline */}
        <h1 className="relative z-20 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4 leading-[0.9] drop-shadow-2xl">
          DOUBLE YOUR <br />
          <span className="relative inline-block mt-2">
             <span className="text-gradient-gold glow-text">
              DEPOSIT
            </span>
             {/* Subtle underline accent */}
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent blur-sm"></div>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed tracking-wide">
          <span className="text-white font-medium border-b border-brand-gold/30 pb-1">100% Real Cash</span>. Zero locked funds. <br className="hidden md:block" />
          The most transparent bonus in private gaming.
        </p>
        
        {/* CTA Stack */}
        <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
              <button 
                onMouseEnter={playHover}
                onClick={() => {
                    playCoinsDrop();
                    document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'});
                }}
                className="group relative w-full sm:w-auto px-10 py-5 bg-brand-red text-white rounded-sm font-bold text-sm tracking-[0.1em] hover:bg-brand-red-light transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_10px_30px_rgba(92,1,5,0.3)] overflow-hidden border border-brand-gold/50"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
                
                <span>CALCULATE BONUS</span>
                <ChevronRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a 
                href="https://casin0x.com/join"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#0a0a0e] border border-brand-gold/50 text-brand-gold rounded-sm font-bold text-sm tracking-[0.1em] overflow-hidden transition-all duration-500 hover:border-brand-gold hover:shadow-[0_0_30px_rgba(200,117,42,0.3)] flex items-center justify-center gap-4"
              >
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <Dices className="w-5 h-5 text-brand-gold animate-pulse relative z-10" />
                <span className="relative z-10 text-gradient-gold font-black tracking-widest">PLAY NOW</span>
                
                {/* Continuous Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none"></div>
              </a>
            </div>

            {/* Instant Access Options */}
            <div className="animate-fade-in flex flex-col items-center gap-2 mt-2">
                 <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium opacity-60">Instant Private Access</span>
                 <div className="flex flex-wrap justify-center items-center gap-3">
                    {/* Telegram */}
                    <a href="https://casin0x.com/join" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-[#229ED9]/10 border border-[#229ED9]/20 rounded-sm text-[#229ED9] hover:bg-[#229ED9]/20 transition-all duration-300 hover:border-[#229ED9]/40 group shadow-[0_0_15px_rgba(34,158,217,0.1)]">
                        <Send className="w-3 h-3 group-hover:-rotate-12 transition-transform duration-300" /> 
                        <span className="text-xs font-bold tracking-wide">TELEGRAM</span>
                    </a>

                    {/* Google */}
                    <a href="https://casin0x.com/join" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:border-white/20 group">
                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"/><path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"/><path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05"/><path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.0344664 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/></svg>
                        <span className="text-xs font-bold tracking-wide">GOOGLE</span>
                    </a>

                    {/* Email */}
                     <a href="https://casin0x.com/join" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-sm text-brand-gold hover:bg-brand-gold/20 transition-all duration-300 hover:border-brand-gold/40 group shadow-[0_0_15px_rgba(200,117,42,0.1)]">
                        <Mail className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-bold tracking-wide">EMAIL</span>
                    </a>
                 </div>
            </div>
        </div>
      </div>

      {/* Stats Ticker - Crystal Glass */}
      <div className="relative w-full border-t border-white/5 bg-[#050507]/80 backdrop-blur-md py-4 z-20 mt-auto">
         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-y-4 gap-x-12 text-center">
            <div className="flex items-center gap-4 group cursor-default">
                <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-green-500/30 transition-colors duration-500">
                    <ShieldCheck className="text-gray-400 group-hover:text-green-400 w-4 h-4 transition-colors duration-500" />
                </div>
                <div className="text-left">
                    <div className="text-white font-bold text-xs tracking-widest uppercase">100% Transparent</div>
                    <div className="text-[9px] text-gray-500 font-medium tracking-wide">BLOCKCHAIN VERIFIED</div>
                </div>
            </div>
            <div className="flex items-center gap-4 group cursor-default">
                <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-brand-gold/30 transition-colors duration-500">
                    <Zap className="text-gray-400 group-hover:text-brand-gold w-4 h-4 transition-colors duration-500" />
                </div>
                <div className="text-left">
                    <div className="text-white font-bold text-xs tracking-widest uppercase">Instant Cashouts</div>
                    <div className="text-[9px] text-gray-500 font-medium tracking-wide">NO QUESTIONS ASKED</div>
                </div>
            </div>
             <div className="flex items-center gap-4 group cursor-default">
                <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-brand-red/30 transition-colors duration-500">
                    <Flame className="text-gray-400 group-hover:text-brand-red w-4 h-4 transition-colors duration-500" />
                </div>
                <div className="text-left">
                    <div className="text-white font-bold text-xs tracking-widest uppercase">No KYC Required</div>
                    <div className="text-[9px] text-gray-500 font-medium tracking-wide">UNDER $10K USD</div>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;