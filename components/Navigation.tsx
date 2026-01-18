import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useSound } from '../hooks/useSound';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { playClick, playHover, toggleMute } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const mutedState = toggleMute();
    setIsMuted(mutedState);
    if (!mutedState) playClick();
  };

  const scrollToSection = (id: string) => {
    playClick();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'glass-panel py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="h-8 w-auto text-white group-hover:text-gray-200 transition-colors duration-300" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onMouseEnter={playHover}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={handleMuteToggle}
            className="text-gray-500 hover:text-white transition-colors duration-300 p-2"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button 
            onMouseEnter={playHover}
            onClick={() => scrollToSection('calculator')}
            className="bg-brand-red border border-brand-gold/50 text-white px-8 py-3 rounded-sm text-xs font-bold tracking-[0.2em] hover:bg-brand-red-light transition-all duration-500 shadow-[0_0_20px_rgba(92,1,5,0.4)] hover:shadow-[0_0_30px_rgba(200,117,42,0.3)]"
          >
            DEPOSIT
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav - Crystal Glass */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-panel p-8 md:hidden flex flex-col gap-6 animate-fade-in border-t border-white/5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-sm font-bold text-gray-300 hover:text-white uppercase tracking-widest"
            >
              {item.label}
            </button>
          ))}
           <button 
            className="bg-brand-red border border-brand-gold/50 text-white px-6 py-4 rounded-sm text-center font-bold uppercase tracking-widest text-sm"
            onClick={() => scrollToSection('calculator')}
          >
            Deposit Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;