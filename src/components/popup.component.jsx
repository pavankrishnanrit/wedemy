import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { UpdateNote, UploadFile } from "../axios/note.axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Popup = ({ note, setIsPopup }) => {
  const [title, setTitle] = useState(note.blog_title);
  const [description, setDescription] = useState(note.blog_description);
  const [author, setAuthor] = useState(note.blog_author);
  const [file, setFile] = useState(note.blog_file);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_doc");
    toast.info("Your notes is being updated", { theme: "dark" });
    await UploadFile(formData).then(async (res) => {
      handlePopClose();
      await UpdateNote(
        note.blog_id,
        title,
        description,
        author,
        res.data.secure_url
      ).then((res) => {
        toast.success("Data updated", { theme: "dark" });
        console.log(res);
        // navigate("/homepg");
      });
    });
  };

  const handlePopClose = (e) => {
    setIsPopup = false;
    window.location.reload();
    toast.success("Data updated", { theme: "dark" });
  };

  return (
    <div className="bg-black h-[100%] w-[100%] flex fixed top-0 left-0  flex-col items-center justify-center z-10">
      <div className="bg-white opacity-100 flex flex-col items-center justify-center rounded-lg p-5">
        <div className="">
          <h1 className="text-3xl py-5">Update note</h1>
        </div>
        <form
          action=""
          onSubmit={handleUpdate}
          className="flex flex-col items-start justify-center"
        >
          <TextField
            id="outlined-basic"
            defaultValue={title}
            label="Title"
            variant="filled"
            fullWidth="true"
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setTitle(e.target.value)}
            // required
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            defaultValue={description}
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Author Name"
            defaultValue={author}
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setAuthor(e.target.value)}
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />

          <Button
            variant="contained"
            component="label"
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#ffb3b3",
              "&:hover": { backgroundColor: "#000", color: "#f6f6f6" },
            }}
          >
            Upload
            <input
              hidden
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Button>

          <Button
            variant="contained"
            type="submit"
            onClick={handleUpdate()}
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#ffb3b3",
              "&:hover": { backgroundColor: "#000", color: "#f6f6f6" },
            }}
          >
            Update note
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
