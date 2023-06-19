import { useQuery } from "@tanstack/react-query";

const usePopularClasses = () => {

    const { data: popularClasses = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/popularClasses')
            return res.json();
        },
    })
    return [popularClasses, refetch, loading]
};

export default usePopularClasses;