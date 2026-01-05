import Layout from "@/components/layout/Layout";

const Refund = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Refund Policy
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                  <p>
                    At BIT International, we strive to ensure customer satisfaction with all 
                    our products and services. This Refund Policy outlines the terms and 
                    conditions for refunds on software products, licensing, and services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Software Products (Non-Customized)</h2>
                  <p className="mb-4">For off-the-shelf software products:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Physical Media:</strong> Refunds may be available within 14 days 
                      of purchase if the product is unopened and in original condition.
                    </li>
                    <li>
                      <strong>Digital Downloads:</strong> Due to the nature of digital products, 
                      refunds are generally not available once the download link has been accessed 
                      or the license key activated.
                    </li>
                    <li>
                      <strong>Defective Products:</strong> Replacement or refund will be provided 
                      for products that are confirmed defective upon delivery.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Licensing & Subscriptions</h2>
                  <p className="mb-4">For volume licensing and subscriptions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Annual licenses are generally non-refundable once activated.
                    </li>
                    <li>
                      Pro-rata refunds may be available for unused portions of multi-year agreements, 
                      subject to vendor terms.
                    </li>
                    <li>
                      License transfers or adjustments may be possible as an alternative to refunds.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. IT Services</h2>
                  <p className="mb-4">For IT services and consultancy:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Services already rendered are non-refundable.
                    </li>
                    <li>
                      For ongoing service contracts, refunds for prepaid periods may be available 
                      with 30 days' written notice.
                    </li>
                    <li>
                      Project-based work is subject to the terms specified in individual contracts.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Non-Refundable Scenarios</h2>
                  <p className="mb-4">Refunds are NOT available in the following cases:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Software products that have been activated or registered</li>
                    <li>Downloaded digital products once access has been provided</li>
                    <li>Custom or specially ordered products</li>
                    <li>Services that have been fully or partially delivered</li>
                    <li>Products damaged due to user negligence or misuse</li>
                    <li>Change of mind after purchase (for digital products)</li>
                    <li>Failure to meet system requirements (if clearly specified)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Refund Process</h2>
                  <p className="mb-4">To request a refund:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Contact our support team at info@bitinternational.in</li>
                    <li>Provide your order number and reason for the refund request</li>
                    <li>Include any relevant documentation or proof of defect</li>
                    <li>Our team will review your request within 5 business days</li>
                    <li>Approved refunds will be processed within 10-15 business days</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Refund Method</h2>
                  <p>
                    Approved refunds will be issued to the original payment method. For bank 
                    transfers, please provide accurate banking details. Processing times may 
                    vary depending on your bank or payment provider.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Vendor-Specific Policies</h2>
                  <p>
                    Some software products are subject to the refund policies of their respective 
                    vendors or publishers. In such cases, the vendor's policy will take precedence. 
                    We will assist in facilitating refund requests with vendors where applicable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Disputes</h2>
                  <p>
                    If you disagree with a refund decision, you may request a review by contacting 
                    our customer service team. All disputes will be handled in accordance with 
                    applicable Indian consumer protection laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact for Refund Requests</h2>
                  <p>For refund-related queries, please contact:</p>
                  <p className="mt-4">
                    <strong>Email:</strong> info@bitinternational.in<br />
                    <strong>Subject Line:</strong> Refund Request - [Order Number]<br />
                    <strong>Response Time:</strong> Within 5 business days
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <p className="text-sm">
                    <strong className="text-foreground">Note:</strong> This policy may be updated 
                    periodically. Please review it before making a purchase. By completing a 
                    purchase, you acknowledge that you have read and agree to this Refund Policy.
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

export default Refund;