import React from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen2Props {
  onNext: () => void;
}

export const Screen2Before: React.FC<Screen2Props> = ({ onNext }) => {
  const handleNext = () => {
    sound.playChime(659.25); // E5
    onNext();
  };

  const reflections = [
    'Years of lectures.',
    'Practical sessions.',
    'Exams.',
    'Long days.',
    'Responsibilities.',
    'And probably a few moments where you wondered if all of this was really worth it.',
  ];

  return (
    <div
      id="screen-2-before"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center max-w-2xl mx-auto select-none"
    >
      {/* Editorial Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.1 }}
        className="mb-4"
      >
        <span className="text-[#D4AF6A] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D4AF6A]/30 pb-2 inline-block">
          Chapter 02 • Reflection
        </span>
      </motion.div>

      {/* Intro Hook */}
      <motion.p
        id="before-lead-in"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="font-serif-display italic text-xl sm:text-2xl md:text-3xl text-[#D4AF6A] mb-2 font-normal"
      >
        Before we get to the congratulations...
      </motion.p>

      {/* Second Line */}
      <motion.h2
        id="before-appreciate-heading"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="font-cinzel text-lg sm:text-xl md:text-2xl tracking-wider text-[#F7F3EA] uppercase font-light mb-6 gold-glow"
      >
        let's take a second to appreciate how you got here.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.0, delay: 1.5 }}
        className="h-[1px] w-40 editorial-divider-h mx-auto mb-8"
      />

      {/* Conversational list items, gradually revealed line by line */}
      <div className="space-y-3.5 my-4 max-w-lg">
        {reflections.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 2.2 + idx * 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`font-sans-clean text-base sm:text-lg md:text-xl ${
              idx === reflections.length - 1
                ? 'text-[#F7F3EA]/90 italic pt-2'
                : 'text-[#F7F3EA]/75'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Climax Statement: But you kept going */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.4,
          delay: 2.2 + reflections.length * 0.7 + 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mt-10 mb-12"
      >
        <span className="inline-block px-6 py-2 rounded-full border border-[#D4AF6A]/30 bg-[#0D1B2A]/60 backdrop-blur-sm text-gold-gradient font-serif-display text-2xl sm:text-3xl md:text-4xl font-normal shadow-[0_0_20px_rgba(212,175,106,0.15)]">
          But you kept going.
        </span>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2.2 + reflections.length * 0.7 + 1.6,
        }}
      >
        <button
          id="btn-keep-going"
          onClick={handleNext}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D4AF6A]/60 bg-[#07111F]/80 hover:bg-[#D4AF6A]/15 text-[#F2D58A] font-sans-clean font-medium text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:border-[#F2D58A] shadow-[0_0_20px_rgba(212,175,106,0.2)] hover:shadow-[0_0_30px_rgba(212,175,106,0.4)] cursor-pointer"
        >
          <span>KEEP GOING</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-300">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
};
