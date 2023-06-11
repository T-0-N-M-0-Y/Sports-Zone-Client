import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSelectedClasses = () => {
    const {user, loading} = useContext(AuthContext);
    const [AXIOS] = useAxios();

    const {data: selectedclasses = [], refetch} = useQuery({
        queryKey: ['selectedclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await AXIOS(`/selectedclass?email=${user.email}`);
            return res.data;
        }
    })

    return [selectedclasses, refetch]
};

export default useSelectedClasses;