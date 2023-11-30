import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import useAxios from "./axiosSecure";


const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxios();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
           
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
   
};

export default useAdmin;