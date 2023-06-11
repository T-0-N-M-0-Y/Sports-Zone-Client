import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAxios = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const AXIOS = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        AXIOS.interceptors.request.use((request) => {
            const accessToken = localStorage.getItem('access-token');
            if (accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`;
            }
            return request;
        });

        AXIOS.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut()
                    navigate('/login')
                }
                return Promise.reject(error);
            }
        )

    }, [logOut, navigate, AXIOS]);

    return ([AXIOS])
};

export default useAxios;