"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-transparent text-white px-8 md:px-16 py-32"
    >
      <div
        className="
    max-w-7xl mx-auto
    grid grid-cols-1 lg:grid-cols-2
    gap-16 lg:gap-24
    text-center md:text-left
    items-center md:items-start
  "
      >
        {/* LEFT — Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            Let’s talk <br />
            about your idea.
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-md mx-auto md:mx-0">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to build something meaningful.
          </p>
        </motion.div>

        {/* RIGHT — Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 items-center md:items-stretch"
        >
          <ContactRow
            icon={<Mail size={18} />}
            label="Email"
            value="kumarhemant1403@gmail.com"
            href="mailto:kumarhemant1403@gmail.com"
          />

          <ContactRow
            icon={<Github size={18} />}
            label="GitHub"
            value="github.com/hkumar1403"
            href="https://github.com/hkumar1403"
          />

          <ContactRow
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            value="https://www.linkedin.com/in/hemantsoftwaredev/"
            href="https://www.linkedin.com/in/hemantsoftwaredev/"
          />

          <ContactRow
            icon={<Instagram size={18} />}
            label="Instagram"
            value="@kumarhemant11"
            href="https://www.instagram.com/kumarhemant11"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
  group flex flex-col md:flex-row
  items-center md:items-center
  justify-center md:justify-between
  gap-4 md:gap-0
  border-b border-white/10 py-4
  transition-all duration-300
  hover:border-white/30
"
    >
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
        <span className="text-gray-400 group-hover:text-white transition-colors">
          {icon}
        </span>

        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-base text-gray-300 group-hover:text-white transition-colors">
            {value}
          </p>
        </div>
      </div>

      <ArrowUpRight
        className="hidden md:block w-5 h-5 text-gray-500
             opacity-0 translate-y-1
             transition-all duration-300
             group-hover:opacity-100
             group-hover:translate-y-0
             group-hover:text-white"
      />
    </a>
  );
}
