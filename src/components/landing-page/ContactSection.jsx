import { MailIcon, MapPinIcon, PhoneIcon, Clock3Icon } from "lucide-react";
import { COMPANY_CONTENT } from "@/content";

const API_KEY = import.meta.env.PUBLIC_GOOGLE_API_KEY;
const PLACE_ID = import.meta.env.PUBLIC_GOOGLE_PLACE_ID;

const ContactSection = () => {
  const { name, phone, email, address, hours } = COMPANY_CONTENT;

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${PLACE_ID}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold">{name}</h3>
              <p className="mt-2 text-lg">
                Your Trusted Technology Repair Partner
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="text-foreground">{address.street}</p>
                  <p className="text-foreground">{`${address.city}, ${address.state} ${address.zip}`}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon className="h-6 w-6 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock3Icon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-foreground">Mon-Fri: {hours.weekday}</p>
                  <p className="text-foreground">Sat: {hours.saturday}</p>
                  <p className="text-foreground">Sun: {hours.sunday}</p>
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
