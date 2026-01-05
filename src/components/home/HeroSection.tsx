import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Globe className="w-4 h-4 text-coral" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              India & Global Operations
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Global Software Distribution
            <br />
            <span className="text-coral-light">& IT Solutions Provider</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering businesses worldwide with enterprise-grade software solutions, 
            IT services, and strategic technology consultancy.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/services">
              <Button variant="accent" size="xl" className="group">
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Shield, label: "Enterprise Security", desc: "ISO Compliant" },
              { icon: Globe, label: "Global Reach", desc: "Worldwide Delivery" },
              { icon: Zap, label: "Fast Support", desc: "24/7 Assistance" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-4"
              >
                <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-coral-light" />
                </div>
                <div className="text-left">
                  <p className="text-primary-foreground font-medium text-sm">{item.label}</p>
                  <p className="text-primary-foreground/60 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
