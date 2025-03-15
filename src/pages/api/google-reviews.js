import { APP_CONFIG } from "@/config";

const GOOGLE_REVIEWS_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${APP_CONFIG.GOOGLE.PLACE_ID}&fields=reviews&key=${APP_CONFIG.GOOGLE.API_KEY}`;

export async function GET() {
  try {
    const response = await fetch(GOOGLE_REVIEWS_URL);

    const data = await response.json();

    const bestReviews = data.result.reviews.filter(
      (review) => review.rating >= 4
    );

    return new Response(
      JSON.stringify({
        reviews: bestReviews || [],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch reviews",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
