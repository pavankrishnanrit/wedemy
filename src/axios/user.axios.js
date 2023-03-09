import axios from "axios";

export const createUser = async (user_id,username, email) => {
  return await axios.post("http://localhost:3306/createuser", {
    user_id,
    username,
    email,
  });
};
