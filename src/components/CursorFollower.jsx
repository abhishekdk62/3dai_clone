// src/components/CursorFollower.jsx
import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const dotRef = useRef(null);
  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointermove", handleMove);

    let frameId;
    const speed = 0.15; // lower = more lag

    const animate = () => {
      const { x: tx, y: ty } = targetPos.current;
      const { x: cx, y: cy } = currentPos.current;

      const nx = cx + (tx - cx) * speed;
      const ny = cy + (ty - cy) * speed;
      currentPos.current = { x: nx, y: ny };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* soft glow */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[80]"
        style={{ transform: "translate3d(-9999px,-9999px,0)" }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="h-16 w-16 rounded-full bg-cyan-400/15 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CursorFollower;
