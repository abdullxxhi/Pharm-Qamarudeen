import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sound } from '../../audio/soundEngine';

interface Screen3Props {
  onNext: () => void;
  onActivePointChange: (pointId: number) => void;
}

export const Screen3Journey: React.FC<Screen3Props> = ({
  onNext,
  onActivePointChange,
}) => {
  const [activePoint, setActivePoint] = useState<number>(1);
  const [unlockedPoints, setUnlockedPoints] = useState<number[]>([1]);

  const handleSelectPoint = (id: number) => {
    setActivePoint(id);
    onActivePointChange(id);
    if (!unlockedPoints.includes(id)) {
      setUnlockedPoints((prev) => [...prev, id]);
    }

    if (id === 3) {
      sound.playChime(440); // Emerald noble tone
    } else if (id === 4) {
      sound.playPioneerReveal();
    } else {
      sound.playChime(523.25 + id * 40);
    }
  };

  const handleContinue = () => {
    sound.playCinematicSwell();
    onNext();
  };

  const points = [
    {
      id: 1,
      num: '01',
      title: 'THE BEGINNING',
      preview: 'University of Ilorin',
      content: (
        <div className="space-y-4">
          <p className="font-serif-display text-xl sm:text-2xl text-[#F7F3EA] leading-relaxed">
            It started with choosing a path and stepping into Pharmacy at the University of Ilorin.
          </p>
          <p className="font-sans-clean text-[#F7F3EA]/75 text-base sm:text-lg">
            At the time, it was just the beginning.
          </p>
          <p className="font-sans-clean text-[#D4AF6A] text-base sm:text-lg font-medium">
            You couldn't have known everything that was waiting ahead, but you took the first step.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      num: '02',
      title: 'THE GRIND',
      preview: 'Testing endurance',
      content: (
        <div className="space-y-4">
          <p className="font-serif-display text-2xl sm:text-3xl text-[#F2D58A] italic">
            Then came the reality.
          </p>
          <div className="p-3.5 rounded-xl bg-[#0D1B2A]/70 border border-[#D4AF6A]/20 text-[#F7F3EA] font-sans-clean tracking-wide text-sm sm:text-base">
            Lectures. Practicals. Assignments. Exams.
          </div>
          <p className="font-sans-clean text-[#F7F3EA]/80 text-base sm:text-lg">
            The kind of workload that tests more than what you know.
          </p>
          <p className="font-serif-display text-xl sm:text-2xl text-gold-gradient font-medium">
            It tests how long you're willing to keep going.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      num: '03',
      title: 'THE LEADER',
      preview: 'PMSSN National Coordinator',
      isEmerald: true,
      content: (
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B5D4F]/40 border border-[#10B981]/40 text-[#6EE7B7] text-xs sm:text-sm font-cinzel tracking-widest uppercase shadow-[0_0_20px_rgba(11,93,79,0.4)]">
            LEADERSHIP 💚
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-emerald-gold font-normal">
            PMSSN National Coordinator
          </h3>
          <p className="font-sans-clean text-[#F7F3EA]/85 text-base sm:text-lg">
            You weren't only navigating your own journey.
          </p>
          <p className="font-sans-clean text-[#F7F3EA]/75 text-base sm:text-lg">
            You also took on the responsibility of leading and representing your set.
          </p>
          <p className="font-sans-clean text-[#6EE7B7]/90 text-base sm:text-lg italic">
            Leadership while studying isn't easy.
          </p>
          <p className="font-serif-display text-xl sm:text-2xl text-[#F2D58A]">
            And you did it alongside everything else.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      num: '04',
      title: 'THE PIONEER',
      preview: 'Pioneer Pharm D Set, 2026',
      isPioneer: true,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-cinzel tracking-[0.3em] text-xs sm:text-sm text-[#D4AF6A] uppercase block">
              PIONEER
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-gold-luxury font-light">
              Pharm D Set
            </h3>
            <p className="font-cinzel text-xl sm:text-2xl text-[#F2D58A] tracking-widest">
              2026
            </p>
            <p className="font-cinzel text-sm sm:text-base text-[#F7F3EA]/70 tracking-[0.2em] uppercase">
              UNIVERSITY OF ILORIN
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#D4AF6A]/50 bg-gradient-to-r from-[#07111F] via-[#0D1B2A] to-[#07111F] shadow-[0_0_30px_rgba(212,175,106,0.25)]">
            <p className="font-serif-display text-2xl sm:text-3xl text-gold-gradient font-medium">
              Pioneer Pharm D Set, 2026
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="screen-3-journey"
      className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 py-12 max-w-4xl mx-auto select-none"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
        >
          <span className="text-[#D4AF6A] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium border-b border-[#D4AF6A]/30 pb-2 inline-block">
            Milestones of Resilience
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-gold-luxury font-light gold-glow"
        >
          The Journey
        </motion.h2>
        <p className="font-sans-clean text-xs sm:text-sm text-[#F7F3EA]/60 mt-2 tracking-wider">
          Tap each milestone to retrace your path
        </p>
      </div>

      {/* Interactive Timeline Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column: Timeline Navigation Buttons */}
        <div className="md:col-span-5 flex flex-row md:flex-col justify-between gap-2.5 sm:gap-3.5">
          {points.map((p) => {
            const isActive = activePoint === p.id;
            const isUnlocked = unlockedPoints.includes(p.id);

            return (
              <button
                key={p.id}
                id={`timeline-btn-${p.id}`}
                onClick={() => handleSelectPoint(p.id)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  isActive
                    ? p.isEmerald
                      ? 'bg-[#0B5D4F]/30 border-[#10B981] shadow-[0_0_25px_rgba(11,93,79,0.5)]'
                      : p.isPioneer
                      ? 'bg-[#0D1B2A] border-[#D4AF6A] shadow-[0_0_25px_rgba(212,175,106,0.4)] scale-[1.02]'
                      : 'bg-[#0D1B2A]/90 border-[#D4AF6A] shadow-[0_0_20px_rgba(212,175,106,0.3)] scale-[1.01]'
                    : 'bg-[#07111F]/60 border-[#D4AF6A]/20 hover:border-[#D4AF6A]/50 text-[#F7F3EA]/70 hover:bg-[#0D1B2A]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-cinzel text-xs sm:text-sm font-semibold px-2 py-1 rounded ${
                      isActive
                        ? p.isEmerald
                          ? 'bg-[#10B981] text-[#07111F]'
                          : 'bg-[#D4AF6A] text-[#07111F]'
                        : 'bg-[#0D1B2A] text-[#D4AF6A]'
                    }`}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h4
                      className={`font-cinzel text-xs sm:text-sm font-semibold tracking-wider ${
                        isActive
                          ? p.isEmerald
                            ? 'text-[#6EE7B7]'
                            : 'text-[#F2D58A]'
                          : 'text-[#F7F3EA]'
                      }`}
                    >
                      {p.title}
                    </h4>
                    <p className="hidden sm:block text-[11px] text-[#F7F3EA]/50">
                      {p.preview}
                    </p>
                  </div>
                </div>

                <div className="text-sm">
                  {isActive ? (
                    <span className="text-[#F2D58A] animate-pulse">●</span>
                  ) : isUnlocked ? (
                    <span className="text-[#D4AF6A]/40">✓</span>
                  ) : (
                    <span className="text-white/20">○</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Narrative Story Card */}
        <div className="md:col-span-7">
          <div
            id="timeline-story-card"
            className="min-h-[340px] flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#D4AF6A]/30 bg-[#0D1B2A]/70 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Subtle background ambient corner */}
            <div
              className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
                activePoint === 3
                  ? 'bg-[#0B5D4F]/30'
                  : activePoint === 4
                  ? 'bg-[#D4AF6A]/20'
                  : 'bg-[#D4AF6A]/10'
              }`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePoint}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                {points[activePoint - 1].content}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions inside the card */}
            <div className="pt-6 mt-6 border-t border-[#D4AF6A]/20 flex items-center justify-between">
              {activePoint < 4 ? (
                <button
                  id="btn-next-point"
                  onClick={() => handleSelectPoint(activePoint + 1)}
                  className="text-xs sm:text-sm font-sans-clean text-[#D4AF6A] hover:text-[#F2D58A] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Next milestone ({points[activePoint].title})</span>
                  <span>→</span>
                </button>
              ) : (
                <button
                  id="btn-journey-achievement"
                  onClick={handleContinue}
                  className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#F2D58A] via-[#D4AF6A] to-[#F2D58A] text-[#07111F] font-sans-clean font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,106,0.35)] hover:shadow-[0_0_35px_rgba(242,213,138,0.5)] transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center"
                >
                  WITNESS THE ACHIEVEMENT 🎓 →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
