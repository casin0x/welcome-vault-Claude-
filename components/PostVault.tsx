import React from 'react';
import { Gift, RefreshCw, Target } from 'lucide-react';

const PostVault: React.FC = () => {
  const rewards = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Cashback Rewards",
      description: "Personalized cashback offers based on your activity.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Reload Bonuses",
      description: "Exclusive deposit bonuses tailored to your style.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "VIP Perks",
      description: "Behavior-based rewards that grow with you.",
    },
  ];

  return (
    <section id="rewards" className="py-24 md:py-32 bg-apple-black relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-casino-gold text-sm font-medium tracking-wide uppercase mb-4">After The Vault</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            The rewards continue.
          </h2>
          <p className="text-xl text-apple-gray max-w-2xl mx-auto">
            Once your Vault completes, you unlock access to ongoing player rewards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="glass-card-light rounded-2xl p-8 text-center hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-casino-gold/10 flex items-center justify-center mb-6 text-casino-gold group-hover:bg-casino-gold/20 transition-colors duration-300">
                {reward.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reward.title}</h3>
              <p className="text-apple-gray text-sm leading-relaxed">{reward.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-apple-gray text-sm mt-12">
          Rakeback is not included in the Welcome Vault promotion.
        </p>
      </div>
    </section>
  );
};

export default PostVault;
