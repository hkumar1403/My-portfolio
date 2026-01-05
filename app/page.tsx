import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import About from "@/components/About/page";
import Projects from "@/components/Projects/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
