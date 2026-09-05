import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen8Props {
  onRestart: () => void;
}

export const Screen8FinalReveal: React.FC<Screen8Props> = ({ onRestart }) => {
  const [showReplay, setShowReplay] = useState<boolean>(false);

  useEffect(() => {
    sound.playEmotionalChime();
    // After letting the screen breathe, reveal replay
    const timer = setTimeout(() => {
      setShowReplay(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleRestart = () => {
    sound.playChime(523.25);
    onRestart();
  };

  return (
    <div
      id="screen-8-final-reveal"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 text-center max-w-3xl mx-auto select-none"
    >
      {/* Soft warm golden halo behind the message */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#D6A85F]/15 blur-3xl pointer-events-none -z-10 animate-gold-pulse" />

      {/* Editorial Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="mb-3"
      >
        <span className="text-[#D6A85F] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D6A85F]/30 pb-2 inline-block">
          The Journey Complete
        </span>
      </motion.div>

      {/* Honoree Identity with Editorial Serif Typography */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-4xl sm:text-6xl md:text-7xl font-serif-display leading-tight gold-glow mb-2 text-[#FFF7E8]"
      >
        Abdulqudus <span className="text-[#D6A85F] italic font-serif-display">Qamarudeen</span>
      </motion.h1>

      {/* Degree Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="text-xs sm:text-sm md:text-base tracking-[0.2em] opacity-85 uppercase font-light mb-8 text-[#FFF7E8]"
      >
        Doctor of Pharmacy (Pharm D) • University of Ilorin
      </motion.p>

      {/* Editorial Credentials / Dual Column Layout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="flex gap-8 sm:gap-14 items-center mb-8"
      >
        <div className="flex flex-col items-center">
          <span className="text-[#D6A85F] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-1.5">
            Leadership
          </span>
          <span className="text-xs sm:text-sm italic opacity-85 font-serif-display text-[#FFF7E8]">
            PMSSN National Coordinator
          </span>
        </div>
        <div className="w-[1px] h-10 editorial-divider-v" />
        <div className="flex flex-col items-center">
          <span className="text-[#D6A85F] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-1.5">
            Status
          </span>
          <span className="text-xs sm:text-sm italic opacity-85 font-serif-display text-[#FFF7E8]">
            Pioneer Pharm D • Set of 2026
          </span>
        </div>
      </motion.div>

      {/* CONGRATULATIONS 🎓 */}
      <motion.h2
        id="congratulations-heading"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gold-luxury uppercase gold-glow mb-4"
      >
        CONGRATULATIONS 🎓
      </motion.h2>

      {/* حبيبي ❤️ — The emotional heart of the piece */}
      <motion.div
        id="habibi-arabic-text"
        dir="rtl"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
        className="my-3 py-1 flex flex-col items-center"
      >
        <span className="font-arabic text-6xl sm:text-8xl md:text-9xl text-gold-gradient font-bold leading-none tracking-normal drop-shadow-[0_0_35px_rgba(214,168,95,0.5)] gold-glow-lg">
          حبيبي <span className="text-red-500 font-sans inline-block text-5xl sm:text-7xl md:text-8xl align-middle">❤️</span>
        </span>
        {/* Editorial Hairline Gradient Divider */}
        <div className="h-[1px] w-56 sm:w-72 editorial-divider-h mt-4" />
      </motion.div>

      {/* Personal closing lines */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 3.8 }}
        className="font-serif-display italic text-xl sm:text-2xl md:text-3xl text-[#FFF7E8] mt-3 mb-2 font-normal"
      >
        &apos;You made it. I&apos;m proud of you.&apos;
      </motion.p>

      {/* Signature */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 4.6 }}
        className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#D6A85F] uppercase mb-8"
      >
        — Abdullahi
      </motion.p>

      {/* Editorial Concentric Replay Action */}
      <div className="min-h-[100px] flex flex-col items-center justify-center">
        {showReplay && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div
              id="btn-replay-journey"
              onClick={handleRestart}
              className="relative group cursor-pointer flex flex-col items-center"
              title="Experience Journey Again"
            >
              <div className="absolute -inset-3.5 border border-[#D6A85F]/25 rounded-full group-hover:border-[#D6A85F]/60 group-hover:scale-110 transition-all duration-500" />
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#D6A85F] flex items-center justify-center bg-[#641B32] z-20 relative shadow-[0_0_25px_rgba(214,168,95,0.35)] group-hover:shadow-[0_0_35px_rgba(214,168,95,0.6)] transition-all">
                <span className="text-[#D6A85F] group-hover:text-[#FFF7E8] text-xl transition-transform duration-500 group-hover:rotate-180">
                  ↻
                </span>
              </div>
            </div>

            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#D6A85F]/90 uppercase mt-1">
              Replay Experience
            </span>

            <p className="font-serif-display italic text-xs text-[#FFF7E8]/60 tracking-wider">
              Made with love for Abdulqudus. ❤️
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
