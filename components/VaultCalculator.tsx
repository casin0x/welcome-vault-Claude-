import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const VaultCalculator: React.FC = () => {
  const [deposit, setDeposit] = useState(500);

  const totalWagerRequired = deposit * 60;
  const stageSize = totalWagerRequired / 4;
  const cashPerStage = deposit * 0.25;
  const maxPayout = Math.min(deposit, 100000);

  const stages = [
    { stage: 1, wager: stageSize, unlock: cashPerStage },
    { stage: 2, wager: stageSize * 2, unlock: cashPerStage * 2 },
    { stage: 3, wager: stageSize * 3, unlock: cashPerStage * 3 },
    { stage: 4, wager: stageSize * 4, unlock: cashPerStage * 4 },
  ];

  return (
    <section id="calculator" className="py-24 md:py-32 bg-apple-dark relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-casino-gold text-sm font-medium tracking-wide uppercase mb-4">Vault Calculator</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            See your potential.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Input */}
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="mb-10">
              <label className="block text-apple-gray text-sm font-medium mb-4">
                Deposit Amount
              </label>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl text-apple-gray font-light">$</span>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Math.max(20, Math.min(100000, Number(e.target.value))))}
                  className="bg-transparent text-6xl md:text-7xl font-bold text-white w-full focus:outline-none"
                  style={{ maxWidth: '280px' }}
                />
              </div>

              <input
                type="range"
                min="20"
                max="100000"
                step="10"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full mb-4"
              />

              <div className="flex justify-between text-sm text-apple-gray">
                <span>$20</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-apple-gray">Total Wager Required</span>
                <span className="text-white font-semibold text-lg">${totalWagerRequired.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-apple-gray">Wager per Stage</span>
                <span className="text-white font-semibold text-lg">${stageSize.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-casino-gold font-medium">Total Bonus Unlock</span>
                <span className="text-casino-gold font-bold text-2xl">${maxPayout.toLocaleString()}</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://casin0x.com/join"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              Claim Your Bonus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Unlock Stages */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Unlock Schedule</h3>

            <div className="space-y-4">
              {stages.map((s, index) => (
                <div
                  key={s.stage}
                  className="glass-card-light rounded-2xl p-6 flex items-center justify-between group hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-casino-gold/10 flex items-center justify-center text-casino-gold font-bold">
                      {s.stage}
                    </div>
                    <div>
                      <p className="text-white font-medium">Stage {s.stage}</p>
                      <p className="text-apple-gray text-sm">Wager ${s.wager.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-casino-green font-bold text-xl">+${cashPerStage.toLocaleString()}</p>
                    <p className="text-apple-gray text-sm">{s.stage * 25}% unlocked</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Completion */}
            <div className="mt-6 glass-card rounded-2xl p-6 bg-casino-green/5 border-casino-green/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-casino-green/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-casino-green" />
                </div>
                <div>
                  <p className="text-white font-semibold">Full Unlock</p>
                  <p className="text-apple-gray text-sm">
                    Complete all stages to unlock <span className="text-casino-gold font-semibold">${maxPayout.toLocaleString()}</span> in real cash
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

export default VaultCalculator;
