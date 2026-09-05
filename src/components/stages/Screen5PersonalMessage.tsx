import React from 'react';
import { motion } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen5Props {
  onNext: () => void;
}

export const Screen5PersonalMessage: React.FC<Screen5Props> = ({ onNext }) => {
  const handleNext = () => {
    sound.playChime(523.25);
    onNext();
  };

  return (
    <div
      id="screen-5-message"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center max-w-2xl mx-auto select-none"
    >
      {/* Calm subtle warm gold glow in center */}
      <div className="absolute w-80 h-80 rounded-full bg-[#D6A85F]/15 blur-3xl pointer-events-none -z-10" />

      {/* Editorial Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.1 }}
        className="mb-4"
      >
        <span className="text-[#D6A85F] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D6A85F]/30 pb-2 inline-block">
          Brotherly Message
        </span>
      </motion.div>

      {/* Main Hook */}
      <motion.h2
        id="personal-message-heading"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-[#FFF7E8] font-light leading-snug mb-4 gold-glow"
      >
        Honestly, a simple “congratulations” doesn't quite cover it.
      </motion.h2>

      {/* Editorial Hairline Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.9 }}
        className="h-[1px] w-40 editorial-divider-h mx-auto mb-8"
      />

      {/* Narrative Reflections */}
      <div className="space-y-4 max-w-xl text-left sm:text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.4 }}
          className="font-sans-clean text-[#FFF7E8]/85 text-base sm:text-lg leading-relaxed"
        >
          You've put in the work to get here.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.3 }}
          className="font-sans-clean text-[#FFF7E8]/75 text-base sm:text-lg leading-relaxed"
        >
          You've had difficult days, stressful days, tiring days and probably a few moments where you just wanted it all to be over.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.3 }}
          className="font-serif-display italic text-2xl sm:text-3xl text-[#D6A85F] py-1"
        >
          But you made it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 4.2 }}
          className="font-sans-clean text-[#FFF7E8]/80 text-base sm:text-lg leading-relaxed"
        >
          And when you look back at everything, the studying, the responsibilities, the leadership and all the moments in between, you can finally say:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 5.2 }}
          className="py-3 text-center"
        >
          <span className="font-serif-display text-3xl sm:text-4xl text-gold-luxury tracking-wide">
            “I did it.”
          </span>
        </motion.div>

        {/* Brotherly heart statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 6.2 }}
          className="pt-4 pb-2 text-center"
        >
          <p className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-[#FFF7E8] font-normal">
            I'm genuinely proud of you, bro. <span className="text-[#F3D9D7]">❤️</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 7.2 }}
          className="font-sans-clean text-xs sm:text-sm text-[#FFF7E8]/60 italic text-center"
        >
          Not just because you graduated, but because of the journey that got you here.
        </motion.p>
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 8.0 }}
        className="mt-12"
      >
        <button
          id="btn-one-last-reveal"
          onClick={handleNext}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D6A85F] bg-[#641B32]/90 hover:bg-[#641B32] text-[#FFF7E8] font-sans-clean font-medium text-sm md:text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(214,168,95,0.25)] hover:shadow-[0_0_35px_rgba(214,168,95,0.45)] cursor-pointer"
        >
          <span>ONE LAST REVEAL</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
};
