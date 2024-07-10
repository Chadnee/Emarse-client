import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useProducts = () => {
    
    const [axiosSecure] = useAxiosSecure()
    
    const { refetch, data: product = [], isLoading: productLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async() => {
            const res = await axiosSecure.get("/products");
            console.log('from res', res)
            return res.data;
        }
    })

    return [product, refetch, productLoading ]
};

export default useProducts;

//data: product = [], isLoading: loading, refetch