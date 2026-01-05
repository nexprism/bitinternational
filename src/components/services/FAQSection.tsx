import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of software licenses do you offer?",
    answer:
      "We offer a wide range of software licenses including perpetual licenses, subscription-based licenses, volume licensing for enterprises, educational institution discounts, and government procurement options. Our team can help you find the most cost-effective licensing solution for your needs.",
  },
  {
    question: "Do you provide software installation and configuration services?",
    answer:
      "Yes, we provide comprehensive installation and configuration services for all software products we distribute. Our certified technicians ensure proper setup, integration with existing systems, and optimal configuration for your specific environment.",
  },
  {
    question: "What is your technical support availability?",
    answer:
      "We offer flexible support options including standard business hours support (Mon-Sat, 9 AM - 6 PM IST), extended support packages, and 24/7 premium support for enterprise clients. Our service desk is equipped to handle queries via phone, email, and remote assistance.",
  },
  {
    question: "How does your software distribution pricing work?",
    answer:
      "Our pricing is competitive and transparent. We offer volume discounts for bulk purchases, special pricing for educational and government institutions, and flexible payment terms for enterprise clients. Contact our sales team for a customized quote based on your requirements.",
  },
  {
    question: "Can you help with digital transformation initiatives?",
    answer:
      "Absolutely! Our IT consultancy team specializes in digital transformation strategies. We provide comprehensive assessments, roadmap planning, technology selection, implementation support, and change management guidance to help your organization modernize its IT infrastructure.",
  },
  {
    question: "What cybersecurity services do you offer?",
    answer:
      "We offer end-to-end cybersecurity solutions including security assessments, vulnerability testing, compliance auditing, security software implementation, employee training, and ongoing monitoring. Our team stays updated with the latest threats and best practices to keep your systems secure.",
  },
  {
    question: "Do you support international clients?",
    answer:
      "Yes, we serve clients globally with a strong presence in India and international markets. We support multiple currencies, provide international shipping for physical media, and offer electronic delivery for digital products. Our team is experienced in handling cross-border licensing requirements.",
  },
  {
    question: "What is your refund policy for software purchases?",
    answer:
      "Our refund policy varies by product type. Generally, unopened physical software can be returned within 14 days. Digital downloads and activated licenses are typically non-refundable due to licensing agreements. Please review our detailed Refund Policy page or contact us for specific cases.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our software licensing, IT support, and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-coral hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
