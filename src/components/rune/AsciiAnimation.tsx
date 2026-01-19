import { useEffect, useRef, useState } from 'react';
import pako from 'pako';
import './AsciiAnimation.css';

interface AsciiAnimationProps {
  fps?: number;
}

type FramesMap = { [key: string]: string[] };

const AsciiAnimation = ({ fps = 24 }: AsciiAnimationProps) => {
  const containerRef = useRef<HTMLPreElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let frames: string[][] = [];
    let frameIndex = 0;
    let running = true;
    let rafId: number | null = null;
    let lastTime = 0;
    let accumulator = 0;
    const frameTime = 1000 / fps;

    // DOM elements cache for diff-based updates
    let lineElements: HTMLDivElement[] = [];

    const loadFrames = async () => {
      const response = await fetch('/frames.json.gz');
      const encoding = response.headers.get('content-encoding');

      let data: FramesMap;
      if (encoding === 'gzip') {
        // Browser auto-decompressed
        data = await response.json();
      } else {
        // Manual decompress
        const buffer = await response.arrayBuffer();
        const decompressed = pako.ungzip(new Uint8Array(buffer));
        const text = new TextDecoder().decode(decompressed);
        data = JSON.parse(text);
      }

      frames = Object.keys(data).sort().map(key => data[key]);

      // Initialize DOM structure once
      container.innerHTML = '';
      lineElements = [];

      if (frames.length > 0) {
        frames[0].forEach((line) => {
          const div = document.createElement('div');
          div.innerHTML = line;
          container.appendChild(div);
          lineElements.push(div);
        });
      }

      setIsLoading(false);
    };

    const renderFrame = () => {
      const currentLines = frames[frameIndex] || [];

      // Diff-based update: only update lines that changed
      currentLines.forEach((line, i) => {
        if (lineElements[i] && lineElements[i].innerHTML !== line) {
          lineElements[i].innerHTML = line;
        }
      });

      frameIndex = (frameIndex + 1) % frames.length;
    };

    const tick = (now: number) => {
      if (!running) return;

      if (!lastTime) lastTime = now;
      const delta = now - lastTime;
      lastTime = now;

      accumulator += delta;

      if (accumulator >= frameTime) {
        renderFrame();
        accumulator = 0;
      }

      rafId = requestAnimationFrame(tick);
    };

    loadFrames().then(() => {
      rafId = requestAnimationFrame(tick);
    });

    // Pause on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        running = true;
        lastTime = 0;
        accumulator = 0;
        rafId = requestAnimationFrame(tick);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fps]);

  return (
    <pre
      ref={containerRef}
      className="ascii-surface"
      style={{ opacity: isLoading ? 0 : 1 }}
    />
  );
};

export default AsciiAnimation;
