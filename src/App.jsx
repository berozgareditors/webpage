import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import OurWorks from "./components/OurWorks.jsx";
import WhyTrust from "./components/WhyTrust.jsx";
import Testimonials from "./components/Testimonials.jsx";
import HelloSection from "./components/HelloSection.jsx";
import Clients from "./components/Clients.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoWeAre />
        <OurWorks />
        <WhyTrust />
        <Testimonials />
        <HelloSection />
        <Clients />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
