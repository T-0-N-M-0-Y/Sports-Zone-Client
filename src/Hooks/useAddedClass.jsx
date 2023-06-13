import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAddedClass = () => {
    const { user, loading } = useContext(AuthContext);
    const [AXIOS] = useAxios();

    const { data: addedclasses = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await AXIOS(`/classes/email?email=${user.email}`);
            return res.data;
        }
    })

    return [addedclasses, refetch]
};

export default useAddedClass;