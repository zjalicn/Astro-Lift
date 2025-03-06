export async function GET() {
  try {
    const API_KEY = import.meta.env.GOOGLE_API_KEY;
    const PLACE_ID = import.meta.env.GOOGLE_PLACE_ID;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
    );

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
