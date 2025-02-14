import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export const InitialLoadingScreen = () => {
  const [shouldPlay, setShouldPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigationEntry.type === "reload";

    setShouldPlay(isRefresh);

    if (isRefresh) {
      const logoTimer = setTimeout(() => {
        setIsLogoVisible(false);
      }, 1500);

      const slideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1800);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(slideTimer);
      };
    } else {
      setIsVisible(false);
    }
  }, []);

  if (!shouldPlay) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Primary color trim at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-primary" />

          <AnimatePresence>
            {isLogoVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="relative w-64 h-64 sm:w-96 sm:h-96"
              >
                <motion.img
                  src={logo.src}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoadingScreen;
