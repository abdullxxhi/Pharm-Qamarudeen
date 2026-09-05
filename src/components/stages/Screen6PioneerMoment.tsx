import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen6Props {
  onNext: () => void;
}

export const Screen6PioneerMoment: React.FC<Screen6Props> = ({ onNext }) => {
  useEffect(() => {
    sound.playPioneerReveal();
  }, []);

  const handleCommence = () => {
    sound.playCelebrationChimes();
    onNext();
  };

  return (
    <div
      id="screen-6-pioneer-moment"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center max-w-4xl mx-auto select-none overflow-hidden"
    >
      {/* Background Molecular Hexagon Rings (subtle vector overlay) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20">
        <svg
          className="w-[450px] h-[450px] animate-spin"
          style={{ animationDuration: '60s' }}
          viewBox="0 0 200 200"
          fill="none"
          stroke="#D6A85F"
          strokeWidth="0.75"
        >
          <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" />
          <polygon points="100,35 155,67 155,133 100,165 45,133 45,67" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="30" stroke="#FFF7E8" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="0" stroke="#D6A85F" />
          <line x1="170" y1="60" x2="185" y2="50" stroke="#D6A85F" />
          <line x1="170" y1="140" x2="185" y2="150" stroke="#D6A85F" />
          <line x1="100" y1="180" x2="100" y2="200" stroke="#D6A85F" />
          <line x1="30" y1="140" x2="15" y2="150" stroke="#D6A85F" />
          <line x1="30" y1="60" x2="15" y2="50" stroke="#D6A85F" />
        </svg>
      </div>

      {/* Editorial Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="mb-4"
      >
        <span className="text-[#D6A85F] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D6A85F]/30 pb-2 inline-block">
          Chapter 06 • The Legacy
        </span>
      </motion.div>

      {/* Thin Golden Expanding Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '80%', opacity: 0.8 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-gradient-to-r from-transparent via-[#FFF7E8] to-transparent mb-10 max-w-lg"
      />

      {/* 1. PIONEER */}
      <motion.div
        initial={{ opacity: 0, letterSpacing: '0.4em' }}
        animate={{ opacity: 1, letterSpacing: '0.25em' }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="mb-4"
      >
        <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-gold-luxury uppercase gold-glow">
          PIONEER
        </span>
      </motion.div>

      {/* 2. PHARM D SET */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.0 }}
        className="font-serif-display text-2xl sm:text-4xl md:text-5xl text-[#FFF7E8] font-light mb-2 gold-glow"
      >
        PHARM D SET
      </motion.h2>

      {/* 3. 2026 */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 3.0 }}
        className="font-cinzel text-xl sm:text-3xl md:text-4xl text-[#FFF7E8] tracking-widest font-semibold mb-3"
      >
        2026
      </motion.p>

      {/* 4. UNIVERSITY OF ILORIN */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 4.0 }}
        className="font-cinzel text-xs sm:text-sm md:text-base text-[#FFF7E8]/75 tracking-[0.3em] uppercase mb-10"
      >
        UNIVERSITY OF ILORIN
      </motion.p>

      {/* Second Thin Golden Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '40%', opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 4.8 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-[#D6A85F] to-transparent mb-8"
      />

      {/* 5. You didn't just graduate. */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 5.6 }}
        className="font-serif-display italic text-2xl sm:text-3xl text-[#FFF7E8] font-normal mb-3"
      >
        You didn't just graduate.
      </motion.p>

      {/* 6. You became part of the beginning of something new. */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 6.8 }}
        className="font-serif-display text-xl sm:text-2xl md:text-3xl text-[#D6A85F] font-light max-w-xl leading-relaxed mb-6"
      >
        You became part of the beginning of something new.
      </motion.p>

      {/* 7. Pioneer Pharm D Set, 2026 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 8.0 }}
        className="mb-12"
      >
        <span className="font-cinzel text-base sm:text-lg md:text-xl text-[#FFF7E8] tracking-wider uppercase px-6 py-2.5 rounded-full border border-[#D6A85F]/40 bg-[#641B32]/90">
          Pioneer Pharm D Set, 2026
        </span>
      </motion.div>

      {/* Action to Celebration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 9.0 }}
      >
        <button
          id="btn-commence-celebration"
          onClick={handleCommence}
          className="group relative px-9 py-4 rounded-full bg-gradient-to-r from-[#FFF7E8] via-[#D6A85F] to-[#FFF7E8] text-[#3A0D1E] font-sans-clean font-semibold text-sm sm:text-base tracking-widest uppercase shadow-[0_0_35px_rgba(214,168,95,0.45)] hover:shadow-[0_0_50px_rgba(214,168,95,0.7)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
        >
          COMMENCE THE CELEBRATION 🎓✨
        </button>
      </motion.div>
    </div>
  );
};
