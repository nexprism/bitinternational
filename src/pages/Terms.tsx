import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the BIT International website and services, you 
                    acknowledge that you have read, understood, and agree to be bound by these 
                    Terms and Conditions. If you do not agree with these terms, please do not 
                    use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                  <p>
                    BIT International provides software distribution, wholesale licensing, IT 
                    services, consultancy, and related technology solutions. The specific terms 
                    of each service will be detailed in individual service agreements or contracts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                  <p className="mb-4">As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services for lawful purposes only</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Not engage in any activity that disrupts our services</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property Rights</h2>
                  <p>
                    All content on this website, including text, graphics, logos, images, and 
                    software, is the property of BIT International or its licensors and is 
                    protected by copyright, trademark, and other intellectual property laws. 
                    Unauthorized use is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Software Licensing</h2>
                  <p>
                    All software products distributed by BIT International are subject to their 
                    respective license agreements. Users must comply with the terms of these 
                    licenses. Unauthorized copying, distribution, or modification of licensed 
                    software is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Limitations</h2>
                  <p className="mb-4">We reserve the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or discontinue services with reasonable notice</li>
                    <li>Refuse service to any user for legitimate reasons</li>
                    <li>Limit access to certain features or services</li>
                    <li>Update pricing and service terms as needed</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Payment Terms</h2>
                  <p>
                    Payment terms will be specified in individual invoices or contracts. All 
                    payments are due as per the agreed terms. Late payments may incur additional 
                    charges. We accept various payment methods as specified during transaction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Liability Disclaimer</h2>
                  <p>
                    BIT International provides services "as is" without warranties of any kind. 
                    We shall not be liable for any indirect, incidental, special, or consequential 
                    damages arising from the use of our services. Our liability is limited to the 
                    amount paid for the specific service in question.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless BIT International, its officers, 
                    directors, employees, and agents from any claims, damages, losses, or expenses 
                    arising from your use of our services or violation of these terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                  <p>
                    These Terms and Conditions are governed by and construed in accordance with 
                    the laws of India. Any disputes arising from these terms shall be subject 
                    to the exclusive jurisdiction of the courts in New Delhi, India.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications</h2>
                  <p>
                    We reserve the right to modify these Terms and Conditions at any time. 
                    Changes will be effective immediately upon posting on this website. 
                    Continued use of our services after changes constitutes acceptance of 
                    the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
                  <p>
                    For questions about these Terms and Conditions, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> info@bitinternational.in<br />
                    <strong>Address:</strong> New Delhi, India
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

export default Terms;