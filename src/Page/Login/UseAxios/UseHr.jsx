import { useContext } from "react";
import useAxios from "./axiosSecure";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useHr = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: isHR, isPending: isHRLoading } = useQuery({
    queryKey: [user?.email, "isHR"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is Hr", user);
      const res = await axiosSecure.get(`/users/HR/${user.email}`);

      return res.data?.HR;
    },
  });
  return [isHR, isHRLoading];
};

export default useHr;
