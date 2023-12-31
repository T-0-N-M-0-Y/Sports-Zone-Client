import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const usePaymentInfo = () => {

    const { user, loading } = useContext(AuthContext);
    const [AXIOS] = useAxios();

    const { data: paymentInfo = [], refetch } = useQuery({
        queryKey: ['paymentInfo', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await AXIOS(`/paymentInfo?email=${user.email}`);
            console.log(res.data);
            return res.data;
        }
    })

    return [paymentInfo, refetch]
};

export default usePaymentInfo;