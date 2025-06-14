
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const UseAdmin = () => {
    const {user, loading} = useAuth();
   const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin = [], isLoading: isAdminLoading} = useQuery({
        queryKey: ["isAdmin" , user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log('is admin ?' , res.data)
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;