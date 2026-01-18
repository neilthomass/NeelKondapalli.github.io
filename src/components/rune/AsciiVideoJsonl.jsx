import "./ascii-video.css";
import { useEffect, useRef, useState } from "react";
import { createAsciiPlayerJsonl } from "./asciiPlayerJsonl";

export default function AsciiVideoJsonl({
  framesPath,
  preferGzip = true,
  invertMode = 0,
}) {
  const preRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!preRef.current) return;

    const player = createAsciiPlayerJsonl({
      container: preRef.current,
      framesPath,
      preferGzip,
      onReady: () => {
        setIsReady(true);
      }
    });

    player.start();

    return () => {
      player.stop();
    };
  }, [framesPath, preferGzip]);


  const getInversionClass = () => {
    if (invertMode === 1) return "ascii-invert-on-light";
    if (invertMode === 2) return "ascii-invert-on-dark";
    return "";
  };

  return (
    <pre
      ref={preRef}
      className={`ascii-surface ${getInversionClass()}`}
      style={{ opacity: isReady ? 1 : 0 }}
    />
  );
}
