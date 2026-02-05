import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const theYear = date.getFullYear();
  return (
    <>
      <footer className="flex flex-col h-[350px] justify-center items-center p-8  md:w-full md:h-[150px] bg-black md:flex md:flex-row md:justify-between md:items-center md:pr-8 md:pl-8">
        {/* left */}
        <div className="mb-3.5">
          <div className="mb-10 md:mb-3.5">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </div>
          <div className="text-white flex flex-col md:flex md:flex-row">
            <Link className="md:mr-2.5 md:text-xl" href="#">
              About
            </Link>
            <Link className="md:mr-2.5 md:text-xl" href="#">
              Career
            </Link>
            <Link className="md:mr-2.5 md:text-xl" href="#">
              Events
            </Link>
            <Link className="md:mr-2.5 md:text-xl" href="#">
              Support
            </Link>
            <Link className="md:mr-2.5 md:text-xl" href="#">
             About
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="mb-3.5">
          <div className="flex flex-row justify-center mb-3.5 text-white text-2xl md:flex md:flex-row md:mb-2.5">
            <div className="mr-2.5">
              <FaFacebook />
            </div>
            <div className="mr-2.5">
              <FaTwitter />
            </div>
            <div className="mr-2.5">
              <FaPinterest />
            </div>
            <div className="mr-2.5">
              <FaInstagram />
            </div>
          </div>
          <div>
            <p className="text-white">
              &#169; {theYear} LoopStudios All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
