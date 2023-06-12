import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useVerifyInstructor = () => {

    const { user } = useContext(AuthContext);
    const [AXIOS] = useAxios()

    const { data: checkInstructor, isLoading: checkInstructorLoading } = useQuery({
        queryKey: ['checkInstructor', user?.email],
        queryFn: async () => {
            const res = await AXIOS.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })

    return ([checkInstructor, checkInstructorLoading]);
};

export default useVerifyInstructor;