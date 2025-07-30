import { useEffect, useRef, useState } from 'react';
import EffectsDemo from './EffectsDemo';
import styles from './HeroProgressBar.module.css';

type Props = {
  value: number;
  label?: string;
  effectType?: 'v1' | 'v2' | 'v3' | 'v4';
};

export default function HeroProgressBar({
  value,
  label,
  effectType = 'v4'
}: Props) {
  const [bounceIcon, setBounceIcon] = useState(false);
  const bounceTimeoutRef = useRef<number | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (bounceTimeoutRef.current) {
        clearTimeout(bounceTimeoutRef.current);
      }
    };
  }, []);

  const handleShakeIcon = () => {
    // Clear any existing timeout to prevent conflicts
    if (bounceTimeoutRef.current) {
      clearTimeout(bounceTimeoutRef.current);
    }

    // Force reset state first, then trigger celebration
    setBounceIcon(false);
    setTimeout(() => {
      setBounceIcon(true);
      // Reset after animation duration (3s for V4, shorter for others)
      const duration = effectType === 'v4' ? 3000 : 700;
      bounceTimeoutRef.current = setTimeout(() => {
        setBounceIcon(false);
        bounceTimeoutRef.current = null;
      }, duration);
    }, 10); // Small delay to ensure state reset is processed
  };

  return (
    <div className={styles.progressContainer}>
      {/* Effects layer for animations */}
      <div className={styles.effectsLayer}>
        <EffectsDemo effect={effectType} onShakeIcon={handleShakeIcon} />
      </div>

      <div className={styles.leftIcon}>
        <img src="/src/assets/progress-left-icon.png" alt="Left Icon" />
      </div>

      <div className={styles.progressBar}>
        <span className={styles.progressLabel}>{label || `${value}%`}</span>
        <progress className={styles.progress} value={value} max="100" />
      </div>

      <div className={`${styles.rightIcon} ${
        bounceIcon ? (effectType === 'v4' ? styles.iconCelebrate : styles.iconShake) : ''
      }`}>
        <img src="/src/assets/progress-right-icon.png" alt="Right Icon" />
      </div>
    </div>
  );
}
