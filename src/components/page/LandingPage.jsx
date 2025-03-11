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
  CheckCircleIcon,
  CalendarCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GradientBorder } from "@/components/ui/GradientBorder";
import HeroCarousel from "@/components/landing-page/HeroCarousel";
import ContactSection from "@/components/landing-page/ContactSection";
import { GoogleReviews } from "@/components/landing-page/GoogleReviews";
import { LANDING_PAGE_CONTENT, COMPANY_CONTENT } from "@/content";

const serviceIcons = {
  "Computer Repair": LaptopIcon,
  "Phone Repair": SmartphoneIcon,
  "Network Solutions": WifiIcon,
};

const featureIcons = {
  "Same-Day Service": Clock3,
  "Lifetime Warranty": ShieldIcon,
  "Certified Experts": WrenchIcon,
  "5-Star Service": StarIcon,
};

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
              <Badge variant="outline" className="mb-4 bg-secondary">
                {LANDING_PAGE_CONTENT.services.section.badge}
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-foreground"
            >
              {LANDING_PAGE_CONTENT.services.section.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-xl text-muted-foreground"
            >
              {LANDING_PAGE_CONTENT.services.section.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {LANDING_PAGE_CONTENT.services.items.map((service, index) => {
              const ServiceIcon = serviceIcons[service.title];
              return (
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
                          <ServiceIcon className="h-8 w-8" />
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
              );
            })}
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
              {LANDING_PAGE_CONTENT.features.title}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {LANDING_PAGE_CONTENT.features.items.map((feature, index) => {
              const FeatureIcon = featureIcons[feature.title];
              return (
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
                        <FeatureIcon className="h-8 w-8" />
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
              );
            })}
          </motion.div>
        </div>
      </div>

      <GoogleReviews client:load />

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-primary py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-background opacity-95"></div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl"></div>
            <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-5xl font-extrabold text-primary-foreground"
            >
              {LANDING_PAGE_CONTENT.cta.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-xl text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed"
            >
              {LANDING_PAGE_CONTENT.cta.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
            >
              <Button
                size="lg"
                variant="secondary"
                className="gap-3 text-lg font-medium h-14 px-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="bg-secondary-foreground/10 p-2 rounded-full group-hover:bg-secondary-foreground/20 transition-colors">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <span>
                  <span className="text-sm block opacity-80">Call Now</span>
                  <span className="font-bold">{COMPANY_CONTENT.phone}</span>
                </span>
              </Button>

              <Button
                size="lg"
                className="gap-3 text-lg font-medium h-14 px-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:bg-primary-foreground hover:text-primary"
              >
                Book Online
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-primary-foreground/80"
            >
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                <span>No Waiting Time</span>
              </div>
              <div className="flex items-center">
                <CalendarCheckIcon className="h-4 w-4 mr-2" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-4 w-4 mr-2" />
                <span>5-Star Service Guaranteed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact & Map Section */}
      <ContactSection />
    </div>
  );
};

export default LandingPage;
