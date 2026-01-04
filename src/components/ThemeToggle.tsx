import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <pre className="toggle-art">
{theme === 'light' ? `┌───┐
│ ☀ │
└───┘` : `┌───┐
│ ☾ │
└───┘`}
      </pre>
    </button>
  );
};

export default ThemeToggle;
