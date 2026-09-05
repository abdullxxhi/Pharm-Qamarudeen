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
    const particleCount = stage === 7 ? 40 : 65;
    const colors = ['#D4AF6A', '#F2D58A', '#F7F3EA', '#E2C275'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.5 - 0.15,
        size: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Confetti pool for celebration
    const confetti: ConfettiPiece[] = [];
    const confettiColors = [
      '#D4AF6A', // Champagne Gold
      '#F2D58A', // Soft Gold
      '#F7F3EA', // Warm Ivory
      '#0B5D4F', // Deep Emerald
      '#C99A45', // Rich Gold
    ];

    const spawnConfetti = (count: number, startY?: number) => {
      for (let i = 0; i < count; i++) {
        const isRibbon = Math.random() > 0.6;
        confetti.push({
          x: Math.random() * width,
          y: startY !== undefined ? startY : Math.random() * -100,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 2,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.15,
          scaleX: 1,
          vScale: Math.random() * 0.08 + 0.04,
          width: isRibbon ? Math.random() * 6 + 10 : Math.random() * 8 + 6,
          height: isRibbon ? Math.random() * 4 + 4 : Math.random() * 8 + 6,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          alpha: 1,
          isRibbon,
        });
      }
    };

    if (stage === 7) {
      spawnConfetti(120, Math.random() * height * 0.5);
    }

    // Sparkle bursts
    const sparks: SparkBurst[] = [];

    const createBurst = (x: number, y: number, count = 25) => {
      const sparkColors = ['#F2D58A', '#D4AF6A', '#FFFFFF', '#6EE7B7'];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.2;
        const maxLife = Math.floor(Math.random() * 40 + 35);
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 1,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1,
          life: 0,
          maxLife,
        });
      }
    };

    // Auto fireworks in celebration stage
    let fireworkTimer = 0;

    // Interactive burst on click
    const handleCanvasClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY, stage === 7 ? 40 : 18);
    };
    window.addEventListener('click', handleCanvasClick);

    let time = 0;

    const render = () => {
      time += 0.015;

      // 1. Render Atmospheric Gradient
      ctx.clearRect(0, 0, width, height);

      // Deep base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );

      if (stage === 3 && activeTimelinePoint === 3) {
        // Leadership Emerald glow
        bgGrad.addColorStop(0, 'rgba(11, 93, 79, 0.28)');
        bgGrad.addColorStop(0.4, 'rgba(13, 27, 42, 0.95)');
        bgGrad.addColorStop(1, '#07111F');
      } else if (stage === 6) {
        // Dramatic dark pioneer moment
        bgGrad.addColorStop(0, 'rgba(212, 175, 106, 0.12)');
        bgGrad.addColorStop(0.3, 'rgba(7, 17, 31, 0.96)');
        bgGrad.addColorStop(1, '#030810');
      } else if (stage === 7) {
        // Celebratory warm gold glow
        bgGrad.addColorStop(0, 'rgba(212, 175, 106, 0.22)');
        bgGrad.addColorStop(0.5, 'rgba(13, 27, 42, 0.95)');
        bgGrad.addColorStop(1, '#07111F');
      } else {
        // Classic midnight navy with subtle gold center
        bgGrad.addColorStop(0, 'rgba(212, 175, 106, 0.1)');
        bgGrad.addColorStop(0.5, 'rgba(13, 27, 42, 0.9)');
        bgGrad.addColorStop(1, '#07111F');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Molecular / Pharmacy structure lines in Background (faint & elegant)
      if (stage === 3 || stage === 6 || stage === 4) {
        ctx.save();
        ctx.strokeStyle = 'rgba(212, 175, 106, 0.05)';
        ctx.lineWidth = 1;

        // Faint hexagonal geometry
        const hexSize = 55;
        const centerX = width * 0.82;
        const centerY = height * 0.35;
        const rot = time * 0.05;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = rot + (i * Math.PI) / 3;
          const px = centerX + Math.cos(angle) * hexSize;
          const py = centerY + Math.sin(angle) * hexSize;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // Connected bond
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(rot) * hexSize, centerY + Math.sin(rot) * hexSize);
        ctx.lineTo(centerX + Math.cos(rot) * (hexSize + 30), centerY + Math.sin(rot) * (hexSize + 30));
        ctx.stroke();

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

      // 4. Render Celebration Confetti (Stage 7)
      if (stage === 7) {
        fireworkTimer++;
        if (fireworkTimer % 90 === 0) {
          // Auto burst subtle celebratory fireworks
          createBurst(
            width * (0.25 + Math.random() * 0.5),
            height * (0.2 + Math.random() * 0.35),
            35
          );
        }

        if (confetti.length < 90 && Math.random() < 0.3) {
          spawnConfetti(3);
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
