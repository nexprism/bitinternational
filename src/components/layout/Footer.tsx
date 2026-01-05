import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="BIT International"
                className="h-14 w-auto object-contain bg-background/10 rounded-lg p-2"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Global Software Distribution & IT Solutions Provider. Delivering excellence 
              in software retail, IT services, and consultancy worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Globe className="w-4 h-4" />
              <span>India & Global Operations</span>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Software Distribution",
                "Wholesale & Licensing",
                "IT Services",
                "IT Consultancy",
                "Data Centers",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Refund Policy", path: "/refund" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-coral" />
                <span className="text-primary-foreground/80">
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-coral" />
                <a
                  href="mailto:info@bitinternational.in"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@bitinternational.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-coral" />
                <span className="text-primary-foreground/80">+91 XXXX XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} BIT International. All Rights Reserved.</p>
            <p className="text-center md:text-right">
              Software Distribution | IT Services | Consultancy | Global Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
