import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [hero1.src, hero2.src, hero3.src];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setNextImageIndex((currentImageIndex + 1) % images.length);

      // Wait for fade animation to complete before updating current image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  const stats = [
    { value: "2K+", label: "Repairs Completed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background images */}
      <div className="absolute inset-0">
        {/* Next image (positioned behind) */}
        <div className="absolute inset-0">
          <img
            src={images[nextImageIndex]}
            alt={`Hero ${nextImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Current image (positioned in front with fade effect) */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Hero ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-40 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-8 inline-flex">
              ⭐️ Trusted by 2,000+ Customers in Seattle
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="block">Expert Computer Repair</span>
            <span className="block">in Seattle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Fast, reliable repairs for all your devices. Most repairs completed
            same-day with our lifetime warranty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="gap-2 text-lg h-12 w-96">
              Book Repair <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outlineWhite"
              className="gap-2 text-lg h-12 w-96"
            >
              Get Quote <PhoneIcon className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                  }}
                  className="text-3xl font-bold text-white"
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setNextImageIndex(index);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setIsTransitioning(false);
                }, 1000);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
