import { useState } from 'react';
import EffectsControls from './EffectsControls';
import HeroProgressBar from './HeroProgressBar';
import styles from './HeroSection.module.css';

type EffectType = 'v1' | 'v2' | 'v3' | 'v4';

export default function HeroSection() {
  const [currentEffect, setCurrentEffect] = useState<EffectType>('v4');

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.background}></div>
        <div className={styles.mainContainer}>
          <img src="/src/assets/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.iconsGrid}>
            {/* First column icons */}
            <div className={styles.gridCell} style={{ gridColumn: 1, gridRow: 1 }}>
              <div className={styles.iconWrapper}>
                <img src="/src/assets/icons/Desktop Offers Icons 414 320-1.png" alt="Icon 1" className={styles.gridIcon} />
              </div>
            </div>
            <div className={styles.gridCell} style={{ gridColumn: 1, gridRow: 2 }}>
              <div className={styles.iconWrapper}>
                <img src="/src/assets/icons/Desktop Offers Icons 414 320-2.png" alt="Icon 2" className={styles.gridIcon} />
              </div>
            </div>
            <div className={styles.gridCell} style={{ gridColumn: 1, gridRow: 3 }}>
              <div className={styles.iconWrapper}>
                <img src="/src/assets/icons/Desktop Offers Icons 414 320-3.png" alt="Icon 3" className={styles.gridIcon} />
              </div>
            </div>

            {/* Center column with progress bar */}
            <div className={styles.gridCell} style={{ gridColumn: 2, gridRow: 1 }}>
              <HeroProgressBar
                value={75}
                label="MEGA OFFER"
                effectType={currentEffect}
              />
            </div>
            <div className={styles.gridCell} style={{ gridColumn: 2, gridRow: 2 }}></div>
            <div className={styles.gridCell} style={{ gridColumn: 2, gridRow: 3 }}></div>

            {/* Third column icons */}
            <div className={styles.gridCell} style={{ gridColumn: 3, gridRow: 1 }}>
              <div className={styles.iconWrapper}>
                <img src="/src/assets/icons/Desktop Offers Icons 414 320-4.png" alt="Icon 4" className={styles.gridIcon} />
              </div>
            </div>
            <div className={styles.gridCell} style={{ gridColumn: 3, gridRow: 2 }}>
              <div className={styles.iconWrapper}>
                <img src="/src/assets/icons/Desktop Offers Icons 414 320.png" alt="Icon 5" className={styles.gridIcon} />
              </div>
            </div>
            <div className={styles.gridCell} style={{ gridColumn: 3, gridRow: 3 }}>
              <div className={styles.iconWrapper}>
                <img src="/src/assets/icons/Desktop Offers Icons 414 320-1.png" alt="Icon 6" className={styles.gridIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EffectsControls
        currentEffect={currentEffect}
        onEffectChange={setCurrentEffect}
      />
    </>
  );
}
