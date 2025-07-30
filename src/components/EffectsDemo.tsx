import styles from './EffectsDemo.module.css';
import IconEffectsV1 from './IconEffectsV1';
import IconEffectsV2 from './IconEffectsV2';
import IconEffectsV3 from './IconEffectsV3';
import IconEffectsV4 from './IconEffectsV4';

type EffectType = 'v1' | 'v2' | 'v3' | 'v4';

type Props = {
  className?: string;
  effect?: EffectType;
  onShakeIcon?: () => void;
};

export default function EffectsDemo({ className, effect = 'v4', onShakeIcon }: Props) {
  const renderEffect = () => {
    switch (effect) {
      case 'v1':
        return <IconEffectsV1 onShakeIcon={onShakeIcon} />;
      case 'v2':
        return <IconEffectsV2 onShakeIcon={onShakeIcon} />;
      case 'v3':
        return <IconEffectsV3 onShakeIcon={onShakeIcon} />;
      case 'v4':
        return <IconEffectsV4 onShakeIcon={onShakeIcon} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.demoContainer} ${className || ''}`}>
      {renderEffect()}
    </div>
  );
}
