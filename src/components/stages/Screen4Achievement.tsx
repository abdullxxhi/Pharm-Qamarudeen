import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen4Props {
  onNext: () => void;
}

export const Screen4Achievement: React.FC<Screen4Props> = ({ onNext }) => {
  const [sweeping, setSweeping] = useState<boolean>(true);

  useEffect(() => {
    sound.playPioneerReveal();
    const timer = setTimeout(() => setSweeping(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    sound.playChime(587.33);
    onNext();
  };

  return (
    <div
      id="screen-4-achievement"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center max-w-4xl mx-auto select-none overflow-hidden"
    >
      {/* Golden Light Sweep Overlay */}
      {sweeping && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <div className="w-[60%] h-full bg-gradient-to-r from-transparent via-[#F2D58A]/30 to-transparent blur-2xl animate-light-sweep" />
        </div>
      )}

      {/* Dramatic Golden Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF6A]/15 blur-3xl pointer-events-none -z-10 animate-gold-pulse" />

      {/* Editorial Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="mb-3"
      >
        <span className="text-[#D4AF6A] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D4AF6A]/30 pb-2 inline-block">
          The Grand Milestone
        </span>
      </motion.div>

      {/* 1. YOU DID IT. 🎓 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6"
      >
        <span className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold tracking-[0.2em] text-gold-luxury uppercase gold-glow">
          YOU DID IT. 🎓
        </span>
      </motion.div>

      {/* 2. ABDULQUDUS QAMARUDEEN */}
      <motion.h1
        id="achievement-name"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F3EA] font-light mb-4 tracking-tight gold-glow"
      >
        Abdulqudus <span className="text-[#D4AF6A] italic font-serif-display">Qamarudeen</span>
      </motion.h1>

      {/* Editorial Hairline Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.0, delay: 1.6 }}
        className="h-[1px] w-48 sm:w-64 editorial-divider-h mx-auto mb-6"
      />

      {/* 3. Doctor of Pharmacy (Pharm D) & University of Ilorin */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.9 }}
        className="space-y-1.5 mb-8"
      >
        <p className="font-serif-display italic text-2xl sm:text-3xl md:text-4xl text-[#F7F3EA] font-normal">
          Doctor of Pharmacy (Pharm D)
        </p>
        <p className="font-cinzel text-xs sm:text-sm md:text-base text-[#F2D58A]/80 tracking-[0.25em] uppercase">
          University of Ilorin • The Better by Far
        </p>
      </motion.div>

      {/* 4. Prominently: Pioneer Pharm D Set, 2026 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 2.9 }}
        className="relative my-4 inline-block px-8 py-4 rounded-2xl border border-[#D4AF6A] bg-gradient-to-b from-[#0D1B2A]/90 to-[#07111F]/90 backdrop-blur-md shadow-[0_0_35px_rgba(212,175,106,0.3)]"
      >
        <p className="font-cinzel text-xl sm:text-2xl md:text-3xl tracking-widest text-[#F2D58A] font-semibold uppercase">
          Pioneer Pharm D Set, 2026
        </p>
      </motion.div>

      {/* 5. Student. Leader. Pioneer. Graduate. */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 3.7 }}
        className="font-sans-clean text-sm sm:text-base md:text-lg tracking-[0.25em] text-[#F7F3EA]/70 uppercase mt-8 mb-12 font-medium"
      >
        Student. Leader. Pioneer. Graduate.
      </motion.p>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4.4 }}
      >
        <button
          id="btn-achievement-next"
          onClick={handleContinue}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D4AF6A]/60 bg-[#0D1B2A]/80 hover:bg-[#D4AF6A]/20 text-[#F2D58A] font-sans-clean font-medium text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:border-[#F2D58A] shadow-[0_0_20px_rgba(212,175,106,0.2)] hover:shadow-[0_0_35px_rgba(212,175,106,0.4)] cursor-pointer"
        >
          <span>A WORD FROM THE HEART</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
};
