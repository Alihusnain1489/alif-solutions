import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="animate-fluid-enter">
        <Hero />
      </div>
      <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
        <Services />
      </div>
      <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
        <Projects />
      </div>
      <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
        <About />
      </div>
      <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
        <Contact />
      </div>
      <div className="animate-slide-up" style={{animationDelay: '1s'}}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
