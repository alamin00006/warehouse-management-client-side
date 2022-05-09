import React from 'react';
import offer from '../../images/offer.jpg'
const Offer = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='bg-warning'><span className='border px-2 '>Product Offer</span> </h1>
            <h4>All Product 50% off</h4>
           <img src={offer} alt="" /> 
        </div>
    );
};

export default Offer;