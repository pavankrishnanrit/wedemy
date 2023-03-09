import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { createUser } from "../../axios/user.axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        console.log(email, username);
        await createUser(username, email).then((res) => {
          console.log(res);
        });
        // dispatch({
        //   type: "CREATE_USER",
        //   payload: res.data,
        // });
        // navigate("/homepg");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleAuthProvider = new GoogleAuthProvider();

  const handleGoogleSubmit = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider).then((res) => {
        console.log(res.user.providerData[0]);
        dispatch({
          type: "CREATE_USER",
          payload: res.user.providerData[0],
        });
        navigate("/homepg");
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="lg:bg-[url('https://c1.wallpaperflare.com/preview/321/5/274/various-business-marketing-note.jpg')] min-h-screen   lg:bg-cover h-[100vh] lg:flex lg:flex-col lg:justify-center bg-blue-100">
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
        <div className="flex-row p-10 mx-auto mt-[6vh] my-auto bg-blue-100 lg:rounded-xl lg:shadow-xl flex justify-center">
          <form
            onSubmit={signup}
            className="text-black-600 px-14 py- rounded-xl shadow-2xl"
          >
            <h1 className="text-center font-bold text-3xl">Create Account</h1>
            <br />
            <div className="flex flex-col text-center">
              <label className="my-3 font-semibold">Username</label>

              <input
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="my-3 rounded-md bg-blue-200 px-3 py-1 text-center"
              ></input>
              <label className="my-3 font-semibold">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="my-3 rounded-md bg-blue-200 px-3 py-1 text-center"
              ></input>
              <label className="my-3 font-semibold">Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="my-3 rounded-md bg-blue-200 px-3 py-1 text-center"
              ></input>
            </div>
            {/* <div></div> */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-md m-2 text-black border-white bg-blue-300 shadow-xl border-1 p-2 flex justify-center items-center hover:bg-blue-500 focus:outline-none focus:ring"
              >
                Sign Up
              </button>
            </div>
            <p className="font-bold m-2 flex justify-center">OR</p>
            <div className="flex justify-center">
              <button
                className="rounded-full m-2 text-black border-white bg-blue-300 shadow-xl border-1 p-2 flex justify-center items-center hover:bg-blue-500 focus:outline-none focus:ring "
                onClick={handleGoogleSubmit}
              >
                <img
                  src="https://img.icons8.com/color/256/google-logo.png"
                  alt=""
                  width="25px"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
