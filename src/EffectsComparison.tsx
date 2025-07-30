import IconEffectsV8 from './components/IconEffectsV8';
import IconEffectsV9 from './components/IconEffectsV9';

export default function EffectsComparison() {
  const handleShake = () => {
    console.log('Icon shake triggered');
  };

  return (
    <div style={{
      display: 'flex',
      gap: '100px',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      padding: '50px'
    }}>
      <div style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        backgroundColor: '#333',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: 'white', fontSize: '12px', position: 'absolute', top: '-30px' }}>
          V8 - Explosive Energy
        </div>
        <div style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#666',
          borderRadius: '8px',
          position: 'relative'
        }}>
          🎁
          <IconEffectsV8 onShakeIcon={handleShake} />
        </div>
      </div>

      <div style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        backgroundColor: '#333',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: 'white', fontSize: '12px', position: 'absolute', top: '-30px' }}>
          V9 - Gift Celebration
        </div>
        <div style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#666',
          borderRadius: '8px',
          position: 'relative'
        }}>
          🎁
          <IconEffectsV9 onShakeIcon={handleShake} />
        </div>
      </div>
    </div>
  );
}
