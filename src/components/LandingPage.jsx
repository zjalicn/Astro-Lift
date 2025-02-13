import { motion } from "framer-motion";
import {
  PhoneIcon,
  WrenchIcon,
  ShieldIcon,
  StarIcon,
  ArrowRight,
  Clock3,
  CheckCircle2,
  LaptopIcon,
  SmartphoneIcon,
  WifiIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GradientBorder } from "./GradientBorder";
import HeroCarousel from "./HeroCarousel";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroCarousel client:load />

      {/* Services Section */}
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                Our Services
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-foreground"
            >
              Professional Repair Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-xl text-muted-foreground"
            >
              Expert solutions for all your technology needs
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: LaptopIcon,
                title: "Computer Repair",
                desc: "Desktop & laptop repairs, upgrades, and maintenance",
                features: [
                  "Hardware Diagnostics",
                  "Software Issues",
                  "Data Recovery",
                ],
              },
              {
                icon: SmartphoneIcon,
                title: "Phone Repair",
                desc: "Screen replacement, battery service, and more",
                features: [
                  "Screen Repairs",
                  "Battery Replacement",
                  "Water Damage",
                ],
              },
              {
                icon: WifiIcon,
                title: "Network Solutions",
                desc: "WiFi setup, troubleshooting, and security",
                features: [
                  "Network Setup",
                  "Security Config",
                  "Speed Optimization",
                ],
              },
            ].map((service, index) => (
              <GradientBorder key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.2,
                  }}
                  className="flex"
                >
                  <Card className="h-full bg-card w-full">
                    <CardContent className="pt-6 p-8">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary text-primary-foreground mx-auto">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-foreground text-center">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground text-center text-lg">
                        {service.desc}
                      </p>
                      <Separator className="my-6" />
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-8">Learn More</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </GradientBorder>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-foreground"
            >
              The Tech Fix Pro Difference
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Clock3,
                title: "Same-Day Service",
                desc: "Most repairs completed within hours",
              },
              {
                icon: ShieldIcon,
                title: "Lifetime Warranty",
                desc: "All repairs backed by our guarantee",
              },
              {
                icon: WrenchIcon,
                title: "Certified Experts",
                desc: "Factory-trained technicians",
              },
              {
                icon: StarIcon,
                title: "5-Star Service",
                desc: "Consistently top-rated in Seattle",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.2,
                }}
                className="flex"
              >
                <Card className="bg-card hover:shadow-lg transition-all duration-300 w-full">
                  <CardContent className="pt-6 p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mx-auto">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground text-lg">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-background opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-primary-foreground"
            >
              Ready to fix your device?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-primary-foreground/90"
            >
              Get a free diagnostic consultation today
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg h-12"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
              <Button size="lg" className="gap-2 text-lg h-12">
                Book Online
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
