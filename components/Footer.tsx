import React from 'react';
import { Mail, Send } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const paymentMethods = [
    { symbol: 'btc', name: 'Bitcoin' },
    { symbol: 'eth', name: 'Ethereum' },
    { symbol: 'usdt', name: 'Tether' },
    { symbol: 'usdc', name: 'USDC' },
    { symbol: 'sol', name: 'Solana' },
    { symbol: 'trx', name: 'Tron' },
    { symbol: 'doge', name: 'Dogecoin' },
    { symbol: 'bnb', name: 'BNB' },
    { symbol: 'ada', name: 'Cardano' },
    { symbol: 'bch', name: 'Bitcoin Cash' }
  ];

  return (
    <footer id="contact" className="bg-[#030304] border-t border-white/5 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
                <Logo className="h-8 w-auto text-white" />
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-6 font-light max-w-sm">
                Redefining digital ownership and fair play in the online gaming sector through blockchain transparency.
            </p>
            
            <div className="flex items-center gap-3 mt-8">
               <div className="p-2 bg-white/5 rounded-full border border-white/10">
                  <Mail className="w-4 h-4 text-brand-red" />
               </div>
               <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider font-bold mb-0.5">Support</p>
                  <a href="mailto:support@casin0x.com" className="text-xs text-white hover:text-brand-gold transition-colors font-medium block">
                    support@casin0x.com
                  </a>
               </div>
            </div>
          </div>

          <div className="md:ml-auto w-full max-w-sm">
             <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 md:text-right">Private Access</h4>
             <div className="space-y-6">
                <a href="https://casin0x.com/join" className="w-full block" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-4 bg-brand-red border border-brand-gold/40 rounded-sm text-white font-bold text-xs tracking-[0.2em] hover:bg-brand-red-light transition-all duration-500 flex items-center justify-center gap-3 shadow-lg">
                        JOIN NOW
                    </button>
                </a>
                
                <div className="bg-white/[0.02] rounded-sm p-5 border border-white/5">
                    <p className="text-[9px] text-gray-600 mb-4 text-center uppercase tracking-[0.2em] font-bold">Fast Connect</p>
                    <div className="flex justify-center gap-3">
                        <a href="https://casin0x.com/join" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#229ED9]/10 border border-[#229ED9]/20 rounded-sm text-[10px] font-bold text-[#229ED9] hover:bg-[#229ED9]/20 cursor-pointer transition-colors duration-300 tracking-wide">
                            <Send className="w-3 h-3" /> TELEGRAM
                        </a>
                        <a href="https://casin0x.com/join" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold text-white hover:bg-white/10 cursor-pointer transition-colors duration-300 tracking-wide">
                            GMAIL
                        </a>
                    </div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-white/5 py-10 mb-4 bg-white/[0.01]">
            <p className="text-center text-[11px] text-gray-500 uppercase tracking-[0.4em] mb-8 font-bold">WE ACCEPT</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {paymentMethods.map((coin) => (
                    <div key={coin.symbol} className="group relative flex flex-col items-center justify-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                             <img 
                                src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${coin.symbol}.png`} 
                                alt={coin.name} 
                                className="w-full h-full object-contain"
                                loading="lazy"
                             />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-[10px] uppercase tracking-wider">© 2025 CasinoX Holdings. All rights reserved.</p>
            <ul className="flex gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-wider">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;