import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-cover bg-[url('https://c1.wallpaperflare.com/preview/321/5/274/various-business-marketing-note.jpg')]">
        <div className="flex justify-between w-full px-10 py-5 font-bold">
          <Link
            to="/login"
            className="no-underline px-5 py-5 mx- text-black hover:text-blue-700 transition duration-150 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="no-underline px-5 py-5 mx- text-black hover:text-blue-700 transition duration-150 ease-in-out"
          >
            Sign-up
          </Link>
          <Link
            to="/about"
            className="no-underline px-5 py-5 mx- text-black hover:text-blue-700 transition duration-150 ease-in-out"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col h-[70%] justify-center items-center ">
          <h1 className="lg:text-9xl text-5xl text-black font-semibold">
            WeDemy
          </h1>
          <br />
          <p className="text-black text-xl text-center font-semibold px-5">
            View, share and save notes, all in one place.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
