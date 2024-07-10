import { FaCircleDollarToSlot, FaCoins, FaGratipay, FaHandshake, FaHouseCircleCheck, FaRotateLeft, FaTruck } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Benefits = () => {

    return (
        <div className='md:mt-16 lg:mt-16 -mt-28 -mb-10 lg:mb-10 md:mb-10'>
            <div className="md:flex lg:flex hidden md:visible lg:visible w-full py-2 rounded-xl bg-red-50 ">
                <div  className="flex-grow flex gap-2 justify-center font-serif rounded-box place-items-center"><FaHouseCircleCheck className='text-orange-500 text-2xl'></FaHouseCircleCheck> Customer Satisfication</div>
                <div className="divider divider-horizontal"></div>
                <div  className="flex-grow font-serif flex justify-center gap-2 rounded-box place-items-center"><FaCircleDollarToSlot className='text-green-600 text-2xl'></FaCircleDollarToSlot> Safe Payments</div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow font-serif flex justify-center gap-2 rounded-box place-items-center"><FaRotateLeft className='text-sky-800 text-2xl'></FaRotateLeft> Free & Easy Returns</div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow font-serif flex justify-center gap-2 rounded-box place-items-center"><FaGratipay className='text-orange-500 text-2xl'></FaGratipay>Review & Ratings</div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow  flex gap-2 justify-center rounded-box place-items-center"><FaHandshake className='text-green-600 text-2xl'></FaHandshake>24/7<span className='font-serif'>Updated</span></div>
            
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow flex gap-2 justify-center font-serif rounded-box place-items-center"><FaTruck className='text-orange-500 text-2xl'></FaTruck>100% Authentic Product</div>
            </div>
             {/* <div className="md:hidden mx-6 lg:hidden mb-16">
        <div data-aos="fade-right" data-aos-duration="1000"  className="py-2 mb-5 bg-orange-100  flex   gap-2 text-center text-xl  justify-center font-serif rounded-box place-items-center"><FaHouseCircleCheck className='text-orange-500 text-xl'></FaHouseCircleCheck> Customer Satisfication </div>
        <div data-aos="fade-left" data-aos-duration="1000" className=" py-2 mb-5 bg-orange-100  flex  gap-2 text-center  text-xl justify-center font-serif rounded-box place-items-center"><FaRotateLeft className='text-sky-800 text-xl'></FaRotateLeft> Free & Easy Returns</div>
        <div data-aos="fade-right" data-aos-duration="1000" className=" py-2 b-5 bg-orange-100  flex  gap-2 text-center  text-xl justify-center font-serif rounded-box place-items-center"><FaTruck className='text-green-700 text-xl'></FaTruck> 100% Authentic Product</div>
             </div> */}
        </div>
    );
};

export default Benefits;