import React from 'react';
import { Repeat, Gift, Target } from 'lucide-react';

const PostVault: React.FC = () => {
  const rewards = [
    {
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      title: "Cashback Offers",
      desc: "Receive personalized cashback offers on your gameplay."
    },
    {
      icon: <Repeat className="w-8 h-8 text-blue-500" />,
      title: "Personalized Reloads",
      desc: "Deposit bonuses tailored to your playstyle and preferences."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Retargeting Bonuses",
      desc: "Behavior-based bonuses that adapt to your activity level."
    }
  ];

  return (
    <section id="rewards" className="py-14 bg-casino-black relative overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">After The Vault</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">What Happens Next?</h3>
          <p className="text-gray-400 mt-4 text-sm">Once the Vault completes or expires, players continue receiving rewards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map((item, idx) => (
             <div key={idx} className="glass-panel p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4 inline-block p-4 bg-white/5 rounded-full">
                    {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-4">No Rakeback Included in this Promotion</p>
        </div>
      </div>
    </section>
  );
};

export default PostVault;