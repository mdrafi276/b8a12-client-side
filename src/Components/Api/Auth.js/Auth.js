import axios from "axios";

export const getRole = async (email) => {
  const { data } = await axios.get(`http://localhost:5000/user/${email}`);
  return data.selectedRole;
};
