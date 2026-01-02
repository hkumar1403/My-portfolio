"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Astrel",
    description:
      "A performant spreadsheet-like web application inspired by Excel, focused on keyboard navigation and large data handling.",
    stack: "Next.js / Tailwind CSS / Node.js / MongoDB",
    link: "https://github.com/hkumar1403/Workbook",
  },
  {
    title: "Codexa",
    description:
      "A browser-based IDE for HTML, CSS, and JavaScript, built to explore how online code editors work under the hood.",
    stack: "Next.js / Tailwind CSS / Monaco Editor",
    link: "https://codexa-lemon.vercel.app/",
  },
  {
    title: "Nitrolube",
    description:
      "Built a clean, responsive website for an automotive lubricants brand using Next.js and Tailwind CSS, focusing on simplicity, clarity, and the client’s business requirements.",
    stack: "Next.js / Tailwind CSS",
    link: "https://www.nitrolube.co.in/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white px-6 sm:px-8 md:px-16 py-24 md:py-32"
    >
      <div
        className="
    max-w-7xl mx-auto
    flex flex-col
    items-center md:items-start
    text-center md:text-left
  "
      >
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-gray-500 mb-6"
        >
          …&lt; PROJECTS /&gt; …
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-16 max-w-xl"
        >
          Selected work
        </motion.h2>

        {/* Projects list */}
        <div className="mt-16 w-full max-w-5xl space-y-12 md:space-y-16">
          {projects.map((project, i) => (
            <ProjectRow key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  title,
  description,
  stack,
  link,
}: {
  title: string;
  description: string;
  stack: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
  group block
  border-t border-white/10
  pt-10
  rounded-xl
  transition-colors
  hover:bg-white/2
"
    >
      <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-6 md:gap-8">
        <div>
          <h3
            className="text-3xl md:text-4xl font-medium
                       transition-colors duration-300
                       group-hover:text-white"
          >
            {title}
          </h3>

          <p className="mt-4 max-w-2xl text-gray-400 text-base md:text-lg">
            {description}
          </p>

          <p className="mt-6 text-sm tracking-wide text-gray-500">{stack}</p>
        </div>

        <div
          className="
    mt-2
    hidden md:block
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100
    group-hover:translate-y-0
  "
        >
          <ArrowUpRight className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </motion.a>
  );
}
