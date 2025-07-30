import { useEffect, useState } from 'react';
import styles from './IconEffectsV1.module.css';

type Props = {
  className?: string;
  onShakeIcon?: () => void;
};

export default function IconEffectsV7({ className, onShakeIcon }: Props) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Trigger animation every 5 seconds
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
      // Trigger the first icon shake when effects start
      if (onShakeIcon) {
        onShakeIcon();
        // Trigger the second shake during the second energy burst (0.7s delay)
        setTimeout(() => {
          onShakeIcon();
        }, 700);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [onShakeIcon]);

  return (
    <div className={`${styles.effectsContainer} ${className || ''}`}>
      {/* Main charging glow behind the icon */}
      <div
        key={`glow-${animationKey}`}
        className={styles.chargingGlow}
      ></div>

      {/* Cloud of sparkles around the icon area */}
      <div key={`sparkleCloud-${animationKey}`} className={styles.sparkleCloud}>
        {/* Multiple layers of sparkles with different timing */}
        {Array.from({ length: 20 }).map((_, i) => {
          // Create variety in sparkle positioning around the icon
          const angle = (i / 20) * 360; // Distribute around circle
          const radius = 25 + Math.random() * 40; // 25-65px from center (increased from 20-50px)
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          return (
            <div
              key={`sparkle-${animationKey}-${i}`}
              className={styles.sparkle}
              style={{
                left: `calc(100% - 29px + ${x}px)`, // Position around right icon
                top: `calc(50% + ${y}px)`,
                animationDelay: `0s`, // No delay - mask controls visibility
                '--sparkle-scale': Math.random() * 0.8 + 0.4, // 0.4 to 1.2 scale
                '--sparkle-duration': `${0.6 + Math.random() * 1}s`, // 0.6s to 1.6s (faster)
                '--sparkle-intensity': Math.random() * 0.5 + 0.5, // 0.5 to 1.0 brightness
              } as React.CSSProperties & {
                '--sparkle-scale': number;
                '--sparkle-duration': string;
                '--sparkle-intensity': number;
              }}
            />
          );
        })}
      </div>

      {/* Additional glitter particles with different behavior */}
      <div className={styles.glitterCloud}>
        {Array.from({ length: 15 }).map((_, i) => {
          // Create more random positioning for glitter
          const offsetX = (Math.random() - 0.5) * 100; // ±50px from center (increased from ±40px)
          const offsetY = (Math.random() - 0.5) * 80; // ±40px from center (increased from ±30px)

          return (
            <div
              key={`glitter-${animationKey}-${i}`}
              className={styles.glitter}
              style={{
                left: `calc(100% - 29px + ${offsetX}px)`,
                top: `calc(50% + ${offsetY}px)`,
                animationDelay: `${Math.random() * 2.5}s`,
                '--glitter-scale': Math.random() * 0.6 + 0.3, // 0.3 to 0.9 scale
                '--glitter-duration': `${1.0 + Math.random() * 1.5}s`, // 1.0s to 2.5s (faster)
              } as React.CSSProperties & {
                '--glitter-scale': number;
                '--glitter-duration': string;
              }}
            />
          );
        })}
      </div>

      {/* Enhanced pulsing energy waves */}
      <div className={styles.energyWaves}>
        <div key={`wave-${animationKey}-0`} className={styles.wave}></div>
        <div key={`wave-${animationKey}-1`} className={styles.wave} style={{ animationDelay: '0.2s' }}></div>
        <div key={`wave-${animationKey}-2`} className={styles.wave} style={{ animationDelay: '0.4s' }}></div>
        <div key={`wave-${animationKey}-3`} className={styles.wave} style={{ animationDelay: '0.6s' }}></div>
        <div key={`wave-${animationKey}-4`} className={styles.wave} style={{ animationDelay: '0.8s' }}></div>
      </div>
    </div>
  );
}
