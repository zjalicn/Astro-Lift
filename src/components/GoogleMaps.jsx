import { APP_CONFIG } from "@/config";

export const GoogleMaps = () => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${APP_CONFIG.GOOGLE.API_KEY}&q=place_id:${APP_CONFIG.GOOGLE.PLACE_ID}&zoom=15`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
