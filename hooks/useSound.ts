import { useCallback, useRef, useEffect } from 'react';

export const useSound = () => {
  const audioContext = useRef<AudioContext | null>(null);
  const masterGain = useRef<GainNode | null>(null);
  const isMuted = useRef(false);

  useEffect(() => {
    // Initialize Audio Context on user interaction ideally, but we set it up here
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioCtx) {
      audioContext.current = new AudioCtx();
      masterGain.current = audioContext.current.createGain();
      masterGain.current.connect(audioContext.current.destination);
      masterGain.current.gain.value = 0.3; // Default volume
    }
  }, []);

  const toggleMute = useCallback(() => {
    isMuted.current = !isMuted.current;
    if (masterGain.current) {
      masterGain.current.gain.value = isMuted.current ? 0 : 0.3;
    }
    return isMuted.current;
  }, []);

  const playTone = (freq: number, type: 'sine' | 'square' | 'sawtooth' | 'triangle', duration: number, startTime = 0) => {
    if (!audioContext.current || !masterGain.current) return;
    
    const ctx = audioContext.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + startTime + duration);

    osc.connect(gain);
    gain.connect(masterGain.current);

    osc.start(ctx.currentTime + startTime);
    osc.stop(ctx.currentTime + startTime + duration);
  };

  const playHover = useCallback(() => {
    playTone(800, 'sine', 0.05);
  }, []);

  const playClick = useCallback(() => {
    playTone(200, 'square', 0.05);
  }, []);

  const playSpin = useCallback(() => {
    // Rapid fire blips
    for(let i = 0; i < 5; i++) {
      playTone(400 + (Math.random() * 200), 'triangle', 0.05, i * 0.05);
    }
  }, []);

  const playUnlock = useCallback(() => {
    // Success chord
    playTone(523.25, 'sine', 0.4, 0); // C5
    playTone(659.25, 'sine', 0.4, 0.1); // E5
    playTone(783.99, 'sine', 0.6, 0.2); // G5
    playTone(1046.50, 'triangle', 0.8, 0.3); // C6
  }, []);

  const playCoin = useCallback(() => {
    playTone(1200, 'sine', 0.1);
    playTone(1800, 'sine', 0.3, 0.05);
  }, []);

  const playCoinsDrop = useCallback(() => {
    // Simulate cascading coins
    for(let i = 0; i < 8; i++) {
      const delay = i * 0.06; // Fast sequence
      // Mix of high sine waves and triangle waves for metallic clink
      playTone(2000 + (Math.random() * 1000), 'sine', 0.1, delay);
      playTone(3000 + (Math.random() * 500), 'triangle', 0.05, delay + 0.01);
    }
  }, []);

  return { playHover, playClick, playSpin, playUnlock, playCoin, playCoinsDrop, toggleMute };
};