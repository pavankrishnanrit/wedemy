import React, { useState } from "react";
import Navbar from "../components/navbar.component";
import { TextField, Button } from "@mui/material";
import { AddNote, UploadFile } from "../axios/note.axios";
import Footer from "../components/footer.component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Addnote = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [author, setAuthor] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_doc");
    toast.info("Your note is being uploaded", { theme: "dark" });

    await UploadFile(formData).then(async (res) => {
      await AddNote(
        title,
        description,
        res.data.secure_url,
        user.displayName ? user.displayName : user.username
      ).then((res) => {
        toast.success("Data uploaded", { theme: "dark" });
        navigate("/homepg");
      });
    });
  };

  return (
    <div className="lg:h-screen w-full bg-cover min-h-screen lg:bg-[url('https://wallpaperaccess.com/full/2721432.jpg')]">
      <Navbar />

      <div className="justify-center h-[74%] py-[5.40vh] flex flex-col lg:items-center lg:w-full">
        <h1 className="text-black text-2xl m-2 lg:ml-0 ml-4">
          Showcase your Notes!
        </h1>
        <form className="flex flex-col items-start justify-center">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="filled"
            fullWidth="true"
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setTitle(e.target.value)}
            // required
            sx={{
              width: "24rem",
              "@media(min-width:1024px)": { width: "55rem" },
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description (Limit to 100 characters)"
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              width: "24rem",
              "@media(min-width:1024px)": { width: "55rem" },
              color: "success.main",
              margin: "1rem",
            }}
          />

          {/* <TextField
            id="outlined-adornment-amount"
            label="Author"
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) =>
              setAuthor(user.displayName ? user.displayName : user.username)
            }
            sx={{
              width: "24rem",
              "@media(min-width:1024px)": { width: "55rem" },
              color: "success.main",
              margin: "1rem",
            }}
          /> */}
          <div className="flex justify-between w-full">
            <Button
              variant="contained"
              component="label"
              // onClick={(e)=> uploadFile(e)}
              sx={{
                margin: "1rem",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                backgroundColor: "#ffffff",

                color: "#000000",
                borderColor: "#ffb3b3",
                // "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
              }}
            >
              Upload
              <input
                type="file"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              sx={{
                margin: "1rem",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                backgroundColor: "#ffffff",

                color: "#000000",
                borderColor: "#ffb3b3",
                "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
              }}
            >
              Add note
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Addnote;
