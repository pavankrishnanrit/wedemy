import axios from "axios";

export const createUser = async (username, email) => {
  return await axios.post("http://localhost:8080/createuser", {
    username,
    email,
  });
};

export const getUser = async (email) => {
  return await axios.get(`http://localhost:8080/getUser/${email}`);
};
