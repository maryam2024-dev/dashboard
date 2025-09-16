import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-luxury-gradient flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-luxury-radial-gradient opacity-50"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Luxury Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl text-luxury-heading text-luxury-gold mb-8 text-shadow-luxury"
        >
          Luxury Redefined
        </motion.h1>

        {/* Elegant Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-luxury-subheading text-luxury-white max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Experience the pinnacle of sophistication where timeless elegance meets modern innovation.
        </motion.p>

        {/* Secondary description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-lg text-luxury-subheading text-luxury-white opacity-80 max-w-2xl mx-auto mb-12"
        >
          Crafted for those who appreciate the finer things in life, our premium dashboard delivers an unparalleled experience.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxury-primary text-lg shadow-luxury-medium"
          >
            Experience Luxury
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxury-secondary text-lg"
          >
            Discover More
          </motion.button>
        </div>

        {/* Elegant accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
          className="w-24 h-0.5 bg-luxury-gold-gradient mx-auto mt-16 opacity-60"
        ></motion.div>
      </div>

      {/* Subtle floating elements for visual interest */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold rounded-full opacity-30"
      ></motion.div>

      <motion.div
        animate={{ 
          y: [10, -10, 10],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-luxury-gold-dark rounded-full opacity-20"
      ></motion.div>
    </div>
  );
}

