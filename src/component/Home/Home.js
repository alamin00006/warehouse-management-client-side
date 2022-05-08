import React from 'react';
import { Link } from 'react-router-dom';


import Banner from '../Banner/Banner';
import MyComputers from '../MyComputers/MyComputers';
const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <MyComputers></MyComputers>

            {/* <Link className='text-center' to ='/manageProduct'>Manage Products</Link> */}
        </div>
    );
};

export default Home;