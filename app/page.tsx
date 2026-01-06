import Hero from "@/components/Hero/page";
import About from "@/components/About/page";
import Projects from "@/components/Projects/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import MorphingNavigation from "@/components/lightswind/navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <MorphingNavigation
        links={[
          { id: "Home", label: "Home", href: "#home" },
          { id: "About", label: "About", href: "#about" },
          { id: "Projects", label: "Projects", href: "#projects" },
          { id: "Contact", label: "Contact", href: "#contact" },
        ]}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
