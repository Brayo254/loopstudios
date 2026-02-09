"use client";

import React from "react";
import Nav from "../components/Nav";
import { motion } from "motion/react";
function Hero() {
  return (
    <>
      <section className="hero-section">
        <Nav />
        <div className="p-14 flex justify-center items-center md:w-100 md:h-50 border-2 border-white md:p-2 md:flex md:justify-center md:items-center md:mt-50 md:ml-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white text-5xl">
              IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
            </h1>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
