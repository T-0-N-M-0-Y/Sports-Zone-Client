
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const usePayments = () => {
    const { user, loading } = useContext(AuthContext);
    const [AXIOS] = useAxios();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await AXIOS(`/payment?email=${user.email}`);
            console.log(res.data);
            return res.data;
        }
    })

    return [payments, refetch]
};

export default usePayments;