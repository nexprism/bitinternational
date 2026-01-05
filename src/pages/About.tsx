import Layout from "@/components/layout/Layout";
import { Target, Eye, Award, Globe, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Driving Digital Excellence Worldwide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BIT International is a global leader in software distribution and IT solutions, 
              empowering businesses with cutting-edge technology and expert services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BIT International is a comprehensive software distribution and IT solutions 
                  provider serving clients across India and globally. We specialize in retail 
                  and wholesale distribution of software products, IT services, and strategic 
                  technology consultancy.
                </p>
                <p>
                  Our extensive portfolio includes operating systems, application software, 
                  utilities, and enterprise solutions from leading technology vendors. We serve 
                  resellers, enterprises, educational institutions, and government organizations 
                  with tailored solutions that meet their unique requirements.
                </p>
                <p>
                  With a commitment to quality, compliance, and innovation, we help businesses 
                  navigate the complex technology landscape and achieve their digital transformation 
                  goals.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Globe, title: "Global Operations", desc: "Serving clients across India and international markets" },
                { icon: Users, title: "Expert Team", desc: "Skilled professionals with deep industry expertise" },
                { icon: Award, title: "Quality Commitment", desc: "ISO-compliant processes and best practices" },
                { icon: Lightbulb, title: "Innovation Focus", desc: "Staying ahead with emerging technologies" },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses worldwide with reliable software solutions and IT services 
                that drive efficiency, innovation, and growth. We are committed to delivering 
                exceptional value through quality products, expert support, and customer-centric 
                service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted global partner for software distribution and IT solutions, 
                recognized for our commitment to excellence, innovation, and customer success. 
                We aspire to shape the future of technology adoption across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Technology Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Software Distribution",
                desc: "Retail and wholesale distribution of operating systems, applications, and enterprise software from leading vendors.",
              },
              {
                title: "IT Services",
                desc: "Complete lifecycle support including installation, configuration, integration, maintenance, and technical support.",
              },
              {
                title: "Technology Consultancy",
                desc: "Strategic IT planning, digital transformation advisory, cybersecurity solutions, and data management expertise.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto gradient-hero rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-primary-foreground/80">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honest and ethical business practices" },
              { title: "Excellence", desc: "Commitment to quality in every service" },
              { title: "Innovation", desc: "Embracing new technologies and ideas" },
              { title: "Customer Focus", desc: "Putting client success first" },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{value.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;