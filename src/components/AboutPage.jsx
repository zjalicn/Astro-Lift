import { Card, CardContent } from "@/components/ui/card";
import { ABOUT_PAGE_CONTENT } from "@/content";
import { Users, Clock, Star, Award } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

export const AboutPage = () => {
  const { hero, description, team } = ABOUT_PAGE_CONTENT;

  const highlights = [
    { icon: Clock, value: "10+", label: "Years of Experience" },
    { icon: Users, value: "2000+", label: "Happy Customers" },
    { icon: Star, value: "5-Star", label: "Service Quality" },
    { icon: Award, value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
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

          {/* Highlights */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <item.icon className="h-10 w-10 mx-auto text-white mb-4" />
                  <div className="text-3xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-sm text-white/80 mt-2">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto px-4 py-24">
        <p className="text-lg text-foreground leading-relaxed">{description}</p>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-2 border-primary-foreground shadow-xl shadow-black/20"
              />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-lg text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
