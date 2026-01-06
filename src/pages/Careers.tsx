import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Users, Heart, Rocket, Send, CheckCircle } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you.",
    });

    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Briefcase,
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family",
    },
    {
      icon: Rocket,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement paths",
    },
  ];

  const perks = [
    "Flexible working hours",
    "Remote work options",
    "Professional development programs",
    "Team outings and events",
    "Performance bonuses",
    "Paid time off",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a dynamic team of professionals dedicated to delivering excellence in 
              software distribution and IT solutions. We're always looking for talented 
              individuals to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Why Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits & Culture
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where our employees can thrive and grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-semibold text-foreground text-center mb-6">Additional Perks</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                  <span className="text-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
                Apply Now
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Submit Your Application
              </h2>
              <p className="text-muted-foreground">
                Interested in joining our team? Fill out the form below and we'll get in touch.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 XXX XXX XXXX"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                      Position Interested In *
                    </label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell Us About Yourself *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your experience, skills, and why you'd like to join our team..."
                    required
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  You can also email your resume directly to{" "}
                  <a href="mailto:support@bit-international.net" className="text-coral hover:underline">
                    support@bit-international.net
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;