
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct/useProduct';
import Computer from './Computer/Computer';
import './MyComputers.css'

const MyComputers = () => {
const [myComputers] = useProduct();

    return (
        <div id='computers' className='computers'>
            <h1 className='text-center'>My Computers :{myComputers?.length}</h1>
            <div className='row gy-3'>
            {
                myComputers?.slice(0, 6).map(computer => <Computer key={computer._id} computer = {computer}></Computer>)
            }
            </div>
            <div>
            <Link className='text-center btn btn-warning' to = "manageProduct">Manage Products</Link>
                </div>   
        </div>
    );
};

export default MyComputers;