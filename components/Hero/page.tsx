"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Github, Linkedin, Send, Instagram } from "lucide-react";
import SocialLink from "@/components/SocialLink/page";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Developer.", "Engineer.", "Problem Solver."],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-8 md:px-16 pt-24 bg-transparent text-white overflow-hidden">
      {/* ===== LEFT CONTENT ===== */}
      <div
        className="
    relative z-10
    w-full max-w-6xl mx-auto
    flex flex-col
    items-center md:items-start
    text-center md:text-left
  "
      >
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[6rem] font-light italic leading-tight">
          Full-stack
        </h1>

        <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[6rem] font-bold leading-tight">
          <span ref={typedRef} />
        </h2>

        <p className="mt-8 max-w-xl text-gray-400 text-base md:text-lg">
          My goal is to write maintainable, clean and understandable code so
          that building software stays enjoyable.
        </p>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          <SocialLink
            href="https://github.com/hkumar1403"
            icon={<Github size={16} />}
            label="Github"
          />
          <SocialLink
            href="https://linkedin.com/in/hkumar1403"
            icon={<Linkedin size={16} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://t.me/Hkumar93"
            icon={<Send size={16} />}
            label="Telegram"
          />
          <SocialLink
            href="https://www.instagram.com/kumarhemant11"
            icon={<Instagram size={16} />}
            label="Instagram"
          />
        </div>
      </div>

      {/* ===== RIGHT AMBIENT ORB ===== */}
      <div className="pointer-events-none absolute right-[-5%] top-1/2 z-0 hidden md:block">
        <div
          className="w-150 h-150 rounded-full
             bg-linear-to-br from-indigo-500/25 via-purple-500/15 to-transparent
             blur-[140px]"
        />
      </div>
      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-8 md:left-16 z-10 hidden md:flex items-center gap-3">
        <span className="text-xs tracking-widest text-gray-500">SCROLL</span>

        <div className="relative w-px h-10 bg-white/20 overflow-hidden">
          <span className="absolute top-0 left-0 w-px h-4 bg-white animate-scrollLine" />
        </div>
      </div>
    </section>
  );
}
