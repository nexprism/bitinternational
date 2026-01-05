import { CheckCircle, Globe, Shield, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across India and internationally with seamless delivery and support.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Rigorous compliance with industry standards and data protection regulations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with deep expertise across diverse technology domains.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Commitment to delivering excellence in every software and service we provide.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance to keep your operations running smoothly.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "Trusted by enterprises, institutions, and resellers for reliable IT solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Technology Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At BIT International, we combine global expertise with local understanding 
              to deliver software solutions and IT services that drive business growth. 
              Our commitment to quality, innovation, and customer success sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Clients" },
                { value: "50+", label: "Countries" },
                { value: "99%", label: "Uptime" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 text-center shadow-card"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-coral" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
