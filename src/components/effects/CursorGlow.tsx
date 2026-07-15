"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on desktop
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.12);
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.12);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x - 256}px, ${currentPos.current.y - 256}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Glow orb */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[512px] h-[512px] pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.03) 30%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Ripple on click */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9998] animate-ripple"
          style={{
            left: mousePos.current.x - 20,
            top: mousePos.current.y - 20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        />
      )}
    </>
  );
}
