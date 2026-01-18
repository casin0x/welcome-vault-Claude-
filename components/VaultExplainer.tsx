import React from 'react';
import { Wallet, Dices, Unlock, Banknote, Clock } from 'lucide-react';

const VaultExplainer: React.FC = () => {
  const steps = [
    {
      icon: <Wallet className="w-7 h-7" />,
      title: "Deposit",
      description: "Make your first deposit. We instantly mirror it in your personal Vault.",
      highlight: "1:1 Match",
    },
    {
      icon: <Dices className="w-7 h-7" />,
      title: "Play",
      description: "Enjoy your favorite games. Your wagering activity unlocks the Vault progressively.",
      highlight: "60x Wager",
    },
    {
      icon: <Unlock className="w-7 h-7" />,
      title: "Unlock",
      description: "Every 15x wagered releases 25% of your bonus as real cash. Four stages total.",
      highlight: "4 Stages",
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Withdraw",
      description: "Unlocked funds are real money. Withdraw anytime, no questions asked.",
      highlight: "Real Cash",
    },
  ];

  return (
    <section id="mechanics" className="py-24 md:py-32 bg-apple-black relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-casino-gold text-sm font-medium tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Simple. Transparent.
            <br />
            <span className="text-apple-gray">Four steps to real cash.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card-light rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-casino-gold/10 flex items-center justify-center mb-6 text-casino-gold group-hover:bg-casino-gold/20 transition-colors duration-300">
                {step.icon}
              </div>

              <div className="text-xs text-apple-gray font-medium mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-apple-gray text-sm leading-relaxed mb-4">{step.description}</p>

              <div className="inline-flex px-3 py-1.5 rounded-full bg-casino-gold/10 text-casino-gold text-xs font-medium">
                {step.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* 24 Hour Notice */}
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-16 h-16 rounded-full bg-casino-red/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-8 h-8 text-casino-red" />
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">24-Hour Window</h3>
              <p className="text-apple-gray leading-relaxed">
                You have exactly 24 hours from your first deposit to unlock your bonus.
                Unlocked funds are yours permanently. Any remaining locked funds expire after the window closes.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-casino-green/10 text-casino-green text-sm font-medium">
                <Unlock className="w-4 h-4" />
                <span>Unlocked = Permanent</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-casino-red/10 text-casino-red text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Locked = Expires in 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultExplainer;
