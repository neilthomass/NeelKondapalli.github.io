import AsciiAnimation from '../components/rune/AsciiAnimation';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';

const Horse = () => {
  return (
    <div className="home" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ThemeToggle />
      <div className="video-container">
        <AsciiAnimation fps={24} />
      </div>
    </div>
  );
};

export default Horse;
