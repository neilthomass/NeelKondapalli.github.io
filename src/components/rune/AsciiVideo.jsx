import { useEffect, useRef } from "react";
import { createAsciiPlayer } from "./asciiPlayer";

export default function AsciiVideo({
  framesPath,
}) {
  const preRef = useRef(null);

  useEffect(() => {
    if (!preRef.current) return;

    const player = createAsciiPlayer({
      container: preRef.current,
      framesPath,
    });
  
    player.start();

    return () => {
      player.stop();
    };
  }, [framesPath]);

  return (
    <pre
      ref={preRef}
      style={{
        fontFamily: "ui-monospace, monospace",
        lineHeight: "1.1",
        whiteSpace: "pre",
      }}
    />
  );
}
