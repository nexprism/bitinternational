import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Package,
  ShoppingBag,
  Settings,
  Lightbulb,
  FileCode,
  Server,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Software Retail & Distribution",
    description:
      "Retail sale of non-customized, off-the-shelf software including operating systems, applications, and utilities via multiple channels.",
  },
  {
    icon: Package,
    title: "Wholesale & Licensing",
    description:
      "Wholesale distribution and licensing of standardized software to resellers, enterprises, and institutions globally.",
  },
  {
    icon: Settings,
    title: "IT & Computer Services",
    description:
      "Complete IT support including installation, configuration, integration, upgrades, maintenance, and troubleshooting.",
  },
  {
    icon: Lightbulb,
    title: "IT Consultancy & Advisory",
    description:
      "Strategic IT planning, digital transformation, cybersecurity, and data management solutions for businesses.",
  },
  {
    icon: FileCode,
    title: "Intellectual Property",
    description:
      "Development and licensing of software products, platforms, tools, databases, and methodologies.",
  },
  {
    icon: Server,
    title: "Data Centers & Support",
    description:
      "Data center operations, service desks, online platforms, and comprehensive customer support systems.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From software distribution to strategic consultancy, we provide end-to-end
            technology services for businesses of all sizes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-coral/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-coral transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="default" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
