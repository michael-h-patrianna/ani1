import styles from './EffectsControls.module.css';

type EffectType = 'v1' | 'v2' | 'v3' | 'v4';

type Props = {
  onEffectChange: (effect: EffectType) => void;
  currentEffect: EffectType;
};

export default function EffectsControls({ onEffectChange, currentEffect }: Props) {
  return (
    <div className={styles.controlsContainer}>
      <h3 className={styles.title}>Icon Effects Demo</h3>
      <div className={styles.controls}>
        <button
          className={currentEffect === 'v1' ? styles.active : ''}
          onClick={() => onEffectChange('v1')}
        >
          V1
        </button>
        <button
          className={currentEffect === 'v2' ? styles.active : ''}
          onClick={() => onEffectChange('v2')}
        >
          V2
        </button>
        <button
          className={currentEffect === 'v3' ? styles.active : ''}
          onClick={() => onEffectChange('v3')}
        >
          V3
        </button>
        <button
          className={currentEffect === 'v4' ? styles.active : ''}
          onClick={() => onEffectChange('v4')}
        >
          V4
        </button>
      </div>

    </div>
  );
}
