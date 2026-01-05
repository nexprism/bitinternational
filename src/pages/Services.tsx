import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Package,
  Settings,
  Lightbulb,
  FileCode,
  Server,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Software Retail & Distribution",
    description:
      "Retail sale of non-customized, off-the-shelf software products through multiple channels.",
    features: [
      "Operating systems (Windows, Linux, etc.)",
      "Application software and utilities",
      "Physical store and online delivery",
      "Electronic download options",
      "Consumer and business software",
    ],
  },
  {
    icon: Package,
    title: "Wholesale & Licensing",
    description:
      "Wholesale distribution and licensing of standardized software to businesses worldwide.",
    features: [
      "Bulk licensing for enterprises",
      "Volume discounts for resellers",
      "Educational institution licensing",
      "Government procurement support",
      "Domestic and international supply",
    ],
  },
  {
    icon: Settings,
    title: "IT & Computer Services",
    description:
      "Comprehensive IT support services to keep your technology running smoothly.",
    features: [
      "Software installation & configuration",
      "System integration & upgrades",
      "Maintenance & troubleshooting",
      "Technical support services",
      "System management solutions",
    ],
  },
  {
    icon: Lightbulb,
    title: "IT Consultancy & Advisory",
    description:
      "Strategic technology guidance to help your business thrive in the digital age.",
    features: [
      "System analysis & IT planning",
      "Digital transformation strategy",
      "Cybersecurity assessment",
      "Data management solutions",
      "Technology optimization",
    ],
  },
  {
    icon: FileCode,
    title: "Intellectual Property & Platforms",
    description:
      "Development and licensing of proprietary software products and technologies.",
    features: [
      "Custom software development",
      "Platform and tool licensing",
      "Database solutions",
      "Methodologies & frameworks",
      "Trademark & copyright management",
    ],
  },
  {
    icon: Server,
    title: "Data Centers & Support Infrastructure",
    description:
      "Enterprise-grade infrastructure services for reliable operations.",
    features: [
      "Data center operations",
      "24/7 service desk support",
      "Online platform management",
      "Customer support systems",
      "IT infrastructure hosting",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive IT Solutions for Your Business
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From software distribution to strategic consultancy, we provide end-to-end 
              technology services designed to drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Title Side */}
                <div className="lg:w-1/3">
                  <div className="sticky top-28">
                    <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features Side */}
                <div className="lg:w-2/3">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h3 className="font-semibold text-foreground mb-6">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how our services can help transform your business.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl" className="group">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;