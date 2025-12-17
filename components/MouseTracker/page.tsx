"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

export default function MouseTracker() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const idRef = useRef(0);


  // Track mouse position
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Normal smoke trail
      setParticles((prev) => [
        ...prev.slice(-25),
        {
          id: idRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.3,
          vy: Math.random() * -0.4,
          size: Math.random() * 20 + 20,
          opacity: 0.25,
        },
      ]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Smoke burst on click
  useEffect(() => {
    const handleClick = () => {
      if (window.innerWidth < 768) return;
      const burstParticles: Particle[] = [];

      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;

        burstParticles.push({
          id: idRef.current++,
          x: mouse.current.x,
          y: mouse.current.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 25 + 25,
          opacity: 0.45,
        });
      }

      setParticles((prev) => [...prev, ...burstParticles]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.96, // air resistance
            vy: p.vy * 0.96 - 0.02, // slight upward lift
            size: p.size + 1.2,
            opacity: p.opacity - 0.02,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Smoke particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none fixed z-[9998]
                     rounded-full bg-indigo-400
 blur-3xl"
          style={{
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `translate(${p.x - p.size / 2}px, ${
              p.y - p.size / 2
            }px)`,
          }}
        />
      ))}

      {/* Core cursor */}
      <div
        className="pointer-events-none fixed z-[9999]
                   w-3 h-3 rounded-full bg-white
                   mix-blend-difference"
        style={{
          transform: `translate(${mouse.current.x - 6}px, ${
            mouse.current.y - 6
          }px)`,
        }}
      />
    </>
  );
}
