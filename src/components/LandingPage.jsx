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

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Computer Repair in Seattle
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Fast, reliable repairs for all your devices. Most repairs
              completed same-day with our lifetime warranty.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Book Repair <ChevronRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                Get Quote <PhoneIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
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
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
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
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to fix your device?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Get a free diagnostic consultation today
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
