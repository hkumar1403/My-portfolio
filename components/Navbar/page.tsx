import { ArrowRight } from "lucide-react";

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
              <span className="transition-colors duration-300 group-hover:text-white">
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
        <div className="flex flex-col text-sm">
          <a
            className="group relative flex items-center justify-center
               bg-white text-gray-700 px-20 py-3 text-2xl italic rounded-full
               transition-all duration-300
               hover:bg-black hover:text-white
               hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
               overflow-hidden"
          >
            {/* Text */}
            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
              Resume
            </span>

            <span className="absolute transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowRight size={26} />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
