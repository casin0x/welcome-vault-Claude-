import React, { useState, useEffect, useRef } from 'react';
import { Wallet, Dice5, Unlock, Banknote, Clock, CheckCircle2 } from 'lucide-react';
import { useSound } from '../hooks/useSound';

const VaultExplainer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { playHover, playClick } = useSound();
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const steps = [
    {
      id: 0,
      title: "Deposit",
      icon: <Wallet className="w-6 h-6" />,
      desc: "Your first deposit is mirrored inside a locked Vault.",
      detail: "1:1 MATCH",
      color: "text-blue-400",
      bg: "bg-blue-500",
    },
    {
      id: 1,
      title: "Wager",
      icon: <Dice5 className="w-6 h-6" />,
      desc: "As you wager, the Vault unlocks in four predictable stages.",
      detail: "LIVE UPDATES",
      color: "text-purple-400",
      bg: "bg-purple-500",
    },
    {
      id: 2,
      title: "Unlock",
      icon: <Unlock className="w-6 h-6" />,
      desc: "Each stage releases 25% of your deposit as real cash.",
      detail: "INSTANT CREDIT",
      color: "text-brand-gold",
      bg: "bg-brand-gold",
    },
    {
      id: 3,
      title: "Real Cash",
      icon: <Banknote className="w-6 h-6" />,
      desc: "Unlocked funds are real money forever.",
      detail: "NO ROLLOVER",
      color: "text-accent-green",
      bg: "bg-accent-green",
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, steps.length]);

  const handleStepClick = (index: number) => {
    playClick();
    setActiveStep(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="mechanics" className="py-14 bg-casino-black relative overflow-hidden">
       {/* 1px Gradient Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4">The Mechanism</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">HOW IT WORKS</h3>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Navigation Rail */}
            <div className="col-span-4 space-y-2">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  onMouseEnter={playHover}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-500 relative overflow-hidden group ${
                    activeStep === index 
                      ? 'bg-white/5 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                   {/* Left accent bar */}
                   {activeStep === index && (
                     <div className={`absolute left-0 top-0 bottom-0 w-1 ${step.bg}`}></div>
                   )}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-500 ${
                      activeStep === index ? `${step.bg}/20 border border-${step.color.split('-')[1]}-500/50` : 'bg-gray-900/50 border border-white/5'
                    }`}>
                      {React.cloneElement(step.icon, { className: `w-4 h-4 ${activeStep === index ? step.color : 'text-gray-600'}` })}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold uppercase tracking-wide transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'}`}>
                        {step.title}
                      </h4>
                      {activeStep === index && <p className="text-[9px] text-gray-500 mt-1 animate-fade-in tracking-widest uppercase">Phase 0{index + 1}</p>}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Central Display - Crystal Glass */}
            <div className="col-span-8">
              <div className="relative h-[360px] glass-panel rounded-sm overflow-hidden flex items-center justify-center p-6">
                 {/* Dynamic ambient glow */}
                 <div className={`absolute inset-0 opacity-10 transition-colors duration-1000 blur-3xl ${
                    activeStep === 0 ? 'bg-blue-600' :
                    activeStep === 1 ? 'bg-purple-600' :
                    activeStep === 2 ? 'bg-brand-gold' : 'bg-accent-green'
                 }`}></div>
                 
                 <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>

                 <div key={activeStep} className="relative z-10 text-center animate-fade-in">
                    <div className={`w-16 h-16 mx-auto rounded-full ${steps[activeStep].bg}/20 border border-${steps[activeStep].color.split('-')[1]}-500/50 flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.5)] mb-6`}>
                      {React.cloneElement(steps[activeStep].icon, { className: `w-6 h-6 ${steps[activeStep].color} drop-shadow-lg` })}
                    </div>
                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight uppercase">{steps[activeStep].title}</h4>
                    <p className="text-base text-gray-400 max-w-lg mx-auto leading-relaxed mb-6 font-light">
                      {steps[activeStep].desc}
                    </p>
                    <div className={`inline-block px-4 py-2 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] ${steps[activeStep].color}`}>
                       {steps[activeStep].detail}
                    </div>
                 </div>

                 {/* Progress Indicators */}
                 <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {steps.map((_, i) => (
                      <div key={i} className={`h-1 transition-all duration-500 ${i === activeStep ? `w-12 ${steps[activeStep].bg}` : 'w-4 bg-gray-800'}`} />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
            {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                    <div 
                        key={index} 
                        onClick={() => handleStepClick(index)}
                        className={`glass-panel p-6 rounded-sm border transition-all duration-500 ${
                            isActive ? `border-${step.color.split('-')[1]}-500/50 bg-white/5` : 'border-white/5'
                        }`}
                    >
                        <div className="flex items-center gap-4 mb-3">
                            {React.cloneElement(step.icon, { className: `w-5 h-5 ${isActive ? step.color : 'text-gray-500'}` })}
                            <h4 className={`text-lg font-bold uppercase tracking-wide ${isActive ? 'text-white' : 'text-gray-500'}`}>
                                {step.title}
                            </h4>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                );
            })}
        </div>

        {/* 24 Hour Timer Card */}
        <div className="mt-10">
            <div className="glass-panel rounded-sm p-px bg-gradient-to-r from-brand-red/40 via-transparent to-brand-red/40">
                <div className="bg-[#050507]/90 rounded-sm p-6 flex flex-col md:flex-row items-center gap-8 relative z-10">
                     <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full border border-brand-red/30 flex items-center justify-center relative z-10 bg-brand-red/5">
                            <Clock className="w-6 h-6 text-brand-red animate-[spin_20s_linear_infinite]" />
                        </div>
                     </div>
                     
                     <div className="text-center md:text-left flex-1">
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 text-brand-red text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
                            Critical Rule
                         </div>
                         <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                            24 HOUR PROTOCOL
                         </h4>
                         <p className="text-gray-400 text-sm font-light leading-relaxed">
                             You have exactly <span className="text-white font-medium border-b border-brand-red">24 hours</span> from your first deposit to unlock the Vault. Unlocked funds are retained permanently. Locked funds expire.
                         </p>
                     </div>

                     <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/[0.03] px-5 py-3 rounded-sm border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-accent-green" />
                            <span>Unlocked = Yours Forever</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/[0.03] px-5 py-3 rounded-sm border border-white/5">
                            <Clock className="w-4 h-4 text-brand-red" />
                            <span>Locked = Expires in 24h</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default VaultExplainer;