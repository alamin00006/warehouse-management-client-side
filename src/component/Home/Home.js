import React from 'react';



import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MyComputers from '../MyComputers/MyComputers';
import Offer from '../Offer/Offer';
import OtherProduct from '../OtherProduct/OtherProduct';
const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <MyComputers></MyComputers>
           <Offer></Offer>
           <OtherProduct></OtherProduct>
           <Footer></Footer>

        </div>
    );
};

export default Home;