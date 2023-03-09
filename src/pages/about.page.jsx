import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-9xl text-5xl text-black font-semibold">
            WeDemy
          </h1>
          <div className="lg:mx-40 mx-6 text-center my-5 font-semibold flex flex-col">
            <p className="">
              In today's digital age, technology has provided us with a
              multitude of tools to make our lives easier and more efficient.
              One such tool is the WeDemy website. This website allows students,
              professionals, and anyone who needs to take notes to easily upload
              and access their notes online. In this we will explore the
              benefits of WeDemy and how they have changed the way we take and
              manage notes.
            </p>
            <br />
            <p>
              First and foremost, WeDemy provide users with a convenient and
              organized way to store their notes. No longer do we have to worry
              about misplacing or losing our notes. By uploading them to WeDemy,
              we can access them from anywhere with an internet connection. This
              is particularly useful for students who may need to refer their
              notes while studying on the go or professionals who need to access
              their notes during meetings or presentations.
            </p>
            <br />
            <p>
              Moreover, WeDemy often come equipped with features that allow for
              easy organization and categorization of notes. WeDemy has search
              functions, allowing users to quickly find specific notes by Title
              or by Author.
            </p>
            <br />
            <p>
              Another advantage of WeDemy is the ability to collaborate and
              share notes with others. Students can share notes with their
              classmates, allowing for a more collaborative and interactive
              learning experience. This is particularly useful for group
              projects and assignments where everyone needs to be on the same
              page. Professionals can also share notes with colleagues, making
              it easier to collaborate on projects and stay on top of important
              information.
            </p>
            <br />
            <p>
              In addition to the benefits mentioned above, WeDemy also provide
              users with the ability to backup their notes. In the event of a
              computer crash or other technical issue, users can rest assublue
              that their notes are safe and secure on the website. This is
              particularly important for those who rely heavily on their notes
              for work or school.
            </p>
            <br />
            <p>
              Finally, WeDemy is often free or low-cost, making them accessible
              to everyone. This is a significant advantage for students and
              professionals who may not have the financial resources to purchase
              expensive note-taking software or other tools.
            </p>
            <br />
            <p>
              In conclusion, WeDemy have revolutionized the way we take and
              manage notes. They provide users with a convenient and organized
              way to store their notes, collaborate with others, and backup
              their notes in case of technical issues. With their ease of use
              and affordability, WeDemy has become an essential tool for anyone
              who needs to take notes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
