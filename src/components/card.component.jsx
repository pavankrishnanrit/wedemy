/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { DeleteNote, ShowNote } from "../axios/note.axios";
import { Button, Input } from "@mui/material";
import { Image } from "cloudinary-react";
import { useSelector } from "react-redux";

const Card = ({ setIsPopup, setNote }) => {
  const [notes, setNotes] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  // const [isTruncated, setisTruncated] = useState(false)

  // const [title, setTitle] = useState("");

  // const [description, setDescription] = useState("")
  // const [file, setFile] = useState("")

  useEffect(() => {
    ShowNote().then((response) => {
      console.log(response);
      setNotes(response.data);
    });
  }, []);

  const Deletenote = (id) => {
    DeleteNote(id).then(() => {
      setNotes(notes.filter((note) => note.blog_id !== id));
    });
  };

  const handlePopup = (note) => {
    setNote(note);
    setIsPopup(true);
  };

  return (
    <>
      {/* {JSON.stringify(notes)} */}
      <div className="lg:flex lg:flex-row lg:justify-around flex flex-col justify-center lg:my-1 py-2 m-4 mx-16">
        <input
          type="text"
          placeholder="🔍 Search by title"
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
          className="lg:py-1 text-center my-3 py-2 bg-[#fbff95] rounded-md"
        ></input>
        <input
          type="text"
          placeholder="🔍 Search by author"
          value={searchAuthor}
          onChange={(e) => {
            setSearchAuthor(e.target.value);
          }}
          className="lg:py-1 text-center my-3 py-2 bg-[#fbff95] rounded-md"
        ></input>
      </div>
      <div
        className="lg:grid grid-cols-3 w-[100%] place-content-center mx-auto my-auto 
      flex flex-col items-center"
      >
        {notes.length > 0
          ? notes
              .filter(
                (notes) =>
                  notes.blog_title
                    .toLowerCase()
                    .includes(searchTitle.toLowerCase()) &&
                  notes.blog_author
                    .toLowerCase()
                    .includes(searchAuthor.toLowerCase())
              )
              .map((note) => {
                return (
                  <div className=" lg:w-[80%] w-[70%] lg:h-[90%] flex flex-col justify-center items-start bg-[#e1e65e] shadow-lg lg:px-8 rounded-md lg:m-2.5 lg:ml-7 p-3 my-2">
                    <h1 className="font-semibold text-xl py-2">
                      {note.blog_title}
                    </h1>
                    <p className="py-2">
                      {note.blog_description.slice(0, 100)}
                    </p>
                    <p className="py-2">{note.blog_file}</p>
                    <button
                      onClick={() => window.open(note.blog_author)}
                      className="p-2 shadow-xl bg-white rounded-md"
                    >
                      View File{" "}
                    </button>
                    {(user.displayName==note.blog_file || user.username==note.blog_file)&&<div className="flex justify-between my-3 w-full">
                      <div className="mr-1">
                        <Button
                          variant="contained"
                          // className="p-2 m-3 shadow-xl bg-white rounded-md"
                          // type=""
                          onClick={() => handlePopup(note)}
                        >
                          Edit Note
                        </Button>
                      </div>
                      <div className="ml-1">
                        <Button
                          variant="contained"
                          // type=""
                          onClick={() => Deletenote(note.blog_id)}
                          // className="p-2 shadow-xl bg-white rounded-md"
                        >
                          Delete Note
                        </Button>
                      </div>
                    </div>}
                  </div>
                );
              })
          : null}
      </div>
      {notes.length === 0 && (
        <>
          <h1 className="text-2xl text-black font-bold flex flex-col items-center justify-center h-[40vh]">
            Add notes to display here
          </h1>
        </>
      )}
    </>
  );
};

export default Card;
