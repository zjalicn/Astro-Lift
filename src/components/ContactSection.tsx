import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Clock3Icon } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <p className="text-white text-lg font-medium">
                Google Maps Integration
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold">Tech Fix Pro</h3>
              <p className="mt-2 text-lg">
                Your Trusted Technology Repair Partner
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="text-foreground">123 Tech Street</p>
                  <p className="text-foreground">Seattle, WA 98101</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <a
                  href="tel:(555)123-4567"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon className="h-6 w-6 text-primary" />
                <a
                  href="mailto:help@techfixpro.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  help@techfixpro.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock3Icon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-foreground">Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-foreground">Sat: 10:00 AM - 5:00 PM</p>
                  <p className="text-foreground">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
