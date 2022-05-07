
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './component/AddNewItem/AddNewItem';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp/SignUp';
import ManageProducts from './component/ManageProducts/ManageProducts';
import MyComputers from './component/MyComputers/MyComputers';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
    <Header></Header>
     <Routes>
    <Route path='/' element={<MyComputers></MyComputers>}></Route>
    <Route path='/mycomputers' element={<MyComputers></MyComputers>}></Route>
    <Route path='/productDetals/:productId' element= {<RequireAuth><ProductDetails></ProductDetails> </RequireAuth>}></Route>
    <Route path='/manageProduct' element ={<ManageProducts></ManageProducts>}></Route>
    <Route path='/newItem' element= {<AddNewItem></AddNewItem>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
