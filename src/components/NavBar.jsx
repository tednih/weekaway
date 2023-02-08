import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
// import { BsChatSquareDots } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4  ">
        <li className="hover:text-[var(--primary-light)]">
          <a href="#hero">Home</a>
        </li>
        <li className="hover:text-[var(--primary-light)]">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="hover:text-[var(--primary-light)]">
          <a href="#deals">Deals</a>
        </li>
        <li className="hover:text-[var(--primary-light)]">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4 hover:text-[var(--primary-light)]" />
        <FaTwitter className="mx-4 hover:text-[var(--primary-light)]" />
        <FaGooglePlusG className="mx-4 hover:text-[var(--primary-light)]" />
        <FaInstagram className="mx-4 hover:text-[var(--primary-light)]" />
      </div>
      {/* hamburger button */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 w-full absolute text-gray-300 left-0 top-0 h-screen bg-black/70 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-ful text-center pt-12">
          <li className="text-xl py-8 hover:text-[var(--primary-light)]">
            <a href="#hero">Home</a>
          </li>
          <li className="text-xl py-8 hover:text-[var(--primary-light)]">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-xl py-8 hover:text-[var(--primary-light)]">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-xl py-8 hover:text-[var(--primary-light)]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
