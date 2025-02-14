import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CONTACT_PAGE_CONTENT, COMPANY_CONTENT } from "@/content";

export const ContactPage = () => {
  const { hero, form, info } = CONTACT_PAGE_CONTENT;
  const { address, phone, email, hours } = COMPANY_CONTENT;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">{hero.title}</h1>
          <p className="mt-4 text-xl text-foreground-secondary">
            {hero.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{form.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder={form.fields.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={form.fields.email}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder={form.fields.message}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{info.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <span className="ml-3 text-foreground-secondary">
                  {fullAddress}
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="ml-3 text-foreground-secondary hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-6 w-6 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="ml-3 text-foreground-secondary hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-6 w-6 text-primary" />
                <div className="ml-3 text-foreground-secondary">
                  <p>Monday - Friday: {hours.weekday}</p>
                  <p>Saturday: {hours.saturday}</p>
                  <p>Sunday: {hours.sunday}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
