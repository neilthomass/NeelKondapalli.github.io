import './InvertModeToggle.css';

interface InvertModeToggleProps {
  invertMode: number;
  onToggle: () => void;
}

const InvertModeToggle = ({ invertMode, onToggle }: InvertModeToggleProps) => {
  const getModeDisplay = () => {
    switch (invertMode) {
      case 0:
        return `┌─────┐
│  ═  │
└─────┘`;
      case 1:
        return `┌─────┐
│ ◐ → │
└─────┘`;
      case 2:
        return `┌─────┐
│ ◑ → │
└─────┘`;
      default:
        return `┌─────┐
│  ?  │
└─────┘`;
    }
  };

  const getModeLabel = () => {
    switch (invertMode) {
      case 0:
        return 'No Inversion';
      case 1:
        return 'Normal → Light Invert';
      case 2:
        return 'Dark Invert → Normal';
      default:
        return 'Unknown Mode';
    }
  };

  return (
    <button
      className="invert-toggle"
      onClick={onToggle}
      aria-label="Toggle invert mode"
      title={getModeLabel()}
    >
      <pre className="invert-art">
{getModeDisplay()}
      </pre>
      {/* <span className="invert-label">{getModeLabel()}</span> */}
    </button>
  );
};

export default InvertModeToggle;
