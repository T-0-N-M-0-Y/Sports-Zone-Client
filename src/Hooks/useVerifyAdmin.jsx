import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useVerifyAdmin = () => {

    const { user } = useContext(AuthContext);
    const [AXIOS] = useAxios()

    const { data: checkAdmin, isLoading: checkAdminLoading } = useQuery({
        queryKey: ['checkAdmin', user?.email],
        queryFn: async () => {
            const res = await AXIOS.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })

    return ([checkAdmin, checkAdminLoading]);
};

export default useVerifyAdmin;