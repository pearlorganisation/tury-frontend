import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import "../../css/banner.css";

function LuxuryButton({ text, clipClass }) {
  return (
    <motion.div
      className="luxury-button-container"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      aria-label={text}
    >
      <div className={`luxury-button ${clipClass}`}>
        <div className="luxury-button-inner">
          <span className="luxury-button-label">{text}</span>
        </div>
      </div>
    </motion.div>
  );
}

function Banner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen font-serif text-white">
      {/* Background Video */}
      <div className="absolute inset-0 min-h-screen z-0">
        <video
          src="https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/video-summer-2025-desktop-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex  flex-col items-center text-center px-4 banner-content">
        <motion.img
          src="assets/logo/logo.png"
          alt="Collectionist Logo"
          className="banner-logo mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -20,
            filter: "drop-shadow(0 0 15px rgba(0, 224, 187, 0.3))",
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-12 banner-buttons-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <LuxuryButton text={t("propertyOwners")} clipClass="luxury-button-left" />
          <LuxuryButton text={t("rentApartment")} clipClass="luxury-button-right" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mt-12 text-xl md:text-2xl font-light tracking-widest banner-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Optional tagline */}
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
