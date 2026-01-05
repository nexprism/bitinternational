import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, TechVision Solutions",
    content:
      "BIT International has been our trusted partner for software licensing for over 5 years. Their expertise and prompt service have helped us scale efficiently.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "IT Director, GlobalTech Corp",
    content:
      "The IT consultancy services provided by BIT International transformed our digital infrastructure. Highly recommend their strategic approach.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, DataFlow Inc",
    content:
      "Outstanding support for our data center needs. Their team's technical expertise and 24/7 availability make them an invaluable partner.",
    rating: 5,
  },
];

const clientLogos = [
  { name: "TechVision", initial: "TV" },
  { name: "GlobalTech", initial: "GT" },
  { name: "DataFlow", initial: "DF" },
  { name: "CloudSys", initial: "CS" },
  { name: "NetPro", initial: "NP" },
  { name: "InnoSoft", initial: "IS" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries for reliable software solutions and IT services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="w-10 h-10 text-coral/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-card border border-border rounded-xl flex items-center justify-center hover:border-coral/50 transition-colors duration-300"
              >
                <span className="text-xl font-bold text-primary">{logo.initial}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
