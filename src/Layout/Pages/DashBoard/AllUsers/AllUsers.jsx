import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrash, FaTrashCan, FaUserPlus } from "react-icons/fa6";
import Swal from 'sweetalert2';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const res = await axiosSecure("/users")
            console.log(res.data)
            return res.data
        }
   })


   const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Do you want to make admin ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.modifiedCount){
            refetch();
            Swal.fire({
              title: "Done!",
              text: `Done! ${user.name} is a admin now!`,
              icon: "success"
            });
          }
        })
      }
    });
   }

   const handleDeleteUser=(user)=>{
    Swal.fire({
      title: "Are you sure?",
      text: `Do want to delete ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    })
    .then((result) => {
      if (result.isConfirmed) 
      {
        axiosSecure.delete(`/users/admin/${user._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.deletedCount>0){
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `Done! ${user.name} is deleted!`,
              icon: "success"
            });
          }
        })
      }
   })
  }
    
    return (
        <div className='h-full w-full px-5 lg:px-20 md:px-20 md:mt-8 lg:mt-8 mt-16 mb-8'>
           <SectionTitle subHeading="---At a Glance---" heading="All Users"></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table table-zebra mt-8">
    {/* head */}
    <thead className='bg-[#d08d27] text-white text-center text-[15px]'>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => <tr key = {user._id} className='text-center  font-semibold text-slate-600'>
        <th className='md:py-4 lg:py-4 text-[10px] md:text-[16px] lg:text-[16px]'>{index+1}</th>
        <td className='md:py-4 lg:py-4 text-[10px] md:text-[16px] lg:text-[16px]'>{user.name}</td>
        <td className='text-[10px] md:text[16px] lg:[text-16px]'>{user.email}</td>
        <td className=''>{user.role === "admin"? "admin" : <button onClick={()=>handleMakeAdmin(user)}> <FaUserPlus className='text-xl md:text-3xl lg:text-3xl text-amber-700'></FaUserPlus></button>}</td>
        <td className='text-center'><button onClick={()=>handleDeleteUser(user)}><FaTrashCan className=' text-xl md:text-3xl lg:text-3xl text-orange-700'></FaTrashCan></button></td>
      </tr> )}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;