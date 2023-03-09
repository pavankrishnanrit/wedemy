import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="bg-[#2353cc] opacity-90 w-full lg:flex lg:justify-between items-center relative bottom-0 mt-auto">
        <ul className="lg:pl-4">
          <li className="flex justify-center">
            <h1 className="text-black text-3xl py-3">WeDemy</h1>
          </li>
          <li className="flex justify-center">
            <p className="text-black py-3">A website for Note storage</p>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center">
          <ul>
            <li className="py-2">
              <Link
                to="/homepg"
                onClick={scrolltoTop}
                className='className="no-underline text-black hover:text-[#BFACE2] transition duration-150 ease-in-out'
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/login"
                className='className="no-underline  text-black hover:text-[#BFACE2] transition duration-150 ease-in-out'
              >
                Login
              </Link>
            </li>
            {/* <li className="py-2">
              <Link
                to="/signup"
                className='className="no-underline   text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                Signup
              </Link>
            </li> */}
          </ul>
          <p className="text-black py-1">
            Copyright 2023 @WeDemy all rights reserved
          </p>
        </div>

        <ul className="lg:pr-4 ">
          <li className="flex justify-center">
            <h1 className="text-black py-2">Contact Info</h1>
          </li>
          <li className="flex justify-center">
            <p className="text-black py-2">Email: Wedemy@gmail.com</p>
          </li>
          <li className="flex justify-center">
            <p className="text-black py-2">Phone: 9876543210</p>
          </li>
          <li className="flex justify-center">
            <p className="text-black "></p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
