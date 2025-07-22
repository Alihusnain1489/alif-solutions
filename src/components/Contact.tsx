import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mr.alihusnain11@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0326-1052244",
      description: "Available Mon-Fri 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      description: "Remote work worldwide"
    }
  ];

  const services = [
    { name: "Web Development", available: true },
    { name: "Full-Stack Solutions", available: true },
    { name: "Technical Mentoring", available: true },
    { name: "Code Reviews", available: true },
    { name: "Project Consultation", available: true },
    { name: "Emergency Support", available: false }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent hover:animate-bounce-subtle cursor-default">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Ready to bring your ideas to life? Get in touch to discuss your project 
            or explore mentorship opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="group fluid-hover fluid-glow animate-slide-left border-accent/20 interactive-element"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce-subtle transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground group-hover:animate-wiggle" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="font-medium text-accent mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Availability Status */}
            <Card className="border-accent/20 animate-slide-left fluid-hover interactive-element" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-accent animate-bounce-subtle" />
                  Service Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={service.name} className="flex items-center justify-between">
                      <span className="text-sm">{service.name}</span>
                      <div className="flex items-center gap-2">
                        {service.available ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-green-600 font-medium">Available</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span className="text-xs text-orange-600 font-medium">Limited</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-accent/20 fluid-hover fluid-glow animate-slide-right interactive-element" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-accent animate-bounce-subtle" />
                  Start a Conversation
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select 
                        id="service"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm transition-all duration-300 focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullstack">Full-Stack Solution</option>
                        <option value="mentoring">Technical Mentoring</option>
                        <option value="consultation">Project Consultation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <select 
                        id="timeline"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm transition-all duration-300 focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1month">1 month</option>
                        <option value="2-3months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={6}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="lg" 
                      className="group flex-1 fluid-scale hover:animate-pulse-glow transition-all duration-500"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="group fluid-scale hover:border-accent hover:text-accent transition-all duration-500"
                    >
                      <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:animate-bounce-subtle transition-all duration-300" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Promise */}
        <div className="mt-12 text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="bg-gradient-primary/5 border border-accent/20 rounded-lg p-6 max-w-2xl mx-auto fluid-hover fluid-glow">
            <h3 className="font-semibold text-lg mb-2 text-accent hover:animate-wiggle cursor-default">Response Commitment</h3>
            <p className="text-muted-foreground">
              I personally review every message and strive to respond within 24 hours during business days. 
              For urgent matters, please indicate in your message and I'll prioritize accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;