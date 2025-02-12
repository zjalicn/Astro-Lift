import { Laptop, Smartphone, Wifi, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const ServicesPage = () => {
  const services = [
    {
      title: "Computer Repair",
      icon: Laptop,
      description:
        "Complete diagnostic and repair services for all computer brands",
      pricing: "From $49",
      includes: [
        "Hardware repairs",
        "Virus removal",
        "Data recovery",
        "System upgrades",
        "Software installation",
      ],
    },
    {
      title: "Phone Repair",
      icon: Smartphone,
      description: "Expert phone and tablet repair services",
      pricing: "From $39",
      includes: [
        "Screen replacement",
        "Battery replacement",
        "Charging port repair",
        "Water damage treatment",
        "Camera repair",
      ],
    },
    {
      title: "Network Solutions",
      icon: Wifi,
      description:
        "Professional networking services for home and small business",
      pricing: "From $79",
      includes: [
        "WiFi setup & optimization",
        "Network security",
        "Router configuration",
        "Range extension",
        "Troubleshooting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Our Services</h1>
          <p className="mt-4 text-xl text-foreground-secondary">
            Professional repair services for all your devices
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary text-primary-foreground">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="mt-2 text-lg text-foreground-secondary">
                      {service.description}
                    </p>
                    <Badge variant="secondary" className="mt-2 text-lg">
                      {service.pricing}
                    </Badge>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Service Includes:
                  </h3>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0" />
                        <span className="ml-2 text-foreground-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
