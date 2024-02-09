import { FaCircleDollarToSlot, FaCoins, FaGratipay, FaHandshake, FaHouseCircleCheck, FaRotateLeft, FaTruck } from "react-icons/fa6";

const Benefits = () => {
    return (
        <div className='mt-16 mb-16'>
            <div className="flex w-full py-2 rounded-xl bg-red-50 ">
                <div className="flex-grow flex gap-2 justify-center font-serif rounded-box place-items-center"><FaHouseCircleCheck className='text-orange-500 text-2xl'></FaHouseCircleCheck> Customer Satisfication</div>
                <div className="divider divider-horizontal"></div>
                <div className="  flex-grow font-serif flex justify-center gap-2 rounded-box place-items-center"><FaCircleDollarToSlot className='text-green-600 text-2xl'></FaCircleDollarToSlot> Safe Payments</div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow font-serif flex justify-center gap-2 rounded-box place-items-center"><FaRotateLeft className='text-sky-800 text-2xl'></FaRotateLeft> Free & Easy Returns</div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow font-serif flex justify-center gap-2 rounded-box place-items-center"><FaGratipay className='text-orange-500 text-2xl'></FaGratipay>Review & Ratings</div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow flex gap-2 justify-center rounded-box place-items-center"><FaHandshake className='text-green-600 text-2xl'></FaHandshake>24/7<span className='font-serif'>Updated</span></div>
            
                <div className="divider divider-horizontal"></div>
                <div className="flex-grow flex gap-2 justify-center font-serif rounded-box place-items-center"><FaTruck className='text-orange-500 text-2xl'></FaTruck>100% Authentic Product</div>
            </div>
        </div>
    );
};

export default Benefits;