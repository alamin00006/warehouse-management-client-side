
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct/useProduct';
import Computer from './Computer/Computer';

const MyComputers = () => {
const [myComputers] = useProduct();

 console.log(myComputers)


    return (
        <div id='MyComputers'>
            <h1 className='text-center'>My Computers{myComputers?.length}</h1>
            {
                myComputers?.slice(0, 6).map(computer => <Computer key={computer._id} computer = {computer}></Computer>)
            }
             <Link to = "manageProduct">Manage Products</Link>   
        </div>
    );
};

export default MyComputers;