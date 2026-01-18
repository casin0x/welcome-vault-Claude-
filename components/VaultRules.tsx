import React from 'react';
import { Check, AlertCircle, Gamepad2, Shield } from 'lucide-react';

const VaultRules: React.FC = () => {
  const requirements = [
    { label: "First deposit only", value: "New players" },
    { label: "Minimum deposit", value: "$20 USD" },
    { label: "Time limit", value: "24 hours" },
    { label: "Maximum bonus", value: "$100,000" },
    { label: "Wagering requirement", value: "60x deposit" },
    { label: "Max bet per spin", value: "$5 or 5%" },
  ];

  const benefits = [
    "Unlocked funds have zero wagering requirements",
    "Instant withdrawals, no questions asked",
    "No hidden limits or fine print",
    "Real cash, not bonus credits",
  ];

  return (
    <section id="rules" className="py-24 md:py-32 bg-apple-dark relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-casino-gold text-sm font-medium tracking-wide uppercase mb-4">Terms & Rules</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Clear rules.
            <br />
            <span className="text-apple-gray">No surprises.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Requirements */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-casino-gold" />
              Requirements
            </h3>

            <div className="glass-card rounded-2xl divide-y divide-white/5">
              {requirements.map((req, index) => (
                <div key={index} className="flex justify-between items-center p-5">
                  <span className="text-apple-gray">{req.label}</span>
                  <span className="text-white font-medium">{req.value}</span>
                </div>
              ))}
            </div>

            {/* Game Contribution */}
            <div className="mt-6 glass-card-light rounded-2xl p-6">
              <h4 className="text-sm font-medium text-apple-gray mb-4 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                Game Contribution
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 rounded-xl bg-casino-green/10">
                  <span className="text-white font-medium">Slot Games</span>
                  <span className="text-casino-green font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                  <span className="text-apple-gray">Table & Live Games</span>
                  <span className="text-apple-gray">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <Shield className="w-5 h-5 text-casino-gold" />
              What You Get
            </h3>

            <div className="glass-card rounded-2xl p-8 mb-6">
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-casino-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-casino-green" />
                    </div>
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fair Play Note */}
            <div className="glass-card-light rounded-2xl p-6 border-l-4 border-casino-red">
              <h4 className="text-white font-semibold mb-2">Fair Play</h4>
              <p className="text-apple-gray text-sm leading-relaxed">
                This promotion is for recreational players only. Multi-accounting,
                automated play, or abuse patterns will result in removal from the program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultRules;
