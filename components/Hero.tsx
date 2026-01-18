import React from 'react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="vault-hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-apple-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-casino-gold/10 rounded-full blur-[150px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-casino-gold/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-up">
          <div className="w-2 h-2 bg-casino-green rounded-full animate-subtle-pulse"></div>
          <span className="text-sm text-apple-gray font-medium">Welcome Vault is Live</span>
        </div>

        {/* Main Headline - Apple Style */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Double your
          <br />
          <span className="text-gradient-gold">first deposit.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-apple-gray font-normal max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          100% match bonus as real, withdrawable cash.
          <br className="hidden sm:block" />
          No strings. No wagering traps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://casin0x.com/join"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2 min-w-[200px] justify-center"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
            className="btn-secondary px-8 py-4 rounded-full text-base min-w-[200px]"
          >
            Calculate Bonus
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Shield className="w-5 h-5 text-casino-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Transparent</p>
              <p className="text-apple-gray text-xs">Blockchain verified</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Zap className="w-5 h-5 text-casino-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Instant</p>
              <p className="text-apple-gray text-xs">Withdraw anytime</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Lock className="w-5 h-5 text-casino-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Private</p>
              <p className="text-apple-gray text-xs">No KYC required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
