import React from 'react';
import { motion } from 'motion/react';
import type { Stage } from '../types';

interface BalloonSpec {
  id: string;
  type: 'burgundy' | 'gold' | 'cream';
  size: number; // width in px
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  floatY: number;
  floatX: number;
  duration: number;
  delay: number;
  rotateRange: number;
  minStage: number; // Stage at which this balloon begins appearing
}

// Strictly kept at the outer edges (left < 18%, right < 18%, bottom corners)
// Leaving the center 65%+ completely open for typography
const BALLOONS: BalloonSpec[] = [
  // Left flank
  {
    id: 'b-left-1',
    type: 'burgundy',
    size: 78,
    left: '2%',
    bottom: '22%',
    floatY: -22,
    floatX: 8,
    duration: 6.8,
    delay: 0.2,
    rotateRange: 3,
    minStage: 5,
  },
  {
    id: 'b-left-2',
    type: 'gold',
    size: 64,
    left: '8%',
    bottom: '40%',
    floatY: -18,
    floatX: -6,
    duration: 7.4,
    delay: 0.8,
    rotateRange: -2.5,
    minStage: 7,
  },
  {
    id: 'b-left-3',
    type: 'cream',
    size: 90,
    left: '4%',
    bottom: '6%',
    floatY: -24,
    floatX: 10,
    duration: 8.2,
    delay: 1.4,
    rotateRange: 2,
    minStage: 8,
  },
  {
    id: 'b-left-4',
    type: 'burgundy',
    size: 56,
    left: '12%',
    bottom: '16%',
    floatY: -15,
    floatX: 5,
    duration: 6.2,
    delay: 0.5,
    rotateRange: -3,
    minStage: 8,
  },

  // Right flank
  {
    id: 'b-right-1',
    type: 'gold',
    size: 82,
    right: '3%',
    bottom: '26%',
    floatY: -20,
    floatX: -8,
    duration: 7.0,
    delay: 0.4,
    rotateRange: -3,
    minStage: 5,
  },
  {
    id: 'b-right-2',
    type: 'burgundy',
    size: 68,
    right: '9%',
    bottom: '45%',
    floatY: -16,
    floatX: 6,
    duration: 6.5,
    delay: 1.0,
    rotateRange: 2.5,
    minStage: 7,
  },
  {
    id: 'b-right-3',
    type: 'cream',
    size: 88,
    right: '4%',
    bottom: '8%',
    floatY: -22,
    floatX: -9,
    duration: 7.8,
    delay: 1.6,
    rotateRange: -2,
    minStage: 8,
  },
  {
    id: 'b-right-4',
    type: 'gold',
    size: 58,
    right: '12%',
    bottom: '18%',
    floatY: -14,
    floatX: -4,
    duration: 6.6,
    delay: 0.9,
    rotateRange: 3,
    minStage: 8,
  },

  // Subtle bottom drift accents for Grand Final Reveal
  {
    id: 'b-bot-1',
    type: 'burgundy',
    size: 60,
    left: '18%',
    bottom: '2%',
    floatY: -15,
    floatX: 6,
    duration: 8.5,
    delay: 2.0,
    rotateRange: 2,
    minStage: 8,
  },
  {
    id: 'b-bot-2',
    type: 'gold',
    size: 62,
    right: '18%',
    bottom: '2%',
    floatY: -16,
    floatX: -6,
    duration: 8.0,
    delay: 2.2,
    rotateRange: -2,
    minStage: 8,
  },
];

interface CelebrationBalloonsProps {
  stage: Stage;
}

export const CelebrationBalloons: React.FC<CelebrationBalloonsProps> = ({ stage }) => {
  // Only render if current stage is at least 5
  if (stage < 5) return null;

  const activeBalloons = BALLOONS.filter((b) => stage >= b.minStage);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Burgundy 3D Gradient */}
          <radialGradient id="balloon-burgundy-grad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#A8385C" />
            <stop offset="35%" stopColor="#641B32" />
            <stop offset="75%" stopColor="#3A0D1E" />
            <stop offset="100%" stopColor="#220510" />
          </radialGradient>

          {/* Champagne Gold 3D Gradient */}
          <radialGradient id="balloon-gold-grad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="25%" stopColor="#F5D28C" />
            <stop offset="65%" stopColor="#D6A85F" />
            <stop offset="100%" stopColor="#8C6321" />
          </radialGradient>

          {/* Warm Cream 3D Gradient */}
          <radialGradient id="balloon-cream-grad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFF7E8" />
            <stop offset="70%" stopColor="#F3D9D7" />
            <stop offset="100%" stopColor="#D8BEB8" />
          </radialGradient>

          {/* Soft specular glossy sheen */}
          <linearGradient id="balloon-gloss" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {activeBalloons.map((b) => {
        const height = b.size * 1.22;
        const stringHeight = b.size * 0.9;
        const fillId =
          b.type === 'burgundy'
            ? 'url(#balloon-burgundy-grad)'
            : b.type === 'gold'
            ? 'url(#balloon-gold-grad)'
            : 'url(#balloon-cream-grad)';

        return (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{
              opacity: stage === 8 ? 0.95 : 0.85,
              scale: 1,
              y: [0, b.floatY, 0],
              x: [0, b.floatX, 0],
              rotate: [-b.rotateRange, b.rotateRange, -b.rotateRange],
            }}
            transition={{
              opacity: { duration: 1.8, delay: b.delay * 0.5 },
              scale: { duration: 1.8, delay: b.delay * 0.5 },
              y: {
                duration: b.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: b.delay,
              },
              x: {
                duration: b.duration * 1.25,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: b.delay * 0.8,
              },
              rotate: {
                duration: b.duration * 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: b.delay,
              },
            }}
            style={{
              position: 'absolute',
              left: b.left,
              right: b.right,
              bottom: b.bottom,
              top: b.top,
              width: b.size,
              height: height + stringHeight,
            }}
            className="filter drop-shadow-[0_12px_24px_rgba(35,7,19,0.5)]"
          >
            <svg
              viewBox="0 0 100 200"
              className="w-full h-full overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Balloon Body */}
              <path
                d="M 50 10 
                   C 76 10, 94 34, 94 65 
                   C 94 95, 74 125, 53 135 
                   L 54 139 
                   L 46 139 
                   L 47 135 
                   C 26 125, 6 95, 6 65 
                   C 6 34, 24 10, 50 10 Z"
                fill={fillId}
              />

              {/* Tied Knot at base */}
              <polygon
                points="46,138 54,138 57,144 43,144"
                fill={
                  b.type === 'burgundy'
                    ? '#3A0D1E'
                    : b.type === 'gold'
                    ? '#8C6321'
                    : '#C5ACA6'
                }
              />

              {/* Realistic 3D Specular Curved Highlight */}
              <ellipse
                cx="34"
                cy="44"
                rx="14"
                ry="24"
                transform="rotate(-26 34 44)"
                fill="url(#balloon-gloss)"
              />

              {/* Tiny secondary specular glint */}
              <circle cx="28" cy="28" r="3" fill="#FFFFFF" opacity="0.6" />

              {/* Delicate Curved String with realistic sway */}
              <path
                d="M 50 144 Q 56 160 46 175 T 52 198"
                fill="none"
                stroke="rgba(214, 168, 95, 0.45)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};
