import {
  Building2,
  GraduationCap,
  Landmark,
  Heart,
  ShoppingCart,
  Factory,
  Plane,
  Tv,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Enterprise" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Government" },
  { icon: Heart, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Travel" },
  { icon: Tv, name: "Media" },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empowering Diverse Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            Our software solutions and IT services cater to a wide range of industries worldwide.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-coral/30 hover:shadow-card"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3 group-hover:bg-coral/10 transition-colors">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-coral transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
