import { WifiIcon, SmartphoneIcon, LaptopIcon } from "lucide-react";

// TEAM MEMBER IMAGES
import johnSmith from "@/assets/team/john-smith.jpeg";
import sarahJohnson from "@/assets/team/sarah-johnson.jpeg";
import chadMichaelson from "@/assets/team/chad-michaelson.jpeg";
import mrGrumpypants from "@/assets/team/mr-grumpypants.jpeg";

// Company Info
export const COMPANY_CONTENT = {
  name: "Tech Fix Pro",
  phone: "(555) 123-4567",
  email: "info@techfixpro.com",
  address: {
    street: "123 Tech Street",
    city: "Seattle",
    state: "WA",
    zip: "98101",
  },
  hours: {
    weekday: "9:00 AM - 7:00 PM",
    saturday: "10:00 AM - 5:00 PM",
    sunday: "Closed",
  },
};

// Landing Page Content
export const LANDING_PAGE_CONTENT = {
  hero: {
    badge: "⭐️ Trusted by 2,000+ Customers in Seattle",
    title: {
      line1: "Expert Computer Repair",
      line2: "in Seattle",
    },
    subtitle:
      "Fast, reliable repairs for all your devices. Most repairs completed same-day with our lifetime warranty.",
    stats: [
      { value: "2K+", label: "Repairs Completed" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "24/7", label: "Support Available" },
      { value: "15+", label: "Years Experience" },
    ],
  },
  services: {
    section: {
      badge: "Our Services",
      title: "Professional Repair Services",
      subtitle: "Expert solutions for all your technology needs",
    },
    items: [
      {
        title: "Computer Repair",
        desc: "Desktop & laptop repairs, upgrades, and maintenance",
        features: ["Hardware Diagnostics", "Software Issues", "Data Recovery"],
        icon: LaptopIcon,
      },
      {
        title: "Phone Repair",
        desc: "Screen replacement, battery service, and more",
        features: ["Screen Repairs", "Battery Replacement", "Water Damage"],
        icon: SmartphoneIcon,
      },
      {
        title: "Network Solutions",
        desc: "WiFi setup, troubleshooting, and security",
        features: ["Network Setup", "Security Config", "Speed Optimization"],
        icon: WifiIcon,
      },
    ],
  },
  features: {
    title: "The Tech Fix Pro Difference",
    items: [
      {
        title: "Same-Day Service",
        desc: "Most repairs completed within hours",
      },
      {
        title: "Lifetime Warranty",
        desc: "All repairs backed by our guarantee",
      },
      {
        title: "Certified Experts",
        desc: "Factory-trained technicians",
      },
      {
        title: "5-Star Service",
        desc: "Consistently top-rated in Seattle",
      },
    ],
  },
  cta: {
    title: "Ready to fix your device?",
    subtitle: "Get a free diagnostic consultation today",
  },
};

// About Page Content
export const ABOUT_PAGE_CONTENT = {
  hero: {
    title: "About Us",
    subtitle: "Your trusted technology repair partner since 2010",
  },
  description:
    "Tech Fix Pro has been serving the Seattle area for over a decade, providing expert repair services for all types of devices. Our commitment to quality and customer satisfaction has made us the most trusted repair shop in the region.",
  team: [
    {
      name: "John Smith",
      role: "Lead Technician",
      certifications: ["CompTIA A+", "Apple Certified"],
      image: johnSmith.src,
    },
    {
      name: "Sarah Johnson",
      role: "Network Specialist",
      certifications: ["Cisco CCNA", "Microsoft Certified"],
      image: sarahJohnson.src,
    },
    {
      name: "Chad Michaelson",
      role: "Lead Technician",
      certifications: ["CompTIA A+", "Apple Certified"],
      image: chadMichaelson.src,
    },
    {
      name: "Mr. Grumpypants",
      role: "Network Specialist",
      certifications: ["Cisco CCNA", "Microsoft Certified"],
      image: mrGrumpypants.src,
    },
  ],
};

// Services Page Content
export const SERVICES_PAGE_CONTENT = {
  hero: {
    title: "Our Services",
    subtitle: "Professional repair services for all your devices",
  },
  services: [
    {
      title: "Computer Repair",
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
  ],
};

// Contact Page Content
export const CONTACT_PAGE_CONTENT = {
  hero: {
    title: "Contact Us",
    subtitle: "We're here to help with all your tech needs",
  },
  form: {
    title: "Contact Form",
    fields: {
      name: "Your name",
      email: "your@email.com",
      message: "How can we help?",
    },
  },
  info: {
    title: "Contact Information",
  },
};

// Reviews Page Content
export const REVIEWS_PAGE_CONTENT = {
  hero: {
    title: "Customer Reviews",
    subtitle: "See what our customers say about us",
  },
  reviews: [
    {
      name: "Michael B.",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Excellent service! Fixed my laptop's screen in under 2 hours. Very professional and reasonable prices.",
      service: "Laptop Screen Repair",
    },
    {
      name: "Jennifer K.",
      rating: 5,
      date: "1 month ago",
      review:
        "The team recovered all my important data from a crashed hard drive. Can't thank them enough!",
      service: "Data Recovery",
    },
    {
      name: "David R.",
      rating: 5,
      date: "2 months ago",
      review:
        "Great experience with phone repair. Fixed my iPhone screen and it looks brand new.",
      service: "Phone Repair",
    },
  ],
};

// Navigation Content
export const NAVIGATION_CONTENT = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  cta: {
    text: "Book Repair",
    href: "/book",
  },
};
