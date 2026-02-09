"use client";
import React from "react";
import { motion } from "motion/react";

const CreationCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group grid-item relative h-60 overflow-hidden md:h-80"
    >
      {/* Mobile Image - Always visible on mobile, hidden on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${item.imageMobile})` }}
      ></div>

      {/* Desktop Image - Hidden on mobile, visible on desktop */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center  md:block"
        style={{ backgroundImage: `url(${item.imageDesktop})` }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

      {/* Title positioned at bottom */}

      <motion.h3
        whileHover={{ color: "#ffffff" }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="absolute bottom-6 left-6 text-white font-bold text-2xl md:text-3xl">
          {item.title}
        </h3>
      </motion.h3>
    </motion.div>
  );
};

export default CreationCard;
