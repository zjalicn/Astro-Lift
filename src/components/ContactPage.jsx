import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-xl text-foreground-secondary">
            We're here to help with all your tech needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help?"
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
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <span className="ml-3 text-foreground-secondary">
                  123 Tech Street, Seattle, WA 98101
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <span className="ml-3 text-foreground-secondary">
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-6 w-6 text-primary" />
                <span className="ml-3 text-foreground-secondary">
                  help@techfixpro.com
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-6 w-6 text-primary" />
                <div className="ml-3 text-foreground-secondary">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
