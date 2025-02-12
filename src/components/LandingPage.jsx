import React from "react";
import {
  PhoneIcon,
  ClockIcon,
  WrenchIcon,
  ShieldIcon,
  StarIcon,
  ChevronRightIcon,
  LaptopIcon,
  SmartphoneIcon,
  WifiIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-background opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Expert Computer Repair in Seattle
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Fast, reliable repairs for all your devices. Most repairs
              completed same-day with our lifetime warranty.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" className="gap-2">
                Book Repair <ChevronRightIcon className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                Get Quote <PhoneIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Professional repair services for all your devices
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: LaptopIcon,
                title: "Computer Repair",
                desc: "Desktop & laptop repairs, upgrades, and maintenance",
              },
              {
                icon: SmartphoneIcon,
                title: "Phone Repair",
                desc: "Screen replacement, battery service, and more",
              },
              {
                icon: WifiIcon,
                title: "Network Solutions",
                desc: "WiFi setup, troubleshooting, and security",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground mx-auto">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-foreground text-center">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-foreground-secondary text-center">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-foreground">
              Why Choose Us
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClockIcon,
                title: "Fast Service",
                desc: "Same-day repairs for most issues",
              },
              {
                icon: ShieldIcon,
                title: "Warranty",
                desc: "Lifetime warranty on all repairs",
              },
              {
                icon: WrenchIcon,
                title: "Expert Team",
                desc: "Certified technicians",
              },
              {
                icon: StarIcon,
                title: "5-Star Rated",
                desc: "Hundreds of happy customers",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-none">
                <CardContent className="pt-6 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mx-auto">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-foreground-secondary">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-foreground">
              Ready to fix your device?
            </h2>
            <p className="mt-4 text-xl text-primary-foreground/80">
              Get a free diagnostic consultation today
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
