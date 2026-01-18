import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Unlock, Lock, PlayCircle, RefreshCcw, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSound } from '../hooks/useSound';

const VaultCalculator: React.FC = () => {
  const [deposit, setDeposit] = useState(500);
  const [simulatedWager, setSimulatedWager] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const { playSpin, playCoin, playCoinsDrop, playClick } = useSound();
  
  const requestRef = useRef<number | null>(null);

  const totalWagerRequired = deposit * 60;
  const stageSize = totalWagerRequired / 4;
  const cashPerStage = deposit * 0.25;
  const maxPayout = Math.min(deposit, 100000);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(Number(e.target.value));
    setSimulatedWager(0);
    setShowCelebration(false);
    playClick();
  };

  const startSimulation = () => {
    if (isSimulating) return;
    playClick();
    setIsSimulating(true);
    setShowCelebration(false);
    setSimulatedWager(0);
    
    const startTime = performance.now();
    const duration = 3000;
    
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentWager = Math.floor(progress * totalWagerRequired);
      setSimulatedWager(currentWager);

      if (Math.random() > 0.8) playSpin();

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setIsSimulating(false);
        playCoinsDrop();
        setShowCelebration(true);
      }
    };
    
    requestRef.current = requestAnimationFrame(animate);
  };

  const resetSimulation = () => {
    playClick();
    setSimulatedWager(0);
    setIsSimulating(false);
    setShowCelebration(false);
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };

  useEffect(() => {
    if (isSimulating) {
      const currentStage = Math.floor(simulatedWager / stageSize);
      const prevStage = Math.floor((simulatedWager - (totalWagerRequired/100)) / stageSize);
      
      if (currentStage > prevStage && currentStage > 0 && currentStage <= 4) {
        playCoin();
      }
    }
  }, [simulatedWager, stageSize, isSimulating, playCoin, totalWagerRequired]);

  return (
    <section id="calculator" className="py-14 bg-casino-dark relative overflow-hidden">
      {/* 1px Gradient Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Private Vault Simulator</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">ESTIMATE YOUR RETURNS</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Controls - Banking Terminal Style */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-panel p-6 rounded-sm border-t border-brand-gold/20 shadow-2xl relative">
                {/* Gold accent line */}
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>

                <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Initial Deposit Amount
                </label>
                
                <div className="relative mb-6 group">
                    <div className="flex items-baseline gap-2 relative z-20">
                        <span className="text-2xl font-light text-brand-gold">$</span>
                        <input 
                            type="number" 
                            value={deposit}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                setDeposit(val);
                                setSimulatedWager(0);
                                setShowCelebration(false);
                            }}
                            onBlur={(e) => {
                                setDeposit(Math.max(20, Math.min(100000, Number(e.target.value))));
                            }}
                            className="bg-transparent border-none text-5xl font-black text-white w-full focus:outline-none focus:ring-0 p-0 font-mono tracking-tighter"
                        />
                    </div>
                    {/* Underline input */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800 group-hover:bg-brand-gold transition-colors duration-500"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-xs font-bold pointer-events-none tracking-widest">USD</div>
                </div>

                <div className="mb-6">
                    <input 
                        type="range" 
                        min="20" 
                        max="100000" 
                        step="10"
                        value={deposit} 
                        onChange={handleSliderChange}
                        disabled={isSimulating}
                        className="w-full"
                    />
                    <div className="flex justify-between mt-4 text-[9px] text-gray-600 font-mono uppercase tracking-widest">
                        <span>Min $20</span>
                        <span>Max $100,000</span>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs uppercase tracking-widest flex items-center gap-2">Total Wager (60x)</span>
                        <span className="text-white font-mono font-bold tracking-tight text-lg">${totalWagerRequired.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-brand-gold text-xs uppercase tracking-widest flex items-center gap-2">Cash Unlock</span>
                        <span className="text-brand-gold font-mono font-bold text-2xl tracking-tight">${maxPayout.toLocaleString()}</span>
                    </div>
                </div>
                
                <div className="mt-6 space-y-4">
                    <a 
                        href="https://casin0x.com/join"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        className="w-full py-4 bg-brand-red border border-brand-gold/30 text-white rounded-sm font-bold text-sm tracking-[0.15em] flex items-center justify-center gap-3 hover:bg-brand-red-light transition-all duration-500 shadow-[0_5px_20px_rgba(92,1,5,0.4)] hover:shadow-[0_5px_30px_rgba(200,117,42,0.2)] group"
                    >
                        JOIN NOW <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform duration-300" />
                    </a>

                    <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-sm justify-center">
                         <CheckCircle2 className="text-brand-gold w-4 h-4 shrink-0" />
                         <p className="text-[10px] text-gray-400 font-medium text-center uppercase tracking-wide">
                             Instant Payouts. No Questions Asked.
                         </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 rounded-sm h-full relative overflow-hidden border border-white/5 flex flex-col bg-[#08080b]">
                
                {/* Celebration Overlay */}
                {showCelebration && (
                  <div className="absolute inset-0 z-50 bg-[#050507]/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                    <div className="relative mb-6">
                       <div className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full animate-pulse"></div>
                       <Trophy className="w-20 h-20 text-brand-gold relative z-10 drop-shadow-[0_0_35px_rgba(200,117,42,0.6)]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-[0.2em] uppercase">
                      Vault Unlocked
                    </h3>
                    <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-8 font-mono tracking-tighter">
                      ${maxPayout.toLocaleString()}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                      <a 
                        href="https://casin0x.com/join"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 bg-accent-green hover:bg-[#00a06b] text-white font-bold rounded-sm shadow-[0_0_30px_rgba(0,182,122,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm tracking-widest uppercase"
                      >
                        CLAIM CASH <ArrowRight className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={resetSimulation}
                        className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-sm transition-colors duration-300 text-sm tracking-widest uppercase border border-white/10"
                      >
                        RESET
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-gray-300 flex items-center gap-3 uppercase tracking-widest">
                        <Unlock className="w-4 h-4 text-brand-gold" />
                        Unlock Schedule
                    </h4>
                    
                    <div className="text-right">
                        <div className="text-[9px] text-gray-600 uppercase tracking-[0.2em] mb-1 font-bold">Live Wagered</div>
                        <div className={`text-xl font-mono font-bold transition-colors duration-300 ${isSimulating ? 'text-brand-gold' : 'text-white'}`}>
                            ${simulatedWager.toLocaleString()}
                        </div>
                    </div>
                  </div>

                  {/* Simulation Button */}
                   {!isSimulating && simulatedWager === 0 ? (
                         <button 
                            onClick={startSimulation}
                            className="group relative w-full py-3 bg-[#0a0a0e] border border-white/10 rounded-sm font-bold text-white flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden hover:border-brand-gold/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer-fast"></div>
                            
                            <PlayCircle className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform duration-500 relative z-10" /> 
                            <span className="relative z-10 text-xs uppercase tracking-[0.2em] group-hover:text-brand-gold transition-colors duration-300">Run Simulation</span>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Continuous Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </button>
                    ) : (
                        <button 
                             onClick={resetSimulation}
                             className="w-full py-3 bg-brand-red/5 border border-brand-red/20 rounded-sm font-bold text-brand-red flex items-center justify-center gap-2 hover:bg-brand-red/10 transition-all duration-300 text-xs uppercase tracking-[0.2em]"
                        >
                            <RefreshCcw className="w-3 h-3" /> Stop
                        </button>
                    )}
                </div>
                
                {/* Stages List */}
                <div className="space-y-3 relative z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {[1, 2, 3, 4].map((stage) => {
                        const isUnlocked = simulatedWager >= (stageSize * stage);
                        const isNext = simulatedWager < (stageSize * stage) && simulatedWager > (stageSize * (stage - 1));
                        let fillPercent = 0;
                        if (simulatedWager >= stageSize * stage) {
                            fillPercent = 100;
                        } else if (simulatedWager > stageSize * (stage - 1)) {
                            fillPercent = ((simulatedWager - (stageSize * (stage - 1))) / stageSize) * 100;
                        }

                        return (
                        <div key={stage} className={`relative group transition-all duration-700 ${isUnlocked ? 'opacity-100' : 'opacity-60'}`}>
                            <div className="flex items-center justify-between mb-1 text-[9px] uppercase tracking-widest font-bold text-gray-500">
                                <span>Phase 0{stage}</span>
                                <span className={isUnlocked ? 'text-accent-green' : ''}>
                                    {stage * 25}% Status
                                </span>
                            </div>
                            
                            <div className={`h-14 bg-[#050507] rounded-sm border flex items-center justify-between px-6 relative overflow-hidden transition-all duration-700 ${isUnlocked ? 'border-accent-green/30 shadow-[0_0_30px_rgba(0,182,122,0.1)]' : 'border-white/5'}`}>
                                
                                {/* Progress Fill */}
                                <div 
                                    className={`absolute left-0 top-0 bottom-0 transition-all duration-100 ease-linear ${isUnlocked ? 'bg-accent-green/10' : 'bg-brand-red/5'}`}
                                    style={{ width: `${fillPercent}%` }}
                                ></div>
                                
                                {/* Active Shimmer */}
                                {isNext && isSimulating && (
                                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                )}

                                <div className="relative z-10 flex flex-col">
                                    <span className="text-[9px] text-gray-600 uppercase tracking-widest mb-1">Target</span>
                                    <span className={`font-mono font-bold text-sm ${isUnlocked ? 'text-accent-green' : 'text-gray-400'}`}>${(stageSize * stage).toLocaleString()}</span>
                                </div>

                                <div className="relative z-10 flex items-center gap-6">
                                    <div className="text-right">
                                        <div className="text-[9px] text-gray-600 uppercase tracking-widest mb-1">Liquid Cash</div>
                                        <div className={`font-bold text-lg text-right font-mono ${isUnlocked ? 'text-accent-green drop-shadow-sm' : 'text-white'}`}>+${cashPerStage.toLocaleString()}</div>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-700 ${isUnlocked ? 'bg-accent-green text-black border-accent-green' : 'bg-transparent border-white/10 text-gray-600'}`}>
                                        {isUnlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VaultCalculator;