import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Lightbulb, 
  Target, 
  Heart,
  Award,
  Zap
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Committed to writing clean, maintainable code using industry best practices and modern development standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering measurable outcomes that align with business objectives and exceed client expectations."
    },
    {
      icon: Heart,
      title: "Passion for Teaching",
      description: "Dedicated to sharing knowledge and mentoring aspiring developers to help them achieve their career goals."
    }
  ];

  const achievements = [
    "Successfully mentored 50+ students in web development",
    "Delivered 20+ production-ready applications",
    "Expert in React, Next.js, and Spring Boot ecosystems",
    "Proven track record in full-stack development",
    "Strong background in database design and optimization",
    "Experience with modern DevOps and deployment practices"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent hover:animate-bounce-subtle cursor-default">
            About Ali Husnain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            A passionate full-stack developer and mentor dedicated to creating 
            exceptional digital experiences and empowering the next generation of developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <div className="animate-slide-left fluid-hover">
            <div className="bg-gradient-primary p-1 rounded-2xl mb-8 hover:shadow-glow transition-all duration-500">
              <div className="bg-background rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-accent animate-bounce-subtle" />
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a dedicated full-stack developer with expertise in modern web technologies, 
                    I've spent years crafting digital solutions that make a real impact. My journey 
                    began with a curiosity for how things work and evolved into a passion for building 
                    applications that solve real-world problems.
                  </p>
                  <p>
                    Specializing in React, Next.js, and Spring Boot, I bridge the gap between 
                    creative design and robust functionality. My experience spans from responsive 
                    front-end interfaces to scalable backend architectures, always with a focus 
                    on performance, security, and user experience.
                  </p>
                  <p>
                    Beyond coding, I'm passionate about education and mentorship. Through my work 
                    with PakistanCitizenAlliance and private tutoring, I've helped numerous students 
                    launch their careers in web development, providing them with both technical 
                    skills and industry insights.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/ali-husnain-790929252/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg fluid-scale hover:animate-pulse-glow transition-all duration-500 text-sm font-medium"
                    >
                      LinkedIn Profile
                    </a>
                    <a 
                      href="https://github.com/Alihusnain1489" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-accent/20 text-accent rounded-lg fluid-scale hover:bg-accent/5 hover:border-accent transition-all duration-500 text-sm font-medium"
                    >
                      GitHub
                    </a>
                    <button className="px-4 py-2 border border-accent/20 text-accent rounded-lg fluid-scale hover:bg-accent/5 hover:border-accent transition-all duration-500 text-sm font-medium">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-slide-right" style={{animationDelay: '0.2s'}}>
            <Card className="border-accent/20 fluid-hover fluid-glow interactive-element">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-accent animate-bounce-subtle" />
                  Key Achievements
                </h3>
                <div className="space-y-3">
                   {achievements.map((achievement, index) => (
                     <div 
                       key={index}
                       className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 fluid-hover animate-slide-up"
                       style={{animationDelay: `${(index + 3) * 0.1}s`}}
                     >
                       <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse-glow"></div>
                       <span className="text-muted-foreground hover:text-foreground transition-colors duration-300">{achievement}</span>
                     </div>
                   ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-zoom-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-center mb-12 hover:animate-bounce-subtle cursor-default">Core Values & Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group text-center fluid-hover fluid-glow border-muted/50 animate-slide-up interactive-element"
                style={{animationDelay: `${(index + 1) * 0.15}s`}}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-float-medium transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground group-hover:animate-wiggle" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold mb-8 hover:animate-bounce-subtle cursor-default">Favorite Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "React.js", "Next.js", "TypeScript", "Spring Boot", "Java", 
              "Tailwind CSS", "Redux Toolkit", "MySQL", "MongoDB", "REST APIs",
              "TanStack Query", "Maven", "GitHub", "Vercel", "Bootstrap"
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-accent/20 fluid-scale animate-zoom-in"
                style={{animationDelay: `${0.8 + index * 0.05}s`}}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;