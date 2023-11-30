// api, axios (axios secure), tan stack

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Login/UseAxios/axiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Provider/AuthProvider";

const useUser = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUser;
