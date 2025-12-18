import { ArrowRight } from "lucide-react";
import Resume from "../Resume/page";

export default function Navbar() {
  return (
    <nav className="w-full px-12 py-6 bg-black text-white font-sans-serif">
      <div className="flex items-start justify-between">
        {/* LEFT: Name */}
        <div className="text-2xl leading-tight">
          <span className="block">Hemant</span>
          <span className="block opacity-80">Kumar</span>
        </div>

        {/* CENTER: Nav links */}
        <ul className="flex gap-16 text-sm tracking-wide text-gray-400">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="transition-colors duration-300 group-hover:text-white hover:underline">
                {item}
              </span>

              <span
                className="absolute left-1/2 -bottom-2 w-1.5 h-1.5
                   -translate-x-1/2 rounded-full
                   bg-white/70 blur
                   opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>

        {/* RIGHT: Resume */}
        <div className="flex flex-col text-lg italic text-gray-700">
         <Resume/>
        </div>
      </div>
    </nav>
  );
}
