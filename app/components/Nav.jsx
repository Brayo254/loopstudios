"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {/*desktop nav*/}
      <nav className="hidden h-20 md:flex  md:justify-between md:items-center pl-20 pr-20">
        <div>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="flex items-center">
          <Link className="mr-4 text-grey200 linkHover" href="#">
            About
          </Link>
          <Link className="mr-4 text-grey200 linkHover" href="#">
            Events
          </Link>
          <Link className="mr-4 text-grey200 linkHover" href="#">
            Careers
          </Link>
          <Link className="mr-4 text-grey200 linkHover" href="#">
            Support
          </Link>
        </div>
      </nav>
      <div
        onClick={handleToggle}
        className="text-4xl p-5 cursor-pointer md:hidden text-white flex justify-between"
      >
        <div className="mb-4">
          <Image src="/logo.svg" alt="logo" width={200} height={100} />
        </div>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <AnimatePresence>
        {/*mobile nav*/}
        {isOpen && (
          <motion.nav
            className="md:hidden absolute w-full bg-black h-65 flex flex-col items-center p-5"
            key="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex flex-col pr-3 text-2xl mt-1 items-center">
              <Link className="mr-4 text-white linkHover" href="#">
                Contact
              </Link>
              <Link className="mr-4 text-white linkHover" href="#">
                Events
              </Link>
              <Link className="mr-4 text-white linkHover" href="#">
                Careers
              </Link>
              <Link className="mr-4 text-white linkHover" href="#">
                Support
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
