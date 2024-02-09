import { Link} from "react-router-dom";

const CategoryRaw = ({ item }) => {

  const { _id, name, image, price, ratings, quality, category } = item;
  

  return (
  <Link to={`/products/${_id}`} className=''>
      <div className="card bg-black border-4 border-zinc-700 shadow-xl rounded-none mb-4">
           <img className="  w-full h-[200px]" src={image[0].url} alt="" />
           {/* <div className="relative top-5"> */}
             <p className="absolute right-1 top-2 font-serif bg-black rounded-xl px-4 py-1 text-[12px] text-white">{quality}</p>
           {/* </div> */}
           <div className="flex text-white px-3 py-3 justify-between items-center">
              <p className="text-sm font-serif">{name}</p>
              <p className="text-sm ">${price}</p>
           </div>
      </div>
   </Link>
  );
};

export default CategoryRaw;

