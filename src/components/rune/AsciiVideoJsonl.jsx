import "./ascii-video.css";
import { useEffect, useRef } from "react";
import { createAsciiPlayerJsonl } from "./asciiPlayerJsonl";

export default function AsciiVideoJsonl({
  framesPath,
  preferGzip = true,
}) {
  const preRef = useRef(null);

  useEffect(() => {
    if (!preRef.current) return;

    const player = createAsciiPlayerJsonl({
      container: preRef.current,
      framesPath,
      preferGzip,
    });

    player.start();

    return () => {
      player.stop();
    };
  }, [framesPath, preferGzip]);

  return (
    <pre
      ref={preRef}
      className="ascii-surface"
    />
  );
}
