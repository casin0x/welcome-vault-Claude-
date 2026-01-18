import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
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
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className={`font-medium text-lg pr-8 transition-colors ${isOpen ? 'text-casino-gold' : 'text-white group-hover:text-apple-gray'}`}>
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-apple-gray transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <div className="text-apple-gray leading-relaxed">
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
      a: "The Welcome Vault is a 100% match on your first deposit that unlocks in four stages as you play. Every unlocked portion is paid as real, withdrawable cash."
    },
    {
      q: "How do I unlock the Vault?",
      a: "Simply play slot games. Each time you reach a wagering milestone (15x your deposit), 25% of your bonus unlocks and goes directly to your real balance."
    },
    {
      q: "Do I need a bonus code?",
      a: "No. The Vault activates automatically when you make your first deposit of $20 or more."
    },
    {
      q: "What's the wagering requirement?",
      a: "60x your deposit amount on slot games. For example, a $100 deposit requires $6,000 in slot wagering to fully unlock the $100 bonus."
    },
    {
      q: "How long do I have?",
      a: "24 hours from your first deposit. Anything unlocked stays forever. Anything still locked after 24 hours expires."
    },
    {
      q: "Is unlocked money real cash?",
      a: "Yes. Every unlocked amount is real cash with zero additional wagering requirements. Withdraw anytime."
    },
    {
      q: "What's the maximum bonus?",
      a: "The maximum Welcome Vault payout is $100,000 USD."
    },
    {
      q: "Is there a max bet limit?",
      a: "Yes. Maximum bet per spin is the lower of $5 or 5% of your deposit amount."
    },
    {
      q: "Which games count?",
      a: "Only slot games contribute to wagering. Table games, live casino, and other game types do not count."
    },
    {
      q: "Can I withdraw partially unlocked funds?",
      a: "Yes. You keep everything you've unlocked, even if you don't complete all four stages."
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-apple-black relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-casino-gold text-sm font-medium tracking-wide uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Questions? Answers.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="glass-card rounded-2xl px-6 md:px-8 mb-10">
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

        {/* Terms Button */}
        <div className="text-center">
          <button
            onClick={() => setIsTermsOpen(true)}
            className="btn-secondary px-8 py-4 rounded-full inline-flex items-center gap-3"
          >
            <FileText className="w-4 h-4" />
            Read Full Terms & Conditions
          </button>
        </div>

        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      </div>
    </section>
  );
};

export default VaultFAQ;
