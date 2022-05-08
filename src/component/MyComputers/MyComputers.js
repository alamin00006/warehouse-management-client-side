
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct/useProduct';
import Computer from './Computer/Computer';
import './MyComputers.css'
const MyComputers = () => {
const [myComputers] = useProduct();




    return (
        <div id='computers' className='computers'>
            <h1 className='text-center'>My Computers{myComputers?.length}</h1>
            {
                myComputers?.slice(0, 6).map(computer => <Computer key={computer._id} computer = {computer}></Computer>)
            }
             <Link className='text-center' to = "manageProduct">Manage Products</Link>   
        </div>
    );
};

export default MyComputers;