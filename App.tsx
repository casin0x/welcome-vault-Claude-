import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VaultExplainer from './components/VaultExplainer';
import VaultCalculator from './components/VaultCalculator';
import VaultRules from './components/VaultRules';
import PostVault from './components/PostVault';
import Footer from './components/Footer';
import VaultFAQ from './components/VaultFAQ';

function App() {
  return (
    <div className="min-h-screen bg-casino-black text-white selection:bg-brand-gold selection:text-black relative">
      <div className="bg-noise"></div>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <VaultExplainer />
        <VaultCalculator />
        <PostVault />
        <VaultRules />
        <VaultFAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;