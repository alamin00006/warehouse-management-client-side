import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'


const ProductDetails = () => {
    const {productId} = useParams();
    
 const [oneComputer, setOneComputer] = useState({});
 const [reload, setReload] = useState(true);

// console.log(oneComputer);
 useEffect( () =>{
     const url = `http://localhost:5000/computers/${productId}`;
     fetch(url)
     .then(res =>res.json())
     .then(data =>setOneComputer(data))
    
 }, [reload])

const handleNewQuantity = (event) =>{
  event.preventDefault();
  const quantity = parseInt(event.target.quantity.value)+ parseInt(oneComputer.quantity);
  const newQuantity = {quantity};
  const url = `http://localhost:5000/computers/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            // alert('users added successfully!!!');
           setReload(!reload)
        })
}



 const deliverdHandle = () =>{

 
    const quantity = parseInt(oneComputer.quantity)-1;
  console.log(quantity)
 
  const updateQuantity = {quantity}
  const url = `http://localhost:5000/computers/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
           
            setReload(!reload)
        })
  
 }


    return (
        <div className='container manage-product'>
           
           <h4> Product Name : {oneComputer.name}</h4>
           <img src={oneComputer.picture} alt="" />
           <p> Descripiton :{oneComputer.description}</p>
           <p> Quantity :{oneComputer.quantity}</p>
           <p> suppliyer Name: {oneComputer.suppliyerName}</p>
           <p> Total Sold: {oneComputer.sold}</p>
           
           <p> Price :{oneComputer.price}</p>
          <form onSubmit={handleNewQuantity}>
          <input type="number" name = "quantity"  />
           <br />
           <input type="submit" value="newQuantity" />
          </form>
           
           <button className='btn btn-warning' onClick={deliverdHandle}>Deliverd</button>
        </div>
    );
};

export default ProductDetails;