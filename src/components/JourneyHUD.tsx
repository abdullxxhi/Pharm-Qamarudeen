import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../audio/soundEngine';
import type { Stage } from '../types';

interface JourneyHUDProps {
  currentStage: Stage;
  onSelectStage?: (stage: Stage) => void;
  maxReachedStage: number;
}

export const JourneyHUD: React.FC<JourneyHUDProps> = ({
  currentStage,
  onSelectStage,
  maxReachedStage,
}) => {
  const [muted, setMuted] = useState<boolean>(sound.getMuted());

  const handleToggleSound = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  const stageLabels = [
    'Entrance',
    'Reflection',
    'The Journey',
    'The Achievement',
    'Personal Message',
    'The Pioneer',
    'Celebration',
    'Final Reveal',
  ];

  return (
    <header
      id="journey-hud"
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-5 sm:px-10 py-5 sm:py-7 pointer-events-none"
    >
      {/* Editorial Header Left: University of Ilorin */}
      <div className="flex flex-col gap-0.5 pointer-events-auto">
        <span className="text-[#D4AF6A] text-[10px] sm:text-xs tracking-[0.3em] font-semibold uppercase">
          University of Ilorin
        </span>
        <span className="text-[11px] sm:text-xs opacity-60 font-light tracking-widest text-[#F7F3EA]">
          The Better by Far
        </span>
      </div>

      {/* Editorial Chapter Navigation: Progress & Dots */}
      <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
        <nav
          aria-label="Journey Progress"
          className="hidden md:flex items-center gap-2 bg-[#0D1B2A]/80 px-3.5 py-1.5 rounded-full border border-[#D4AF6A]/25 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          {stageLabels.map((label, idx) => {
            const stepNum = (idx + 1) as Stage;
            const isActive = currentStage === stepNum;
            const isUnlocked = stepNum <= maxReachedStage;

            return (
              <button
                key={idx}
                id={`hud-step-${stepNum}`}
                disabled={!isUnlocked}
                onClick={() => {
                  if (isUnlocked && onSelectStage) {
                    sound.playChime(520);
                    onSelectStage(stepNum);
                  }
                }}
                title={`Chapter 0${stepNum}: ${label}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-1.5 bg-[#F2D58A] shadow-[0_0_12px_rgba(242,213,138,0.85)]'
                    : isUnlocked
                    ? 'w-1.5 h-1.5 bg-[#D4AF6A]/50 hover:bg-[#D4AF6A]'
                    : 'w-1.5 h-1.5 bg-white/10 cursor-not-allowed'
                }`}
              />
            );
          })}
        </nav>
        <span className="text-[10px] tracking-[0.25em] text-[#D4AF6A]/70 uppercase font-light hidden sm:inline-block">
          Chapter 0{currentStage}/08
        </span>
      </div>

      {/* Editorial Header Right: Pioneer Set & Audio */}
      <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
        <div className="text-right hidden sm:flex flex-col items-end">
          <span className="text-[#D4AF6A] text-[10px] sm:text-xs tracking-[0.3em] font-semibold uppercase block mb-0.5">
            Pioneer Pharm D Set
          </span>
          <span className="text-sm sm:text-base font-serif italic text-[#F7F3EA]/90">
            Class of 2026
          </span>
        </div>

        {/* Audio Toggle Button */}
        <button
          id="btn-sound-toggle"
          onClick={handleToggleSound}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans-clean transition-all duration-300 border cursor-pointer ${
            muted
              ? 'bg-[#07111F]/80 border-[#D4AF6A]/25 text-[#F7F3EA]/50 hover:text-[#F7F3EA]'
              : 'bg-[#0D1B2A]/90 border-[#D4AF6A]/60 text-[#F2D58A] shadow-[0_0_15px_rgba(212,175,106,0.3)]'
          }`}
          title={muted ? 'Unmute atmospheric audio' : 'Mute audio'}
        >
          {muted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#F7F3EA]/50" />
              <span className="hidden lg:inline">Audio Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#F2D58A] animate-pulse" />
              <span className="hidden lg:inline">Atmosphere On</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
