import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const width = parseInt(params.width || "100");
    const height = parseInt(params.height || "100");

    // Get optional params from URL
    const url = new URL(request.url);
    const initials = url.searchParams.get("initials") || "";
    const text = initials || `${width}x${height}`;

    // Colors
    const bgColor = "#f3f4f6";
    const textColor = "#6b7280";

    // Create SVG
    const svg = `
      <svg
        width="${width}"
        height="${height}"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="${width}" height="${height}" fill="${bgColor}" />
        
        <!-- Grid Pattern -->
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#e5e7eb"
              stroke-width="1"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <!-- Text -->
        <text
          x="50%"
          y="50%"
          font-family="system-ui, -apple-system, sans-serif"
          font-size="${initials ? Math.min(width, height) / 3 : "16"}"
          font-weight="${initials ? "bold" : "normal"}"
          fill="${textColor}"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          ${text}
        </text>
      </svg>
    `;

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (error) {
    return new Response("Error generating placeholder", { status: 500 });
  }
};
