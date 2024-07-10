import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://emars-server.vercel.app/'
})

const useAxiosSecure = () => {
    const { signedOut } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            // console.log(token);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                //  console.log('peyechi')
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await signedOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            });
    }, [signedOut, navigate]);

    return [axiosSecure]
};

export default useAxiosSecure;