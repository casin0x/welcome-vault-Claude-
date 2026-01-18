import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const cryptos = ['btc', 'eth', 'usdt', 'usdc', 'sol', 'trx', 'doge', 'bnb'];

  return (
    <footer className="py-16 bg-apple-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to double your deposit?
          </h2>
          <p className="text-apple-gray mb-8 max-w-lg mx-auto">
            Join thousands of players enjoying real cash rewards with the Welcome Vault.
          </p>
          <a
            href="https://casin0x.com/join"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Crypto Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 pb-12 border-b border-white/5">
          {cryptos.map((crypto) => (
            <img
              key={crypto}
              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${crypto}.png`}
              alt={crypto}
              className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo className="h-6 w-auto text-white opacity-60" />
          </div>

          <div className="flex items-center gap-8 text-sm text-apple-gray">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:support@casin0x.com" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-apple-gray text-sm">
            © 2025 Casin0x. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
