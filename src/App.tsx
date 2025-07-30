import styles from './App.module.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.app}>
        <main className={styles.main}>
          <HeroSection />
        </main>
      </div>
    </div>
  );
}

export default App;
