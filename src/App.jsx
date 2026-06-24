import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Process from "./components/Process";
import Calculator from "./components/Calculator";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <Listings />
      <Process />
      <Calculator />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
