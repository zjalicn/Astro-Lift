import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("Fetching reviews..."); // Moved console.log here
        const response = await fetch("/api/google-reviews");
        const data = await response.json();

        console.log("Received data:", data); // Add this to debug
        setReviews(data.reviews || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array since we only want to fetch once

  // Add this outside useEffect to see the current state
  console.log("Current reviews state:", reviews);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted"
        }`}
      />
    ));
  };

  // Changed the conditional rendering to handle loading state better
  if (loading) {
    return (
      <div className="py-24 bg-background">
        <div className="text-center">Loading reviews...</div>
      </div>
    );
  }

  if (!reviews.length) {
    return null;
  }

  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Read our latest Google Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-foreground">
                      {review.author_name}
                    </h4>
                    <div className="flex mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-4">
                  {review.text}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  {new Date(review.time * 1000).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
