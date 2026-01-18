import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, FileText } from 'lucide-react';
import TermsModal from './TermsModal';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left hover:bg-white/5 px-4 rounded-lg transition-all duration-200 group"
        onClick={onClick}
      >
        <span className={`font-bold text-base md:text-lg pr-8 ${isOpen ? 'text-brand-red' : 'text-white group-hover:text-gray-200'}`}>
          {question}
        </span>
        <div className={`p-1.5 rounded-full transition-all duration-300 shrink-0 ${isOpen ? 'bg-brand-red text-white rotate-180' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
            {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 text-gray-400 leading-relaxed text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

const VaultFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const faqs = [
    {
      q: "What is the Welcome Vault?",
      a: "The Welcome Vault is a reward equal to 100 percent of your first deposit. It unlocks in four stages as you wager on slot games, and every unlocked part is paid as real cash with no restrictions."
    },
    {
      q: "How do I unlock the Vault?",
      a: "Wager on any slot game. Each time you reach a wagering milestone, 25 percent of your deposit unlocks and is added directly to your withdrawable balance."
    },
    {
      q: "Do I need a bonus code?",
      a: "No. The Vault activates automatically when you make your first deposit of 20 USD or more."
    },
    {
      q: "Can I do several deposits?",
      a: "Yes, you can make more than one deposit, however your bonus is calculated only from your first deposit."
    },
    {
      q: "Does all gameplay contribute?",
      a: "Only slot games contribute. Table games, live games, jackpots, video poker, provably fair games, RNG table games and stock simulations do not contribute toward wagering."
    },
    {
      q: "How long does the Vault last?",
      a: "You have 24 hours from the moment of your first deposit. Anything unlocked stays forever. Anything still locked after 24 hours expires."
    },
    {
      q: "Is the unlocked money real?",
      a: "Yes. Every unlocked amount is real cash with no additional wagering requirements."
    },
    {
      q: "What is the maximum I can unlock?",
      a: "The maximum total payout from the Welcome Vault is 100,000 USD."
    },
    {
      q: "What is the wagering requirement?",
      a: "The requirement is 60 times your first deposit. For example, a 100 USD deposit requires 6,000 USD in slot wagering to unlock the entire 100 USD Vault."
    },
    {
      q: "Is there a maximum bet?",
      a: "Yes. The maximum bet per spin is the lower of 5 USD or 5 percent of your deposit amount."
    },
    {
      q: "What happens if I do not finish the wagering?",
      a: "You keep everything you have already unlocked. Only the remaining locked amount expires after 24 hours."
    },
    {
      q: "Can I combine this with other welcome bonuses?",
      a: "No. The Welcome Vault cannot be combined with any other first deposit promotion."
    },
    {
      q: "Why do some games not count?",
      a: "Certain game types allow low risk progression or stored features. These would break the structure of the Vault, so only pure slot wagering contributes."
    },
    {
      q: "Can I withdraw my unlocked cash immediately?",
      a: "Yes. Unlocked Vault money goes straight to your real balance and can be cashed out subject to standard verification checks."
    },
    {
      q: "What if I use multiple devices?",
      a: "You can use multiple devices, but only one account is allowed. Multi account behavior or shared identities will result in removal from the promotion."
    },
    {
      q: "How do I see my progress?",
      a: "You can track your progress in real time directly inside the Casin0x Vault interface. Your progress bar updates automatically as you wager."
    },
    {
      q: "What counts as abuse?",
      a: (
        <div className="space-y-2">
          <p>Examples include, but are not limited to:</p>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>Automated play</li>
            <li>Bet manipulation patterns</li>
            <li>Abnormal risk free grinding</li>
            <li>Collusion or coordinated play</li>
            <li>Attempts to bypass country or payment restrictions</li>
          </ul>
          <p className="mt-2 text-red-400">Any abuse may result in losing access to the promotion and forfeiture of rewards.</p>
        </div>
      )
    },
    {
      q: "Where can I read the full Terms?",
      a: "You can find the complete Welcome Vault Terms and Conditions linked beneath this FAQ and in the Casin0x footer under Bonus Terms."
    }
  ];

  return (
    <section id="faq" className="py-14 bg-casino-black relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-brand-red" />
          </div>
          <h2 className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2">Common Questions</h2>
          <h3 className="text-4xl font-bold text-white">Welcome Vault FAQ</h3>
        </div>

        <div className="glass-panel rounded-2xl p-2 md:p-6 border border-white/10 mb-8">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <div className="text-center">
             <button 
                onClick={() => setIsTermsOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-red/50 text-gray-300 hover:text-white rounded-full transition-all duration-300 group shadow-lg"
            >
                <div className="p-1 bg-brand-red/20 rounded">
                    <FileText className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">Read Official T&C</span>
            </button>
        </div>

        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      </div>
    </section>
  );
};

export default VaultFAQ;