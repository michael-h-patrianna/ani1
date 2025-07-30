import { useEffect, useState } from 'react';
import styles from './IconEffectsV4.module.css';

type Props = {
  className?: string;
  onShakeIcon?: () => void;
};

export default function IconEffectsV9({ className, onShakeIcon }: Props) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Trigger animation every 5 seconds
    const interval = setInterval(() => {
      const newKey = Date.now(); // Use timestamp for true uniqueness
      setAnimationKey(newKey);

      // Trigger the organic celebration glow that matches particle timing
      if (onShakeIcon) {
        onShakeIcon();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [onShakeIcon]);

  return (
    <div className={`${styles.effectsContainer} ${className}`}>
      {/* Celebration sparkles - reward discovery */}
      <div key={`celebrationCloud-${animationKey}`} className={styles.celebrationCloud}>
        {Array.from({ length: 25 }).map((_, i) => {
          const angle = (i / 25) * 360;
          const radius = 15 + Math.random() * 45;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          // Gentle celebration timing - no explosive physics
          const celebrationDelay = 800 + (i * 40) + Math.random() * 200;

          return (
            <div
              key={`celebration-${animationKey}-${i}`}
              className={styles.celebrationSparkle}
              style={{
                left: `calc(100% - 29px + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animationDelay: `${celebrationDelay}ms`,
                '--sparkle-scale': 0.4 + Math.random() * 0.8,
                '--sparkle-intensity': 0.6 + Math.random() * 0.4,
                '--celebration-type': Math.floor(Math.random() * 4) + 1,
              } as React.CSSProperties & {
                '--sparkle-scale': number;
                '--sparkle-intensity': number;
                '--celebration-type': number;
              }}
            />
          );
        })}
      </div>

      {/* Reward confetti - cascading joy */}
      <div key={`confettiCloud-${animationKey}`} className={styles.confettiCloud}>
        {Array.from({ length: 20 }).map((_, i) => {
          const x = -20 + Math.random() * 100; // Spread across wider area
          const y = -30 + Math.random() * 20; // Start above the gift

          return (
            <div
              key={`confetti-${animationKey}-${i}`}
              className={styles.confetti}
              style={{
                left: `calc(100% - 29px + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animationDelay: `${1200 + Math.random() * 400}ms`,
                '--confetti-color': Math.floor(Math.random() * 5) + 1,
                '--drift-x': (Math.random() - 0.5) * 40,
                '--drift-y': 40 + Math.random() * 30,
              } as React.CSSProperties & {
                '--confetti-color': number;
                '--drift-x': number;
                '--drift-y': number;
              }}
            />
          );
        })}
      </div>

      {/* Celebration particles - pure joy */}
      <div className={styles.particleContainer}>
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = Math.random() * 360;
          const radius = 20 + Math.random() * 35;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          return (
            <div
              key={`particle-${animationKey}-${i}`}
              className={styles.celebrationParticle}
              style={{
                left: `calc(100% - 29px + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animationDelay: `${400 + Math.random() * 800}ms`,
                '--particle-scale': 0.3 + Math.random() * 0.5,
              } as React.CSSProperties & {
                '--particle-scale': number;
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

