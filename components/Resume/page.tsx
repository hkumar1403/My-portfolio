import { BorderBeam } from "@/components/lightswind/border-beam";
import { a } from "framer-motion/client";
export default function Resume() {
  return (
    <a href="/resume.pdf" target="_blank">
      <div className="relative p-1 rounded-full overflow-hidden cursor-pointer">
        <BorderBeam
          colorFrom="#7400ff"
          colorTo="#9b41ff"
          size={50}
          duration={6}
          borderThickness={2}
          glowIntensity={3}
        />
        <div className="relative bg-transparent p-4 z-10 italic px-10 rounded-full text-white hover:bg-white hover:text-black py-2 glowing-btn flex justify-center align-center">
          Resume
        </div>
      </div>
    </a>
  );
}
