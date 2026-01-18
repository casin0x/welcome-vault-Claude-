import React from 'react';
import { Gift, RefreshCw, Target } from 'lucide-react';

const PostVault: React.FC = () => {
  const rewards = [
    {
      icon: <Gift className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Cashback Rewards",
      description: "Personalized cashback offers based on your activity.",
    },
    {
      icon: <RefreshCw className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Reload Bonuses",
      description: "Exclusive deposit bonuses tailored to your style.",
    },
    {
      icon: <Target className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "VIP Perks",
      description: "Behavior-based rewards that grow with you.",
    },
  ];

  return (
    <section id="rewards" className="py-16 sm:py-24 md:py-32 bg-apple-black relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-casino-gold text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">After The Vault</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            The rewards continue.
          </h2>
          <p className="text-base sm:text-xl text-apple-gray max-w-2xl mx-auto px-2">
            Once your Vault completes, you unlock access to ongoing player rewards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="glass-card-light rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-casino-gold/10 flex items-center justify-center mb-4 sm:mb-6 text-casino-gold group-hover:bg-casino-gold/20 transition-colors duration-300">
                {reward.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{reward.title}</h3>
              <p className="text-apple-gray text-sm leading-relaxed">{reward.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-apple-gray text-xs sm:text-sm mt-8 sm:mt-12">
          Rakeback is not included in the Welcome Vault promotion.
        </p>
      </div>
    </section>
  );
};

export default PostVault;
