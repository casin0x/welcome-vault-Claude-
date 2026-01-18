import React from 'react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="vault-hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-16">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-apple-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-casino-gold/10 rounded-full blur-[120px] sm:blur-[150px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-casino-gold/5 rounded-full blur-[100px] sm:blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8 animate-fade-up">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-casino-green rounded-full animate-subtle-pulse"></div>
          <span className="text-xs sm:text-sm text-apple-gray font-medium">Welcome Vault is Live</span>
        </div>

        {/* Main Headline - Apple Style */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-6 animate-fade-up leading-[1.1]" style={{ animationDelay: '0.1s' }}>
          Double your
          <br />
          <span className="text-gradient-gold">first deposit.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl md:text-2xl text-apple-gray font-normal max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-up px-2" style={{ animationDelay: '0.2s' }}>
          100% match bonus as real, withdrawable cash.
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          No strings. No wagering traps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-up w-full px-2" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://casin0x.com/join"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 min-h-[52px]"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
            className="btn-secondary w-full sm:w-auto px-8 py-4 rounded-full text-base min-h-[52px]"
          >
            Calculate Bonus
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-casino-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Transparent</p>
              <p className="text-apple-gray text-xs">Blockchain verified</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-casino-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Instant</p>
              <p className="text-apple-gray text-xs">Withdraw anytime</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-casino-gold" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Private</p>
              <p className="text-apple-gray text-xs">No KYC required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in hidden sm:block" style={{ animationDelay: '0.6s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
