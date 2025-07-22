import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Database, 
  Layers, 
  Zap, 
  Globe,
  Palette,
  Settings,
  Users,
  GraduationCap
} from "lucide-react";

const Services = () => {
  const frontendSkills = [
    { name: "React.js / Next.js", icon: Code },
    { name: "JavaScript / TypeScript", icon: Zap },
    { name: "Redux Toolkit", icon: Layers },
    { name: "React Router", icon: Globe },
    { name: "TanStack Query", icon: Settings },
    { name: "Tailwind CSS / Bootstrap", icon: Palette }
  ];

  const backendSkills = [
    { name: "Java / Spring Boot", icon: Server },
    { name: "Spring Framework", icon: Settings },
    { name: "Maven / JDBC", icon: Database },
    { name: "MySQL / MongoDB", icon: Database },
    { name: "REST APIs", icon: Zap },
    { name: "GitHub", icon: Globe }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent hover:animate-bounce-subtle cursor-default">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Comprehensive development solutions from concept to deployment, 
            backed by modern technologies and industry best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Development */}
          <Card className="group fluid-hover fluid-glow animate-slide-left border-accent/20 interactive-element">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-float-medium transition-transform duration-300">
                <Code className="w-8 h-8 text-primary-foreground group-hover:animate-wiggle" />
              </div>
              <CardTitle className="text-2xl mb-2">Front-End Development</CardTitle>
              <CardDescription className="text-lg">
                Creating stunning, responsive user interfaces with modern frameworks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                 {frontendSkills.map((skill, index) => (
                   <div 
                     key={skill.name} 
                     className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent/10 fluid-hover fluid-scale group animate-slide-up"
                     style={{animationDelay: `${(index + 2) * 0.1}s`}}
                   >
                     <skill.icon className="w-5 h-5 text-accent group-hover:animate-bounce-subtle" />
                     <span className="font-medium group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                   </div>
                 ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Responsive Design</Badge>
                  <Badge variant="secondary">SEO Optimized</Badge>
                  <Badge variant="secondary">Performance Focused</Badge>
                  <Badge variant="secondary">Modern UI/UX</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="group fluid-hover fluid-glow animate-slide-right border-accent/20 interactive-element" style={{animationDelay: '0.2s'}}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-float-medium transition-transform duration-300">
                <Server className="w-8 h-8 text-primary-foreground group-hover:animate-wiggle" />
              </div>
              <CardTitle className="text-2xl mb-2">Back-End Development</CardTitle>
              <CardDescription className="text-lg">
                Robust, scalable server-side solutions with enterprise-grade architecture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                 {backendSkills.map((skill, index) => (
                   <div 
                     key={skill.name} 
                     className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent/10 fluid-hover fluid-scale group animate-slide-up"
                     style={{animationDelay: `${(index + 2) * 0.1}s`}}
                   >
                     <skill.icon className="w-5 h-5 text-accent group-hover:animate-bounce-subtle" />
                     <span className="font-medium group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                   </div>
                 ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Security First</Badge>
                  <Badge variant="secondary">Scalable APIs</Badge>
                  <Badge variant="secondary">Database Design</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mentorship Section */}
        <Card className="bg-gradient-primary text-primary-foreground animate-zoom-in fluid-hover fluid-scale interactive-element" style={{animationDelay: '0.4s'}}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:animate-heartbeat">
              <GraduationCap className="w-8 h-8 hover:animate-wiggle" />
            </div>
            <CardTitle className="text-2xl mb-2">Mentorship & Tutoring</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg">
              Guiding the next generation of developers through personalized learning experiences
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                PakistanCitizenAlliance (PCA)
              </h4>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>• Mentored students in freelancing bootcamp</li>
                <li>• Career advice and portfolio reviews</li>
                <li>• Technical guidance and skill development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Computer Science Tutoring
              </h4>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>• Programming fundamentals</li>
                <li>• Web development technologies</li>
                <li>• Portfolio building strategies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;