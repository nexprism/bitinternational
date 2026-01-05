import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p>
                    BIT International ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="mb-4">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> Name, email address, phone number, 
                      company name, and other contact details you provide.
                    </li>
                    <li>
                      <strong>Business Information:</strong> Company details, billing information, 
                      and transaction records.
                    </li>
                    <li>
                      <strong>Technical Information:</strong> IP address, browser type, device 
                      information, and usage data.
                    </li>
                    <li>
                      <strong>Cookies:</strong> We use cookies and similar technologies to enhance 
                      your browsing experience.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We use the collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and improving our services</li>
                    <li>Processing transactions and orders</li>
                    <li>Communicating with you about our products and services</li>
                    <li>Responding to inquiries and support requests</li>
                    <li>Sending marketing communications (with your consent)</li>
                    <li>Analyzing website usage and improving user experience</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to 
                    protect your personal information against unauthorized access, alteration, 
                    disclosure, or destruction. However, no method of transmission over the 
                    Internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                  <p>
                    We may share your information with trusted third-party service providers 
                    who assist us in operating our business, such as payment processors, 
                    analytics providers, and marketing platforms. These parties are bound by 
                    confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies Policy</h2>
                  <p>
                    Our website uses cookies to enhance your browsing experience. You can 
                    control cookie preferences through your browser settings. Disabling 
                    cookies may affect some website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                  <p className="mb-4">Under applicable laws, you may have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Compliance with Indian Laws</h2>
                  <p>
                    We comply with applicable Indian data protection laws, including the 
                    Information Technology Act, 2000 and its associated rules. We are 
                    committed to protecting your data in accordance with these regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your 
                    rights, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> info@bitinternational.in<br />
                    <strong>Address:</strong> New Delhi, India
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy periodically. The updated version will 
                    be posted on this page with a revised "Last updated" date. We encourage 
                    you to review this page regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;