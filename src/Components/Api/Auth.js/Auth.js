import axios from "axios";

export const getRole = async (email) => {
  const { data } = await axios.get(
    `https://companny-server.vercel.app/user/${email}`
  );
  return data.selectedRole;
};
