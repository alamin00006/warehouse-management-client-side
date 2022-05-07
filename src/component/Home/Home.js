import React from 'react';
import { Link } from 'react-router-dom';

import Navber from '../Navber/Navber';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            

            <Link to ='/manageProduct'>Manage Products</Link>
        </div>
    );
};

export default Home;