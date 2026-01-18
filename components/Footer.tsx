import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const cryptos = ['btc', 'eth', 'usdt', 'usdc', 'sol', 'trx', 'doge', 'bnb'];

  return (
    <footer className="py-12 sm:py-16 bg-apple-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main CTA */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to double your deposit?
          </h2>
          <p className="text-apple-gray text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto px-2">
            Join thousands of players enjoying real cash rewards with the Welcome Vault.
          </p>
          <a
            href="https://casin0x.com/join"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center gap-2 min-h-[52px]"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Crypto Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-white/5">
          {cryptos.map((crypto) => (
            <img
              key={crypto}
              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${crypto}.png`}
              alt={crypto}
              className="w-6 sm:w-8 h-6 sm:h-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4 order-2 sm:order-1">
            <Logo className="h-5 sm:h-6 w-auto text-white opacity-60" />
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-sm text-apple-gray order-1 sm:order-2">
            <a href="#" className="hover:text-white transition-colors py-2">Privacy</a>
            <a href="#" className="hover:text-white transition-colors py-2">Terms</a>
            <a href="mailto:support@casin0x.com" className="hover:text-white transition-colors py-2">Contact</a>
          </div>

          <p className="text-apple-gray text-xs sm:text-sm order-3 text-center sm:text-right">
            © 2025 Casin0x. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
