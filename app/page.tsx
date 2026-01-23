import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Companies from "./components/Companies/Companies";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Companies />
      <Testimonials />
      <Contact />
    </>
  );
}
