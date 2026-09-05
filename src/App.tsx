import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import type { Stage } from './types';
import { AtmosphericCanvas } from './components/AtmosphericCanvas';
import { CelebrationBalloons } from './components/CelebrationBalloons';
import { JourneyHUD } from './components/JourneyHUD';
import { Screen1Entrance } from './components/stages/Screen1Entrance';
import { Screen2Before } from './components/stages/Screen2Before';
import { Screen3Journey } from './components/stages/Screen3Journey';
import { Screen4Achievement } from './components/stages/Screen4Achievement';
import { Screen5PersonalMessage } from './components/stages/Screen5PersonalMessage';
import { Screen6PioneerMoment } from './components/stages/Screen6PioneerMoment';
import { Screen7Celebration } from './components/stages/Screen7Celebration';
import { Screen8FinalReveal } from './components/stages/Screen8FinalReveal';

export default function App() {
  const [stage, setStage] = useState<Stage>(1);
  const [maxReachedStage, setMaxReachedStage] = useState<number>(1);
  const [activeTimelinePoint, setActiveTimelinePoint] = useState<number>(1);

  const goToStage = (nextStage: Stage) => {
    setStage(nextStage);
    if (nextStage > maxReachedStage) {
      setMaxReachedStage(nextStage);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restartExperience = () => {
    setStage(1);
    setActiveTimelinePoint(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut listener for seamless presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (stage < 8 && stage < maxReachedStage) {
          goToStage((stage + 1) as Stage);
        }
      } else if (e.key === 'ArrowLeft') {
        if (stage > 1) {
          goToStage((stage - 1) as Stage);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, maxReachedStage]);

  return (
    <main className="relative min-h-screen w-full bg-[#3A0D1E] text-[#FFF7E8] overflow-hidden select-none">
      {/* Editorial Celebration Radial Background */}
      <div className="absolute inset-0 cinematic-bg pointer-events-none" />

      {/* Editorial Architectural Watermark */}
      <div className="absolute -left-6 sm:-left-4 top-1/2 -translate-y-1/2 opacity-[0.04] sm:opacity-[0.06] pointer-events-none select-none z-0">
        <span className="text-[140px] sm:text-[220px] lg:text-[280px] font-bold tracking-tighter leading-none text-[#FFF7E8]">
          2026
        </span>
      </div>

      {/* Editorial Vertical Side Accent Indicator */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20">
        <div className="w-px h-20 bg-gradient-to-b from-[#D6A85F] to-transparent" />
        <span className="vertical-text text-[10px] tracking-[0.5em] uppercase text-[#FFF7E8]/40">
          {stage === 8 ? 'The Reveal' : `Chapter 0${stage}`}
        </span>
      </div>

      {/* Dynamic Cinematic Canvas Background */}
      <AtmosphericCanvas stage={stage} activeTimelinePoint={activeTimelinePoint} />

      {/* Elegant 3D Celebration Balloons that build up throughout the journey */}
      <CelebrationBalloons stage={stage} />

      {/* Floating HUD with Audio Controls & Subtle Journey Indicator */}
      <JourneyHUD
        currentStage={stage}
        maxReachedStage={maxReachedStage}
        onSelectStage={(s) => goToStage(s)}
      />

      {/* Main Narrative Stage Transitions */}
      <div className="relative z-10 w-full min-h-screen pb-12">
        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen1Entrance onNext={() => goToStage(2)} />
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen2Before onNext={() => goToStage(3)} />
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div
              key="stage-3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen3Journey
                onNext={() => goToStage(4)}
                onActivePointChange={(pointId) => setActiveTimelinePoint(pointId)}
              />
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div
              key="stage-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen4Achievement onNext={() => goToStage(5)} />
            </motion.div>
          )}

          {stage === 5 && (
            <motion.div
              key="stage-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen5PersonalMessage onNext={() => goToStage(6)} />
            </motion.div>
          )}

          {stage === 6 && (
            <motion.div
              key="stage-6"
              initial={{ opacity: 0, filter: 'brightness(0.2)' }}
              animate={{ opacity: 1, filter: 'brightness(1)' }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen6PioneerMoment onNext={() => goToStage(7)} />
            </motion.div>
          )}

          {stage === 7 && (
            <motion.div
              key="stage-7"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen7Celebration onNext={() => goToStage(8)} />
            </motion.div>
          )}

          {stage === 8 && (
            <motion.div
              key="stage-8"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Screen8FinalReveal onRestart={restartExperience} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Editorial Chapter Footer Metadata Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 flex justify-between items-end px-6 sm:px-10 pb-3 sm:pb-4 pointer-events-none">
        <div className="text-[10px] sm:text-xs font-light tracking-[0.25em] text-[#F7F3EA]/40 uppercase">
          Experience Chapter 0{stage}/08
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-[#F7F3EA]/60 text-xs italic font-serif">
            &apos;You made it. I&apos;m proud of you.&apos;
          </p>
          <p className="text-[#D4AF6A] text-[10px] tracking-widest uppercase font-semibold">
            — Abdullahi
          </p>
        </div>
      </footer>

      {/* Vercel Web Analytics */}
      <Analytics />
    </main>
  );
}
