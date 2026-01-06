import Layout from "@/components/layout/Layout";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with 20+ years in IT industry",
      linkedin: "#",
      email: "john@bit-international.net",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      description: "Expert in software architecture and cloud solutions",
      linkedin: "#",
      email: "sarah@bit-international.net",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Streamlining global software distribution",
      linkedin: "#",
      email: "michael@bit-international.net",
    },
    {
      name: "Emily Davis",
      role: "Director of Sales",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Building strong client relationships worldwide",
      linkedin: "#",
      email: "emily@bit-international.net",
    },
    {
      name: "David Wilson",
      role: "Senior Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack developer with expertise in enterprise solutions",
      linkedin: "#",
      email: "david@bit-international.net",
    },
    {
      name: "Lisa Anderson",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      description: "Ensuring client satisfaction and support excellence",
      linkedin: "#",
      email: "lisa@bit-international.net",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the People Behind BIT International
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our success is driven by a team of dedicated professionals who are passionate 
              about technology and committed to delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-coral font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              We're always looking for talented individuals to join our growing team. 
              Check out our open positions and start your journey with us.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;