import React from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen1Props {
  onNext: () => void;
}

export const Screen1Entrance: React.FC<Screen1Props> = ({ onNext }) => {
  const handleBegin = () => {
    sound.startAtmosphere();
    sound.playChime(587.33); // D5
    sound.playCinematicSwell();
    onNext();
  };

  return (
    <div
      id="screen-1-entrance"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto select-none"
    >
      {/* Soft golden breathing light aura in center */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#D4AF6A]/10 blur-3xl pointer-events-none -z-10 animate-gold-pulse" />

      {/* Editorial Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="mb-3"
      >
        <span className="text-[#D4AF6A] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D4AF6A]/30 pb-2 inline-block">
          Dedication & Honor
        </span>
      </motion.div>

      {/* Line 1: Pre-title statement */}
      <motion.p
        id="entrance-intro-statement"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="font-cinzel tracking-[0.3em] text-xs sm:text-sm text-[#F2D58A]/80 uppercase mb-5"
      >
        EVERY JOURNEY HAS A MOMENT WORTH CELEBRATING.
      </motion.p>

      {/* Main Name with Editorial Typography & Gold Glow */}
      <motion.h1
        id="entrance-name-heading"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif-display text-5xl sm:text-7xl md:text-8xl tracking-tight gold-glow font-light mb-4 text-[#F7F3EA]"
      >
        Abdulqudus <span className="text-[#D4AF6A] italic font-serif-display">Qamarudeen</span>
      </motion.h1>

      {/* Editorial Hairline Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="h-[1px] w-48 sm:w-64 editorial-divider-h mx-auto mb-6"
      />

      {/* Subtitle statement */}
      <motion.p
        id="entrance-sub-statement"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif-display italic text-xl sm:text-2xl md:text-3xl text-[#F7F3EA]/75 mb-12 tracking-wide font-normal"
      >
        This one is yours.
      </motion.p>

      {/* Elegant Glowing Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          id="btn-begin-journey"
          onClick={handleBegin}
          className="group relative inline-flex items-center justify-center px-9 py-4 overflow-hidden rounded-full font-sans-clean font-medium text-xs sm:text-sm tracking-[0.2em] uppercase text-[#07111F] bg-gradient-to-r from-[#F2D58A] via-[#D4AF6A] to-[#F2D58A] shadow-[0_0_25px_rgba(212,175,106,0.35)] hover:shadow-[0_0_40px_rgba(242,213,138,0.6)] transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2 font-semibold">
            BEGIN THE JOURNEY ✨
          </span>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>
      </motion.div>
    </div>
  );
};
