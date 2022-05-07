
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './component/AddNewItem/AddNewItem';
import Header from './component/Header/Header';
import ManageProducts from './component/ManageProducts/ManageProducts';
import MyComputers from './component/MyComputers/MyComputers';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
    <Header></Header>
     <Routes>
    <Route path='/' element={<MyComputers></MyComputers>}></Route>
    <Route path='/mycomputers' element={<MyComputers></MyComputers>}></Route>
    <Route path='/productDetals/:productId' element= {<ProductDetails></ProductDetails>}></Route>
    <Route path='/manageProduct' element ={<ManageProducts></ManageProducts>}></Route>
    <Route path='/newItem' element= {<AddNewItem></AddNewItem>}></Route>
     </Routes>
    </div>
  );
}

export default App;
