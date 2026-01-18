import React, { useEffect } from 'react';
import { X, FileText, Scale } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-lg animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#0f0f13] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl shadow-black animate-[scale-in_0.2s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02] rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-red/10 rounded-xl border border-brand-red/20">
                <Scale className="w-6 h-6 text-brand-red" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">Official Terms & Conditions</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Casin0x Welcome Vault</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-500 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-12 text-gray-400 text-sm md:text-base leading-relaxed custom-scrollbar bg-[#0f0f13]">
            
            {/* Intro Block */}
            <div className="p-4 bg-brand-red/5 border border-brand-red/10 rounded-lg">
                <p className="text-brand-red-light text-xs font-bold uppercase tracking-widest mb-1">Important Notice</p>
                <p className="text-gray-300 text-sm">By participating in this promotion, you agree to the following terms. Please read carefully.</p>
            </div>

            <section>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs">1</span>
                    Definition of the Welcome Vault
                </h4>
                <ul className="list-disc pl-10 space-y-2 marker:text-brand-red">
                    <li>The Welcome Vault is a locked cash reward equal to 100 percent of a player’s first deposit.</li>
                    <li>The Vault unlocks in stages as the player wagers on eligible slot games.</li>
                    <li>Each unlocked portion is credited directly to the player’s real money balance and can be withdrawn immediately.</li>
                    <li>Unlocked portions remain the player’s property even if the full wagering requirement is not completed.</li>
                    <li>The promotion remains active for 24 hours after the first deposit.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs">2</span>
                    Vault Release Structure
                </h4>
                <div className="pl-9">
                    <p className="mb-6">The Vault releases in four equal stages of 25 percent each, based on total wagering.</p>
                    
                    <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                        <h5 className="text-gray-300 font-bold mb-4 text-xs uppercase tracking-wider">Example: 100 USD Deposit</h5>
                        <p className="text-sm mb-6 text-gray-500">Total Wagering Requirement: 6,000 USD (60x)</p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="text-gray-600 border-b border-white/10 text-xs uppercase">
                                        <th className="pb-3 pr-4 font-medium">Wager Progress</th>
                                        <th className="pb-3 pr-4 font-medium">Portion</th>
                                        <th className="pb-3 text-right font-medium">Cash Released</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-4 pr-4">1,500 USD</td>
                                        <td className="py-4 pr-4">25%</td>
                                        <td className="py-4 text-right text-green-400 font-bold">25 USD</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4 pr-4">3,000 USD</td>
                                        <td className="py-4 pr-4">50%</td>
                                        <td className="py-4 text-right text-green-400 font-bold">50 USD</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4 pr-4">4,500 USD</td>
                                        <td className="py-4 pr-4">75%</td>
                                        <td className="py-4 text-right text-green-400 font-bold">75 USD</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-4">6,000 USD</td>
                                        <td className="py-4 pr-4">100%</td>
                                        <td className="py-4 text-right text-green-400 font-bold">100 USD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs">3</span>
                    Time Limit & Expiry
                </h4>
                <ul className="list-disc pl-10 space-y-2 marker:text-brand-red">
                    <li>The Welcome Vault is active for <span className="text-white font-bold">24 hours</span> from the moment of first deposit.</li>
                    <li>Any unlocked portion remains real cash permanently.</li>
                    <li>Any locked portion remaining after 24 hours expires immediately.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs">4</span>
                    Eligibility & Rules
                </h4>
                <div className="pl-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                        <span className="block text-xs text-gray-500 uppercase mb-1">Min Deposit</span>
                        <span className="text-white font-bold">20 USD</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                        <span className="block text-xs text-gray-500 uppercase mb-1">Max Payout</span>
                        <span className="text-white font-bold">100,000 USD</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                        <span className="block text-xs text-gray-500 uppercase mb-1">Max Bet</span>
                        <span className="text-white font-bold">$5 or 5% of deposit</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                        <span className="block text-xs text-gray-500 uppercase mb-1">Eligible Games</span>
                        <span className="text-white font-bold">Slots Only (100%)</span>
                    </div>
                </div>
            </section>

            <section>
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs">5</span>
                    Fraud & Abuse Prevention
                </h4>
                <div className="pl-9 p-4 bg-red-900/10 border border-red-900/20 rounded-lg">
                    <p className="mb-3 text-sm">Casin0x strictly prohibits abuse. Accounts may be restricted for:</p>
                    <ul className="list-disc pl-5 space-y-1 marker:text-red-500 text-gray-400 text-sm">
                        <li>Multiple accounts, shared devices, or repeated IPs.</li>
                        <li>Use of automated wagering tools or bots.</li>
                        <li>Pattern based exploitation or low risk grinding.</li>
                        <li>Abnormal bet sizing patterns intended to trigger unlock thresholds.</li>
                    </ul>
                </div>
            </section>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end items-center rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-brand-red hover:bg-brand-red-light text-white rounded-lg font-bold transition-colors shadow-lg"
          >
            Close Terms
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;