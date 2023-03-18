import axios from "axios";

export const AddNote = async (title, description, author, file) => {
  return await axios.post("http://localhost:8080/addnote", {
    blog_title: title,
    blog_description: description,
    blog_author: author,
    blog_file: file,
  });
};

export const ShowNote = async () => {
  return await axios.get("http://localhost:8080/homepg");
};

export const DeleteNote = async (id) => {
  return await axios.delete(`http://localhost:8080/delete/${id}`);
};

export const UpdateNote = async (id, title, description, author, file) => {
  return await axios.put(`http://localhost:8080/update/${id}`, {
    blog_id: id,
    blog_title: title,
    blog_description: description,
    blog_author: author,
    blog_file: file,
  });
};

export const UploadFile = async (formData) => {
  return await axios.post(
    "https://api.cloudinary.com/v1_1/donl4ungj/image/upload",
    formData
  );
};
