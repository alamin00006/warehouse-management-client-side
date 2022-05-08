import React from 'react';
import { Link } from 'react-router-dom';


import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MyComputers from '../MyComputers/MyComputers';
const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <MyComputers></MyComputers>
           <Footer></Footer>

            {/* <Link className='text-center' to ='/manageProduct'>Manage Products</Link> */}
        </div>
    );
};

export default Home;