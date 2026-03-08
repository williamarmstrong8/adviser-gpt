import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ paddingTop: 88 }}>
      <Navbar />
      <Hero />
      <ValueProps />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
