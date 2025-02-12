import React from "react";
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

export const LandingPage = () => {
  const stats = [
    { value: "2K+", label: "Repairs Completed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-primary/5 to-background/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-8 inline-flex">
                ⭐️ Trusted by 2,000+ Customers in Seattle
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="block">Expert Computer Repair</span>
              <span className="block">in Seattle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            >
              Fast, reliable repairs for all your devices. Most repairs
              completed same-day with our lifetime warranty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" className="gap-2 text-lg h-12">
                Book Repair <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg h-12"
              >
                Get Quote <PhoneIcon className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                    }}
                    className="text-3xl font-bold text-primary-foreground"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="mt-2 text-sm text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

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
              className="mt-4 text-xl text-foreground-secondary"
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.2,
                }}
                className="flex"
              >
                <Card className="h-full bg-card">
                  <CardContent className="pt-6 p-8">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary text-primary-foreground mx-auto">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-foreground text-center">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-foreground-secondary text-center text-lg">
                      {service.desc}
                    </p>
                    <Separator className="my-6" />
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-foreground-secondary"
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
            ))}
          </motion.div>
        </div>
      </div>

      {/* Remaining sections follow similar simplification */}
      <div className="py-24 bg-background-secondary">
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
          {/* Rest of the content remains similar */}
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
