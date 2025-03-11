import { Laptop, Smartphone, Wifi, ChevronRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SERVICES_PAGE_CONTENT } from "@/content";
import hero1 from "@/assets/hero-1.jpg";

const serviceIcons = {
  "Computer Repair": Laptop,
  "Phone Repair": Smartphone,
  "Network Solutions": Wifi,
};

export const ServicesPage = () => {
  const { hero, services } = SERVICES_PAGE_CONTENT;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hero1.src}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white">{hero.title}</h1>
            <p className="mt-6 text-xl text-white/90">{hero.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[service.title];

            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-0 relative">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <ServiceIcon className="h-10 w-10" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-3xl font-bold">
                            {service.title}
                          </CardTitle>
                          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-lg px-4 py-2 h-auto bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 self-start"
                        >
                          {service.pricing}
                        </Badge>
                      </div>

                      <Separator className="my-8" />

                      {/* Features Section */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-foreground">
                          Service Includes:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {service.includes.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                            >
                              <ChevronRight className="h-5 w-5 text-primary shrink-0" />
                              <span className="ml-3 text-foreground-secondary">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 flex justify-end">
                        <Button
                          className="group/btn relative overflow-hidden px-6"
                          size="lg"
                        >
                          Book This Service
                          <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
