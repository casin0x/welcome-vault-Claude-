import React from 'react';
import { Dices, Spade, Heart, Club, Diamond } from 'lucide-react';

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      
      {/* --- CRYPTO COINS (Real colored logos) --- */}

      {/* BTC - Top Left */}
      <div className="absolute top-[12%] left-[2%] md:left-[8%] w-16 h-16 md:w-20 md:h-20 animate-float opacity-30 hover:opacity-50 transition-opacity duration-500">
        <img 
            src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png" 
            alt="BTC" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(247,147,26,0.2)]"
        />
      </div>

      {/* ETH - Bottom Right Area */}
      <div className="absolute top-[65%] right-[2%] md:right-[12%] w-20 h-20 md:w-24 md:h-24 animate-float-delayed opacity-25 hover:opacity-40 transition-opacity duration-500 rotate-12">
        <img 
            src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png" 
            alt="ETH" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(98,126,234,0.2)]"
        />
      </div>

      {/* USDT - Bottom Left */}
      <div className="absolute bottom-[15%] left-[5%] md:left-[10%] w-14 h-14 md:w-18 md:h-18 animate-float opacity-20 hover:opacity-40 transition-opacity duration-500 -rotate-12">
         <img 
            src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdt.png" 
            alt="USDT" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(38,161,123,0.2)]"
        />
      </div>

       {/* SOL - Top Right */}
      <div className="absolute top-[18%] right-[5%] md:right-[8%] w-16 h-16 md:w-20 md:h-20 animate-float opacity-25 hover:opacity-40 transition-opacity duration-500 rotate-6">
         <img 
            src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/sol.png" 
            alt="SOL" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(20,241,149,0.2)]"
        />
      </div>


      {/* --- CASINO ELEMENTS (Lucide Icons) --- */}

      {/* Dice - Floating Center-Left */}
      <div className="absolute top-[42%] left-[-2%] md:left-[4%] text-brand-red opacity-20 animate-float-delayed">
        <Dices className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(92,1,5,0.4)] rotate-45" />
      </div>

      {/* Spade - Top Center-ish */}
      <div className="absolute top-[8%] left-[42%] text-white/10 opacity-40 animate-float">
        <Spade className="w-10 h-10 md:w-14 md:h-14 blur-[0.5px] rotate-[-15deg]" />
      </div>

       {/* Heart - Bottom Center-ish */}
      <div className="absolute bottom-[20%] left-[50%] md:left-[55%] text-brand-red opacity-15 animate-float-delayed">
        <Heart className="w-16 h-16 md:w-20 md:h-20 blur-[1px] rotate-[15deg]" />
      </div>
      
       {/* Diamond - Middle Right */}
      <div className="absolute top-[45%] right-[-2%] md:right-[2%] text-brand-gold opacity-15 animate-float">
        <Diamond className="w-24 h-24 md:w-28 md:h-28 blur-[2px] rotate-[-30deg]" />
      </div>

      {/* Club - Very Top Right */}
      <div className="absolute top-[8%] right-[25%] text-white/5 opacity-50 animate-float-delayed">
        <Club className="w-8 h-8 md:w-10 md:h-10 rotate-12" />
      </div>

      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[-1]"></div>
    </div>
  );
};

export default FloatingIcons;