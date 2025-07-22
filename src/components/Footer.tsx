import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp,
  Code,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Frontend Development",
    "Backend Development", 
    "Full-Stack Solutions",
    "Technical Mentoring",
    "Code Reviews"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-200 text-secondary-foreground\">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Alif
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium development services crafting modern web applications 
              with cutting-edge technologies and industry best practices.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/20">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong><br />
                ali.husnain@alif.dev
              </p>
              <p>
                <strong className="text-foreground">Location:</strong><br />
                Pakistan (Remote Worldwide)
              </p>
              <p>
                <strong className="text-foreground">Availability:</strong><br />
                Monday - Friday, 9AM - 6PM PKT
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-border/50" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Alif. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Ali Husnain</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Built with React, Next.js & Spring Boot
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="hover:bg-accent/20 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;