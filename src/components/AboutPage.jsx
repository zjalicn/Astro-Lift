import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutPage = () => {
  const team = [
    {
      name: "John Smith",
      role: "Lead Technician",
      image: "/api/placeholder/150/150",
      certifications: ["CompTIA A+", "Apple Certified"],
    },
    {
      name: "Sarah Johnson",
      role: "Network Specialist",
      image: "/api/placeholder/150/150",
      certifications: ["Cisco CCNA", "Microsoft Certified"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">About Us</h1>
          <p className="mt-4 text-xl text-foreground-secondary">
            Your trusted technology repair partner since 2010
          </p>
        </div>

        <Card className="mt-16">
          <CardContent className="pt-6">
            <div className="prose prose-lg mx-auto text-foreground">
              <p>
                Tech Fix Pro has been serving the Seattle area for over a
                decade, providing expert repair services for all types of
                devices. Our commitment to quality and customer satisfaction has
                made us the most trusted repair shop in the region.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center">
            Our Team
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full bg-muted"
                    src={member.image}
                    alt={member.name}
                  />
                  <CardTitle className="mt-4 text-xl">{member.name}</CardTitle>
                  <p className="text-lg text-foreground-secondary">
                    {member.role}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center">
                    {member.certifications.map((cert, i) => (
                      <Badge key={i} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
