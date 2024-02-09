import { FaCartPlus, FaHouseCircleCheck } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link, useLocation, useNavigate } from "react-router-dom";


const FlashItems = ({ product }) => {
  const { _id, name, image, price, category, quality, ratings } = product;

  const [rating, setRating] = useState(0)

  const { user } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const Navigate = useNavigate();
  const location = useLocation()

  const handleAddCart = (item) => {
    console.log(item)
    if (user) {
      const orderItem = { productId: _id, name, image, quality, ratings, email: user.email, status: "payment_pending" }
      console.log(orderItem)
      axiosSecure.post("/carts", orderItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
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
          Navigate("/login", { state: { from: location } })
        }
      });
    }
  }

  const per = parseInt((price/((price+200)-price))*100)
  
  return (
    <Link to={`/products/${_id}`} className=''>
      <div className="card bg-slate-100 rounded-none h-[430px] mb-4">
        <figure className="">
          <img src={image[0].url} alt="Shoes" className="w-full h-[200px] " />
        </figure>
        <div className="absolute right-3 top-2">
          <button className="flex items-center btn bg-amber-700 text-white btn-sm text-[15px]">Buy</button>
        </div>
        <div className="card-body font-serif items-start ">
          <h2 className=" font-bold text-start">{name}| {category}</h2>
          <span className="text-start">${price} </span>
          <span><del className="text-slate-500">${price+200}</del><span className="pl-1 text-teal-600">-{per}%</span></span>
          <span></span>
          <p className="grid grid-cols-2 items-center justify-between gap-6">
            <span><Rating style={{ maxWidth: 70 }} value={ratings} onChange={setRating} /></span>
            <span className='text-amber-500 flex items-center'><FaHouseCircleCheck className="text-xl"></FaHouseCircleCheck><span> {quality}</span></span>
          </p>
          <div className="card-actions mt-3  ml-3">
            <button onClick={() => handleAddCart(product)} className="btn btn-sm bg-amber-700 text-white">Add To Cart<FaCartPlus ></FaCartPlus></button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlashItems;