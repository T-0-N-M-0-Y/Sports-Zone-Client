import { useQuery } from "@tanstack/react-query";

const useManageClass = () => {

    const { data: manageClasses = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['manageClasses'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/manageClasses')
            return res.json();
        },
    })
    return [manageClasses, refetch, loading]
};

export default useManageClass;