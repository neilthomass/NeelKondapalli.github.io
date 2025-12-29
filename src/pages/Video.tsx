// @ts-nocheck
import './Video.css';
import AsciiVideo from '../components/rune/AsciiVideo';

export default function VideoPage() {
  return (
    <div className="video-page">
      <div className="video-container">
        <div className="ascii-scale">
          <AsciiVideo framesPath="/saturn" />
        </div>
      </div>
      
    </div>
  );
}
