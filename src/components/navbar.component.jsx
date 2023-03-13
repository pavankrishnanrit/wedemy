import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="lg:flex lg:justify-between lg:w-full justify-between flex px-10 py-3 bg-[#2353cc] opacity-90 relative h-[10vh] ">
      <Link
        to="/homepg"
        className="no-underline lg:px-10 py-5 mx-5 text-black font-semibold hover:text-[#BFACE2] transition duration-150 ease-in-out"
      >
        Home
      </Link>
      
      <Link
        to="/explorepg"
        className="no-underline lg:px-10 py-5 mx-5 text-black font-semibold hover:text-[#BFACE2] transition duration-150 ease-in-out"
      >
        Explore
      </Link>

      <Link
        to="/addnote"
        className='className="no-underline lg:px-10 py-5 mx-5 text-black font-semibold hover:text-[#BFACE2] transition duration-150 ease-in-out'
      >
        Add note
      </Link>

      {user && (
        <Link
          to="/"
          onClick={() => {
            dispatch({ type: "LOGOUT_USER" });
            navigate("/");
          }}
          className='className="no-underline lg:px-10 py-5 mx-5 text-black font-semibold hover:text-[#BFACE2] transition duration-150 ease-in-out'
        >
          Logout
        </Link>
      )}
    </div>
  );
};

export default Navbar;
