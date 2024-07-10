import { FaCircleDollarToSlot, FaCoins, FaGratipay, FaHandshake, FaHouseCircleCheck, FaRotateLeft, FaTruck } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const BenefitsForSmall = () => {
    return (
        <div>
        <div className="md:hidden mx-6 lg:hidden mb-16">
        <div data-aos="fade-left" data-aos-duration="1000"  className="mb-5 py-12 bg-orange-100  flex flex-col  gap-2 text-center  text-[30px] justify-center font-serif rounded-box place-items-center"><FaHouseCircleCheck className='text-orange-500 text-5xl'></FaHouseCircleCheck> Customer Satisfication <br />&safe Payments</div>
        <div data-aos="fade-right" data-aos-duration="1000" className=" py-14 mb-5 bg-orange-100  flex flex-col gap-2 text-center  text-[30px] justify-center font-serif rounded-box place-items-center"><FaRotateLeft className='text-sky-800 text-5xl'></FaRotateLeft> Free & Easy <br />Returns</div>
        <div data-aos="fade-left" data-aos-duration="1000" className=" py-14 b-5 bg-orange-100  flex flex-col gap-2 text-center  text-[30px] justify-center font-serif rounded-box place-items-center"><FaTruck className='text-green-700 text-5xl'></FaTruck> 100% Authentic <br />Product</div>
        
        </div>
    </div>
    );
};

export default BenefitsForSmall;