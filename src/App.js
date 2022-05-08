
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './component/AddNewItem/AddNewItem';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import ManageItems from './component/ManageItems/ManageItems';
import ManageProducts from './component/ManageProducts/ManageProducts';
import MyItems from './component/MyItems/MyItems';

import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';
import RequireAuth from './component/RequreAuth/RequreAuth';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
    
    <Route path='/productDetals/:productId' element= {<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
    <Route path='/manageProduct' element ={<ManageProducts></ManageProducts>}></Route>
    <Route path='/newItem' element= {<AddNewItem></AddNewItem>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
    <Route path='/myItems' element={<MyItems></MyItems>}></Route>
    
    <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
