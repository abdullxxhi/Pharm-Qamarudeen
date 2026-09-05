import React, { useEffect, useRef } from 'react';
import type { Stage } from '../types';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  scaleX: number;
  vScale: number;
  width: number;
  height: number;
  color: string;
  alpha: number;
  isRibbon: boolean;
}

interface SparkBurst {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

interface AtmosphericCanvasProps {
  stage: Stage;
  activeTimelinePoint?: number;
}

export const AtmosphericCanvas: React.FC<AtmosphericCanvasProps> = ({
  stage,
  activeTimelinePoint = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles: Particle[] = [];
    const particleCount = stage >= 7 ? 45 : 55;
    const colors = ['#D6A85F', '#FFF7E8', '#F3D9D7', '#E8C37E', '#B5873E'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.45 - 0.12,
        size: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Confetti pool for celebration (Stages 7 & 8)
    const confetti: ConfettiPiece[] = [];
    const confettiColors = [
      '#D6A85F', // Champagne Gold
      '#FFF7E8', // Warm Cream
      '#F3D9D7', // Soft Blush
      '#641B32', // Wine
      '#8A2544', // Rose Burgundy
      '#E8C37E', // Soft Gold
    ];

    const spawnConfetti = (count: number, startY?: number) => {
      for (let i = 0; i < count; i++) {
        const isRibbon = Math.random() > 0.65;
        confetti.push({
          x: Math.random() * width,
          y: startY !== undefined ? startY : Math.random() * -60,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 2.5 + 1.8,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.1,
          scaleX: 1,
          vScale: Math.random() * 0.06 + 0.03,
          width: isRibbon ? Math.random() * 5 + 8 : Math.random() * 6 + 5,
          height: isRibbon ? Math.random() * 3 + 3 : Math.random() * 6 + 5,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          alpha: 0.9,
          isRibbon,
        });
      }
    };

    if (stage === 7 || stage === 8) {
      spawnConfetti(stage === 8 ? 60 : 90, Math.random() * height * 0.4);
    }

    // Sparkle bursts
    const sparks: SparkBurst[] = [];

    const createBurst = (x: number, y: number, count = 22) => {
      const sparkColors = ['#D6A85F', '#FFF7E8', '#F3D9D7', '#FFFFFF'];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.0 + 1.0;
        const maxLife = Math.floor(Math.random() * 35 + 30);
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.2 + 1,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1,
          life: 0,
          maxLife,
        });
      }
    };

    // Auto fireworks / light bursts in celebration stages
    let fireworkTimer = 0;

    // Interactive burst on click
    const handleCanvasClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY, stage >= 7 ? 30 : 16);
    };
    window.addEventListener('click', handleCanvasClick);

    let time = 0;

    const render = () => {
      time += 0.015;

      // 1. Render Burgundy + Wine + Warm Cream Atmospheric Gradient
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.38,
        15,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );

      if (stage === 3 && activeTimelinePoint === 3) {
        // Leadership PMSSN: Warm Wine & Champagne Gold halo
        bgGrad.addColorStop(0, 'rgba(214, 168, 95, 0.22)');
        bgGrad.addColorStop(0.35, 'rgba(100, 27, 50, 0.95)');
        bgGrad.addColorStop(1, '#3A0D1E');
      } else if (stage === 6) {
        // Prestigious Pioneer Moment: Focused golden light on deep wine
        bgGrad.addColorStop(0, 'rgba(214, 168, 95, 0.18)');
        bgGrad.addColorStop(0.35, 'rgba(100, 27, 50, 0.92)');
        bgGrad.addColorStop(1, '#230713');
      } else if (stage === 7 || stage === 8) {
        // Grand Celebration: Warm Champagne Gold radiating through Wine and Burgundy
        bgGrad.addColorStop(0, 'rgba(214, 168, 95, 0.22)');
        bgGrad.addColorStop(0.4, 'rgba(100, 27, 50, 0.92)');
        bgGrad.addColorStop(1, '#3A0D1E');
      } else {
        // Classic Warm Burgundy environment
        bgGrad.addColorStop(0, 'rgba(214, 168, 95, 0.12)');
        bgGrad.addColorStop(0.45, 'rgba(100, 27, 50, 0.88)');
        bgGrad.addColorStop(1, '#3A0D1E');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle decorative celebration sparkle stars (refined & non-intrusive)
      if (stage >= 4) {
        ctx.save();
        ctx.fillStyle = 'rgba(214, 168, 95, 0.15)';
        const starPositions = [
          { x: width * 0.12, y: height * 0.22 },
          { x: width * 0.88, y: height * 0.26 },
          { x: width * 0.16, y: height * 0.72 },
          { x: width * 0.84, y: height * 0.68 },
        ];
        starPositions.forEach((pos, idx) => {
          const starAlpha = 0.15 + Math.sin(time * 2 + idx) * 0.08;
          ctx.globalAlpha = starAlpha;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      // 3. Render and update floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += p.vx + Math.sin(time + p.pulseOffset) * 0.2;

        // Pulse alpha
        p.alpha = p.baseAlpha + Math.sin(time * 2 + p.pulseOffset) * 0.15;
        if (p.alpha < 0.05) p.alpha = 0.05;

        // Reset if off top or sides
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      // 4. Render Celebration Confetti (Stage 7 & Stage 8)
      if (stage >= 7) {
        fireworkTimer++;
        if (fireworkTimer % (stage === 8 ? 120 : 90) === 0) {
          // Auto burst subtle celebratory sparkles
          createBurst(
            width * (0.2 + Math.random() * 0.6),
            height * (0.2 + Math.random() * 0.3),
            stage === 8 ? 20 : 30
          );
        }

        if (confetti.length < (stage === 8 ? 70 : 90) && Math.random() < 0.25) {
          spawnConfetti(2);
        }

        for (let i = confetti.length - 1; i >= 0; i--) {
          const c = confetti[i];
          c.x += c.vx;
          c.y += c.vy;
          c.rotation += c.vRot;
          c.scaleX = Math.cos(time * 3 + i);

          if (c.y > height + 20) {
            c.y = -15;
            c.x = Math.random() * width;
          }

          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate(c.rotation);
          ctx.scale(c.scaleX, 1);
          ctx.fillStyle = c.color;
          ctx.globalAlpha = 0.85;

          if (c.isRibbon) {
            ctx.fillRect(-c.width / 2, -c.height / 2, c.width, c.height);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, c.width * 0.45, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      // 5. Render Sparkle Bursts
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.04; // mild gravity
        s.life++;
        const progress = s.life / s.maxLife;
        s.alpha = 1 - progress;

        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleCanvasClick);
    };
  }, [stage, activeTimelinePoint]);

  return (
    <canvas
      ref={canvasRef}
      id="atmospheric-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
