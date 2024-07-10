import { Form, Link, useLoaderData, useParams } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import CategoryRaw from "./CategoryRaw";
import LeftNavber from "../Navber/LeftNavber";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import ListCategory from "./ListCategory";


const CategoryItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const category = useLoaderData();
  const [search, setSearch] = useState('')
  const [gridMode, setGridMode] = useState(true)
  const [searchResult, setSearchResult] = useState([])
  const [sortingResult, setSortingResult] = useState("asc")
  const [loading, setLoading] = useState(true);


  const searchText = (e) => {
    const textInput = e.target.value;
    setSearch(textInput)
    setLoading(false)

  }
  const handleTheCategory = () => {
    setSearchResult(category)
    setLoading(false)
  }
  useEffect(() => {
    handleTheCategory();
  }, [category]);

  const handleAllTheCategory = () => {
    axiosSecure("/products")
      .then(res => {
        setSearchResult(res.data)
        setLoading(false)
      })
  }
  const handleSearch = (search) => {
    console.log(search)
    axiosSecure.get(`/search/${search}`)
      .then(res => {
        console.log(res.data)
        setSearchResult(res.data)
        setLoading(false)
      })
  }

  const handleRawCategory = () => {
    setGridMode(true)
    setLoading(false)
  }
  const handleListCategory = () => {
    setGridMode(false)
    setLoading(false)
  }

  const handleSorting = (order) => {
    console.log('Before Sorting:', searchResult);
    setSortingResult(order);
    setLoading(false)

    const sortedResults = [...searchResult].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      //   return order === 'asc' ? priceA - priceB : priceB - priceA;
      if (order === 'asc') {
        return priceA - priceB;
      } else if (order === "dsc") {
        return priceB - priceA;
      }
      else {
        return 0;
      }
    });

    console.log('After Sorting:', sortedResults);

    setSearchResult(sortedResults);
    setLoading(false);
  };


  return (
    <div className=" px-24 pt-14 bg-base-100">

      <div className="flex  pt-14 justify-center gap-16">
        <div className="w-2/12 fixed left-5 bg-base-100">
          <div className="flex gap-1 mb-8">
            <input type="text" onChange={searchText} placeholder="Search here" className="input h-8 input-bordered input-accent w-full max-w-xs" />
            <button onClick={() => handleSearch(search)} className=" bg-sky-600 h-8 px-2 rounded text-sm text-white ">Search</button>
          </div>
          <LeftNavber
            handleCategory={handleTheCategory}
            handleAllCategory={handleAllTheCategory}
          ></LeftNavber>
        </div>
        <div className="w-10/12 flex ml-52  flex-col gap-8 justify-center items-center">
          <div className="flex justify-between items-center w-10/12  rounded-lg ">
            <div className="flex items-center  mb-6 gap-4">
              <button className="bg-slate-300 text-2xl" onClick={() => handleRawCategory()}><IoGrid ></IoGrid></button>
              <button className="bg-slate-300 text-2xl" onClick={() => handleListCategory()}><FaListAlt></FaListAlt></button>
            </div>
            <div className="text-slate-500">Available products {searchResult.length}</div>
            <Form>
              <select defaultValue="sorting as price" name="sort" id="" className="text-sm text-slate-500 px-2 pb-[2px] border-slate-200 border-2 rounded-xl"
                onChange={(e) => handleSorting(e.target.value)}>
                <option disabled hidden>sorting as price</option>
                <option value="asc">Price(Highest)</option>
                <option value="dsc" >Price(Lowest)</option>

              </select>
            </Form>
          </div>

          {
            loading ? <div className='flex flex-col items-center justify-center'>
              <span className='flex justify-center items-center gap-2'>loading <span className="loading loading-spinner text-amber-700 loading-lg "></span></span>
            </div>:
              <>
                {gridMode ?
                  <div className="grid mx-20 w-10/12 md:grid-cols-3 lg:grid-cols-3 mb-14 gap-3 justify-center items-center ">
                    {
                      searchResult.map(item => <CategoryRaw
                        key={item._id}
                        item={item}
                      ></CategoryRaw>)
                    }
                  </div> :
                  <div className="flex flex-col mb-14 gap-3 justify-center items-center">
                    {
                      searchResult.map(item => <ListCategory
                        key={item._id}
                        item={item}>
                      </ListCategory>)
                    }
                  </div>}
              </>
          }
          {/* {searchResult.length>0?( searchResult.map(item => <CategoryRaw 
                        key = {item._id}
                        item = {item}></CategoryRaw>)) : (
                   category.map(item => <CategoryRaw 
                        key = {item._id}
                        item = {item}></CategoryRaw>) 
             )} */}
        </div>
      </div>

    </div>
  );
};

export default CategoryItem;
