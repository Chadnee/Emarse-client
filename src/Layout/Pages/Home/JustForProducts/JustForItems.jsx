import { FaCartPlus, FaHouseCircleCheck  } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";

const JustForItems = ({product}) => {
    const  {_id, name, image, price, category, quality, ratings} = product;

  const [rating, setRating] = useState(0)
     const { user } = useAuth()
     const [axiosSecure] = useAxiosSecure()
     const Navigate = useNavigate();
     const location = useLocation()
     
    

      //create a new date object
      const currentDate = new Date();

      // get day, month, and year
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Months are zero-based so we add 1
      const year = currentDate.getFullYear();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const date = day + "-" + month + "-" + year + ";" + " " + hour + "." + minutes;
      const Quantity = 1;
     const handleAddCart = (item) => {
      console.log(item)
      if (user) {
        const orderItem = { productId: _id, name,image : image[0].url , quality, ratings, price, Quantity, email: user.email, status: "payment_pending", customerName: user.displayName, date  }
        console.log(orderItem)
        axiosSecure.post("/carts", orderItem)
          .then(res => {
            console.log(res.data)
            if (res.data.insertedId){
              Swal.fire({
                icon: "success",
                title: "The product is successfully added.",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
  
      }
      else {
        Swal.fire({
          title: "Please Login to order the product",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login"
        }).then((result) => {
          if (result.isConfirmed) {
            Navigate("/login", {state: {from:location}})
          }
        });
      }
    }
    const per = parseInt((price/((price+200)-price))*100)
     
    return (
        <div className='shadow-2xl'>
           <div className="card  rounded-none h-[400px] md:h-[430px] lg:h-[430px]">
  <figure className="">
    <img src={image[0].url} alt="Shoes" className="w-full h-[200px] " />
  </figure>
  <div className="absolute right-3 top-2">
    <button className="flex items-center btn bg-amber-700 text-white btn-sm text-[15px]">Buy</button>
  </div>
  <div className="card-body font-serif items-start ">
    <h2 className=" font-bold text-start text-[13px]">{name}| {category}</h2>
    <span className="font-[strike] text-[18px] ">${price}</span>
    <p className="flex justify-between gap-1"><span className="font-[strike] text-[18px]"><del>800</del> <span className="pl-1 text-teal-600">-{per}%</span></span></p>
      <p className="grid grid-cols-2 items-center justify-between gap-6">
      <span><Rating style={{ maxWidth:70 }} value={ratings} onChange={setRating} /></span>
      <span className='text-amber-500 flex items-center'><FaHouseCircleCheck className="text-xl"></FaHouseCircleCheck><span> {quality}</span></span>
      </p>
   <div className="card-actions ml-3">
      <button onClick={() => handleAddCart(product)} className="btn btn-sm bg-amber-700 text-white">Add To Cart<FaCartPlus ></FaCartPlus></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default JustForItems;