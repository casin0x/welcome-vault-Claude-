import React from 'react';
import { ShieldCheck, Zap, Globe, Lock, Cpu, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      title: "Provably Fair",
      description: "Every hand, spin, and roll is verifiable on-chain. Impossible to rig."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-red" />,
      title: "Instant Payouts",
      description: "Your money is yours. Withdraw instantly with no questions asked."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Borderless Access",
      description: "Connect wallet and play. No invasive KYC for crypto-native interactions."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Non-Custodial",
      description: "User funds stay in user wallets until the moment of the wager."
    },
    {
      icon: <Cpu className="w-6 h-6 text-gray-400" />,
      title: "AI-Driven Odds",
      description: "Dynamic odds balancing using real-time machine learning."
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-green" />,
      title: "Cross-Chain Bridge",
      description: "Seamlessly deposit from Ethereum, Solana, BSC, and Polygon."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-casino-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Why CasinoX?</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">THE HOUSE EVOLVED</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 rounded-sm group hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 border-t border-transparent hover:border-brand-gold/30">
              <div className="mb-6 p-4 bg-white/[0.02] rounded-sm inline-block border border-white/5 group-hover:border-white/10 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;