import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen7Props {
  onNext: () => void;
}

export const Screen7Celebration: React.FC<Screen7Props> = ({ onNext }) => {
  const [clickCount, setClickCount] = useState<number>(0);

  useEffect(() => {
    sound.playCelebrationChimes();
  }, []);

  const handleScreenTap = () => {
    setClickCount((c) => c + 1);
    sound.playChime(783.99 + (clickCount % 4) * 60);
  };

  const handleNext = () => {
    sound.playEmotionalChime();
    onNext();
  };

  const titles = [
    'The student.',
    'The leader.',
    'The pioneer.',
    'The graduate.',
  ];

  return (
    <div
      id="screen-7-celebration"
      onClick={handleScreenTap}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center max-w-4xl mx-auto select-none cursor-pointer"
    >
      {/* Decorative Graduation Cap Floating Motif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 relative"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#0D1B2A] to-[#07111F] border border-[#D4AF6A] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,106,0.4)] animate-float-gentle">
          <span className="text-4xl sm:text-5xl">🎓</span>
        </div>
      </motion.div>

      {/* Main Celebration Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="mb-3"
      >
        <span className="text-[#D4AF6A] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D4AF6A]/30 pb-2 inline-block">
          Chapter 07 • Celebration
        </span>
      </motion.div>

      <motion.h2
        id="celebrate-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-gold-luxury uppercase tracking-wider mb-6 gold-glow"
      >
        TODAY, WE CELEBRATE YOU. 🎉
      </motion.h2>

      {/* Editorial Hairline Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.9 }}
        className="h-[1px] w-48 sm:w-64 editorial-divider-h mx-auto mb-8"
      />

      {/* Sequenced Reveals: The student, The leader, The pioneer, The graduate */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mb-8">
        {titles.map((title, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.4 + idx * 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="px-5 py-2.5 rounded-full border border-[#D4AF6A]/40 bg-[#0D1B2A]/80 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,106,0.15)]"
          >
            <span className="font-serif-display text-lg sm:text-2xl text-[#F7F3EA]">
              {title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* The Honoree's Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 4.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#D4AF6A] uppercase mb-2">
          DOCTOR OF PHARMACY
        </p>
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-gold-gradient font-light tracking-tight">
          Abdulqudus Qamarudeen.
        </h1>
      </motion.div>

      {/* Tap prompt & Next Step */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5.2 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="font-sans-clean text-xs sm:text-sm text-[#F7F3EA]/50">
          ✨ Tap anywhere on the screen for sparkles ✨
        </p>

        <button
          id="btn-celebration-final"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="mt-2 group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D4AF6A] bg-[#07111F]/90 hover:bg-[#D4AF6A]/20 text-[#F2D58A] font-sans-clean font-medium text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(212,175,106,0.3)] cursor-pointer"
        >
          <span>THE FINAL REVEAL</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
};
