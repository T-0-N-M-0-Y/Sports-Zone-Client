import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
    const {user, loading} = useContext(AuthContext);

    const {data: selectedclasses = [], refetch} = useQuery({
        queryKey: ['selectedclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedclass?email=${user.email}`);
            return res.json();
        }
    })

    return [selectedclasses, refetch]
};

export default useSelectedClasses;