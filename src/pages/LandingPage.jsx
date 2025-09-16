import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      {/* Neon Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-neon-green drop-shadow-glow mb-6"
      >
        Welcome to Neon World
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-neon-pink drop-shadow-glow max-w-2xl"
      >
        A modern landing page with futuristic neon vibes, built with React + Vite.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#get-started"
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px #39ff14" }}
        className="mt-10 px-8 py-4 text-lg font-semibold bg-neon-blue text-black rounded-2xl drop-shadow-glow"
      >
        Get Started
      </motion.a>
    </div>
  );
}
