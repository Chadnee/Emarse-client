import Marquee from 'react-fast-marquee';
import useProducts from '../../../../hooks/useProducts';
import FlashItems from './FlashItems';
import FlashSmallItems from './FlashSmallItems';
import { FaGift } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const FlashProduct = () => {
    const [product, productLoading ] = useProducts()
   
    const flashProductAll = product.filter(product => (product.ratings === 5))

    const flashProductLargeDevice = flashProductAll.slice(0,5)
    const flashProductSmallDevice = flashProductAll.slice(0,10)
//     const productsss = flashProductSmallDevice.map(productsss => productsss._id)
//    console.log(productsss);
//    useEffect(()=>{
//     const productsss = flashProductSmallDevice.map(productsss => productsss._id)
//     console.log(productsss);
//    }, [])

    
   
   // make countdown for big sales
        const [days, setDays] = useState(0)
        const [hours, setHours] = useState(0)
        const [mins, setMins] = useState(0)
        const [secs, setsecs] = useState(0)

        // const deadline = "May, 08, 2024"
        //  const currentDate = "May,06, 2024"

        // const endingTime = new Date(deadline)
        // const currentTime = new Date(currentDate)
        const deadline = "May, 10, 2024"

const getTime =()=>{
            
            const time = new Date(deadline) - Date.now()
        // const time = Date.parse(deadline) - Date.now()
             // const time = Date.parse(deadline) - Date.parse(currentDate)
             setDays(Math.floor(time/(1000*60*60*24)))
             setHours(Math.floor(time/(1000*60*60)%24))
             setMins(Math.floor((time/1000/60)%60))
             setsecs(Math.floor((time/1000)%60))
         }

        useEffect(() => {
            const interval = setInterval(() => getTime(deadline), 1000)
            return ()=> clearInterval(interval)
        }, [])
        //console.log( days, hours, mins, secs)

        if(productLoading && flashProductAll<1 ) {
            return <div className='flex flex-col items-center justify-center'>
                <span className='flex justify-center items-center gap-2'>loading <span className="loading loading-spinner text-amber-700 loading-lg "></span></span>
                </div>;
        }
        
    return (
        <div className=''>
             <div className='  mx-auto'>
             <div className='flex mb-8 mx-1'>
               <div className='bg-amber-700 md:mr-0 lg:mr-0 -mr-56 -mb-8 md:mb-0 lg:mb-0 invisible md:visible lg:visible'>
               <button className=' border-2 border-white w-[200px]  my-4 py-2 ml-3 text-2xl text-white'>Latest Sale</button>
               </div>
               <div className='bg-amber-700 md:hidden lg:hidden '>
               <button className=' border-2 border-white w-[70px] my-2 py-2 ml-3 text-white'>Latest</button>
               </div>
                <Marquee className='text-white lg:text-xl md:text-xl  bg-gradient-to-r from-amber-700 to-amber-300' pauseOnClick={false} speed={30}>
            
           Offer! Offer!! Offer!!! The biggest sale of the year is running on flas Sales <FaGift className='text-2xl px-1'></FaGift>by 50% discount / 2024.
                </Marquee>
                 <div className='flex gap-2 text-white pl-2 lg:pl-5 md:pl-5 py-2 pr-2 lg:pr-4md:pr-4 bg-amber-700'>
                     
                 <span className='rounded-xl border-2 bors text-center p-1 text-[10px] md:text-[16px] lg:text-[16px] font-semibold'><span data-aos="flip-down">{days} days</span></span>
                 <span className='rounded-xl border-2 bors text-center p-1 text-[10px] md:text-[16px] lg:text-[16px] font-semibold'>{hours} hours</span>
                 <span className='rounded-xl border-2 bors text-center p-1 text-[10px] md:text-[16px] lg:text-[16px] font-semibold'>{mins} mins</span>
                 <span className='rounded-xl border-2 bors text-center p-1 text-[10px] md:text-[16px] lg:text-[16px] font-semibold'>{secs} secs</span>
                 </div>
                 

             </div>
             </div>
                <div className='bg-zinc-300 '>
            <p className='text-zinc-900 px-8 py-4 text-start text-2xl uppercase font-serif font-bold'>Flash Sales</p>
            <div className='hidden md:visible lg:visible md:grid lg:grid md:grid-cols-5 lg:grid-cols-5 mx-7 mb-14 gap-3 justify-center items-center '>
                {flashProductLargeDevice.map(product =>{return<FlashItems
                key = {product._id} product = {product}></FlashItems>} )}
            </div>
            <div className='visible md:hidden lg:hidden grid  grid-cols-2 mx-5 mb-10 gap-2 justify-center items-center '>
                {flashProductSmallDevice.map(item =><FlashSmallItems key = {item._id} item = {item}></FlashSmallItems>)}
            </div>
        </div>
        </div>
        
    );
};

export default FlashProduct;