import { useEffect, useState } from 'react';
import styles from './IconEffectsV2.module.css';

type Props = {
  className?: string;
  onShakeIcon?: () => void;
};

export default function IconEffectsV8({ className, onShakeIcon }: Props) {
  const [animationKey, setAnimationKey] = useState(0);
  const [shakePhase, setShakePhase] = useState(0);

  useEffect(() => {
    // Trigger animation every 5 seconds
    const interval = setInterval(() => {
      const newKey = Date.now(); // Use timestamp for true uniqueness
      setAnimationKey(newKey);
      setShakePhase(0);

      // Complex multi-phase energy system
      if (onShakeIcon) {
        // Phase 1: Initial energy containment failure (0s)
        onShakeIcon();
        setShakePhase(1);

        // Phase 2: Energy pressure buildup (0.3s)
        setTimeout(() => {
          setShakePhase(2);
        }, 300);

        // Phase 3: First breakthrough attempt (0.6s)
        setTimeout(() => {
          if (onShakeIcon) {
            onShakeIcon();
            setShakePhase(3);
          }
        }, 600);

        // Phase 4: Critical energy release (0.9s)
        setTimeout(() => {
          setShakePhase(4);
        }, 900);

        // Phase 5: Final explosive release (1.2s)
        setTimeout(() => {
          if (onShakeIcon) {
            onShakeIcon();
            setShakePhase(5);
          }
        }, 1200);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [onShakeIcon]);

  return (
    <div className={`${styles.effectsContainer} ${className || ''}`}>
      {/* Multi-phase energy core */}
      <div
        key={`energyCore-${animationKey}`}
        className={styles.energyCore}
      ></div>

      {/* Primary charging glow - energy accumulation */}
      <div
        key={`glow-${animationKey}`}
        className={styles.chargingGlow}
      ></div>

      {/* Secondary pressure glow - containment failure */}
      <div
        key={`pressureGlow-${animationKey}`}
        className={styles.pressureGlow}
      ></div>

      {/* Dynamic sparkle layers with physics-based timing */}
      <div key={`sparkleCloud-${animationKey}`} className={styles.sparkleCloud}>
        {Array.from({ length: 35 }).map((_, i) => {
          const angle = (i / 35) * 360;
          const radius = 20 + Math.random() * 50;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          // Physics-based delay calculation
          const distanceFromCenter = Math.sqrt(x * x + y * y);
          const waveSpeed = 120; // pixels per second
          const physicsDelay = (distanceFromCenter / waveSpeed) * 1000;

          return (
            <div
              key={`sparkle-${animationKey}-${i}`}
              className={styles.sparkle}
              style={{
                left: `calc(100% - 29px + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animationDelay: `${physicsDelay}ms`,
                '--sparkle-scale': 0.3 + Math.random() * 1.0,
                '--sparkle-intensity': 0.4 + Math.random() * 0.6,
                '--sparkle-phase': Math.floor(Math.random() * 5) + 1,
                '--distance-factor': distanceFromCenter / 60,
              } as React.CSSProperties & {
                '--sparkle-scale': number;
                '--sparkle-intensity': number;
                '--sparkle-phase': number;
                '--distance-factor': number;
              }}
            />
          );
        })}
      </div>

      {/* Extended sparkle layers for afterglow */}
      <div key={`extendedSparkles-${animationKey}`} className={styles.extendedSparkleCloud}>
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = Math.random() * 360;
          const radius = 25 + Math.random() * 45;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          // Extended delay for afterglow effect
          const baseDelay = 1200 + Math.random() * 800; // Start after main effect

          return (
            <div
              key={`extended-sparkle-${animationKey}-${i}`}
              className={styles.sparkle}
              style={{
                left: `calc(100% - 29px + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animationDelay: `${baseDelay}ms`,
                '--sparkle-scale': 0.2 + Math.random() * 0.8,
                '--sparkle-intensity': 0.3 + Math.random() * 0.5,
                '--sparkle-phase': Math.floor(Math.random() * 3) + 1,
                '--distance-factor': Math.sqrt(x * x + y * y) / 60,
              } as React.CSSProperties & {
                '--sparkle-scale': number;
                '--sparkle-intensity': number;
                '--sparkle-phase': number;
                '--distance-factor': number;
              }}
            />
          );
        })}
      </div>

      {/* Micro sparkles for detail */}
      <div className={styles.microSparkles}>
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = Math.random() * 360;
          const radius = 15 + Math.random() * 35;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          // Extended timing for micro sparkles
          const delayRange = i < 20 ? 1500 : 2200; // Later sparkles have longer delay
          const baseDelay = i < 20 ? 200 : 1000;

          return (
            <div
              key={`micro-${animationKey}-${i}`}
              className={styles.microSparkle}
              style={{
                left: `calc(100% - 29px + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                animationDelay: `${baseDelay + Math.random() * delayRange}ms`,
                '--micro-scale': 0.2 + Math.random() * 0.6,
              } as React.CSSProperties & {
                '--micro-scale': number;
              }}
            />
          );
        })}
      </div>

      <div className={styles.energyWaves}>
        <div key={`wave-${animationKey}-0`} className={`${styles.wave} ${styles.primaryWave}`} style={{ animationDelay: '0.05s' }}></div>
        <div key={`wave-${animationKey}-1`} className={`${styles.wave} ${styles.primaryWave}`} style={{ animationDelay: '0.15s' }}></div>

        <div key={`wave-${animationKey}-2`} className={`${styles.wave} ${styles.pressureWave}`} style={{ animationDelay: '0.3s' }}></div>
        <div key={`wave-${animationKey}-3`} className={`${styles.wave} ${styles.pressureWave}`} style={{ animationDelay: '0.45s' }}></div>
       <div key={`wave-${animationKey}-4`} className={`${styles.wave} ${styles.breakthroughWave}`} style={{ animationDelay: '0.6s' }}></div>
        <div key={`wave-${animationKey}-5`} className={`${styles.wave} ${styles.breakthroughWave} ${styles.offsetWave1}`} style={{ animationDelay: '0.75s' }}></div>
        <div key={`wave-${animationKey}-6`} className={`${styles.wave} ${styles.criticalWave}`} style={{ animationDelay: '0.9s' }}></div>
        <div key={`wave-${animationKey}-7`} className={`${styles.wave} ${styles.criticalWave} ${styles.offsetWave2}`} style={{ animationDelay: '1.05s' }}></div>

        <div key={`wave-${animationKey}-8`} className={`${styles.wave} ${styles.explosiveWave}`} style={{ animationDelay: '1.2s' }}></div>
        <div key={`wave-${animationKey}-9`} className={`${styles.wave} ${styles.explosiveWave} ${styles.offsetWave3}`} style={{ animationDelay: '1.35s' }}></div>
      </div>

      {/* Energy distortion field */}
      <div key={`distortion-${animationKey}`} className={styles.energyDistortion}></div>
    </div>
  );
}
