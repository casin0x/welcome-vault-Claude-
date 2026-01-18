import React from 'react';
import { CheckCircle2, Shield, Ban, Zap, Scale, DollarSign } from 'lucide-react';

const VaultRules: React.FC = () => {
  return (
    <section id="rules" className="py-14 bg-casino-dark relative overflow-hidden">
       {/* 1px Gradient Separator */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
            <h2 className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Transparency First</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">CLEAR RULES. NO FINE PRINT.</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed text-sm">
                We believe in total clarity. Here is exactly how to qualify, play, and cash out your rewards.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Column: Qualification & Gameplay */}
            <div className="space-y-6">
                
                {/* Activation Card */}
                <div className="glass-panel p-6 rounded-sm border-t border-brand-red/40 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
                     <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-brand-red" /> 
                        Activation Checklist
                     </h4>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-[#050507] p-4 rounded-sm border border-white/5">
                            <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1">Eligibility</span>
                            <span className="text-white font-bold tracking-wide text-sm">First Deposit Only</span>
                        </div>
                         <div className="bg-[#050507] p-4 rounded-sm border border-white/5">
                            <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1">Min Deposit</span>
                            <span className="text-white font-bold tracking-wide text-sm">$20 USD</span>
                        </div>
                         <div className="bg-[#050507] p-4 rounded-sm border border-white/5">
                            <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1">Time Limit</span>
                            <span className="text-white font-bold tracking-wide text-sm">24 Hours</span>
                        </div>
                         <div className="bg-[#050507] p-4 rounded-sm border border-white/5">
                            <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1">Max Payout</span>
                            <span className="text-white font-bold tracking-wide text-sm">$100,000 USD</span>
                        </div>
                     </div>
                     
                     <div className="mt-6 p-4 bg-brand-red/5 rounded-sm border border-brand-red/10">
                        <div className="flex items-start gap-3">
                            <Scale className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                            <div>
                                <h5 className="text-brand-red font-bold text-[10px] uppercase tracking-widest mb-1">Fair Bet Limit</h5>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    Max bet per spin is the lower of <span className="font-bold text-white">$5 USD</span> or <span className="font-bold text-white">5%</span> of your deposit. This ensures steady progress.
                                </p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Gameplay Contribution */}
                <div className="glass-panel p-6 rounded-sm border-t border-white/10">
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-accent-green" /> 
                        Wagering Speed
                    </h4>
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-accent-green/5 rounded-sm border border-accent-green/20">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-green"></div>
                                <span className="font-bold text-white text-sm tracking-wide">All Slot Games</span>
                            </div>
                            <span className="text-accent-green font-bold font-mono text-sm">100% Contribution</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-sm border border-white/5 opacity-60">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                <span className="font-bold text-gray-400 text-sm tracking-wide">Table & Live Games</span>
                            </div>
                            <span className="text-gray-500 font-bold font-mono text-sm">0% Contribution</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Rewards & Integrity */}
            <div className="space-y-6">
                
                {/* The Big Benefit: Cashout */}
                <div className="glass-panel p-6 rounded-sm bg-gradient-to-b from-accent-green/5 to-transparent border-t border-accent-green/20 relative">
                    <div className="absolute top-6 right-6">
                        <DollarSign className="w-8 h-8 text-accent-green/20" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 tracking-tight">Real Cash. No Nonsense.</h4>
                    <p className="text-gray-400 mb-6 leading-relaxed font-light text-sm">
                        We don't deal in "bonus money". Every time a Vault stage unlocks, that money is credited to your real balance immediately.
                    </p>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-accent-green" />
                            <span>Zero wagering requirements on unlocked cash</span>
                        </li>
                         <li className="flex items-center gap-4 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-accent-green" />
                            <span className="font-bold text-accent-green tracking-wide">Instant Payouts - No Questions Asked</span>
                        </li>
                         <li className="flex items-center gap-4 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-accent-green" />
                            <span>No hidden withdrawal limits</span>
                        </li>
                    </ul>
                </div>

                {/* Protection & Integrity */}
                <div className="glass-panel p-6 rounded-sm border-t border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-4 h-4 text-brand-gold" />
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Fair Play Guarantee</h4>
                    </div>
                    
                    <div className="text-sm text-gray-400 space-y-4 leading-relaxed font-light">
                        <p>
                            The Welcome Vault is mathematically engineered to be sustainable (~0.65% net exposure), allowing us to offer it to every genuine player without predatory terms.
                        </p>
                        
                        <div className="p-4 bg-brand-red/5 rounded-sm border border-brand-red/10">
                            <div className="flex items-center gap-2 text-brand-red font-bold text-[10px] uppercase tracking-widest mb-2">
                                <Ban className="w-3 h-3" /> Abuse Prevention
                            </div>
                            <p className="text-xs text-gray-500">
                                To keep this offer active for everyone, we strictly monitor for multi-accounting and automated play. This offer is for recreational players only.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default VaultRules;