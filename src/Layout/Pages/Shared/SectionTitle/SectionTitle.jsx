import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='mx-auto md:w-4/12 text-center my-5'>
            <p className='text-[#d08d27] mb-2 ' style={{fontStyle:"italic"}}>{subHeading}</p>
            <p className='uppercase font-serif pb-2 text-3xl border-y-2 pt-6'>{heading}</p>
        </div>
    );
};

export default SectionTitle;