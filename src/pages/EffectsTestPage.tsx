import HeroProgressBar from '../components/HeroProgressBar';
import './EffectsTestPage.css';

export default function EffectsTestPage() {
  return (
    <div className="effects-test-page">
      <h1>Icon Effects Test</h1>
      <div className="test-container">
        <HeroProgressBar
          value={75}
          label="MEGA OFFER"
          leftIcon="/src/assets/icons/Desktop Offers Icons 414 320-1.png"
          rightIcon="/src/assets/icons/Desktop Offers Icons 414 320-4.png"
        />
      </div>
      <div className="instructions">
        <p>Use the buttons above the right icon to switch between effect versions:</p>
        <ul>
          <li><strong>None:</strong> No effects</li>
          <li><strong>V1:</strong> Procedural particle system</li>
          <li><strong>V2:</strong> Positioned sparkles (matches Figma)</li>
          <li><strong>V3:</strong> Dynamic effects with rotating beams</li>
        </ul>
      </div>
    </div>
  );
}
