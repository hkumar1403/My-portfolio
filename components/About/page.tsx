"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white px-8 md:px-16 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* LEFT COLUMN */}
        <div className="text-center md:text-left">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm tracking-widest text-gray-500 mb-6"
          >
            …&lt; ABOUT ME /&gt; …
          </motion.p>

          {/* Intro text */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-200 max-w-xl"
          >
            I’m a full-stack developer focused on building clean,
            scalable, and maintainable web applications with strong
            attention to detail and user experience.
          </motion.h3>

          {/* Skills */}
         <div className="mt-12 sm:mt-16 space-y-4 sm:space-y-6">
            <SkillCard
              title="Front-end"
              items="HTML / CSS / JavaScript / React JS / Next JS / Tailwind"
            />
            <SkillCard
              title="Back-end"
              items="Node.js / Express / MongoDB / REST APIs"
            />
            <SkillCard
              title="Tools & Workflow"
              items="Git / GitHub / Postman / npm"
            />
          </div>
        </div>

        {/* RIGHT COLUMN — AMBIENT DESIGN */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full border border-white/10" />
            <div className="absolute w-[650px] h-[650px] rounded-full border border-white/5" />
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]
                 backdrop-blur-sm"
    >
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{items}</p>
    </motion.div>
  );
}
