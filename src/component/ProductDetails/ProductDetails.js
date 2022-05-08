import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const {productId} = useParams();
    
 const [oneComputer, setOneComputer] = useState({});

// console.log(oneComputer);
 useEffect( () =>{
     const url = `http://localhost:5000/computer/${productId}`;
     fetch(url)
     .then(res =>res.json())
     .then(data =>setOneComputer(data))
  
  
 }, [])
 const deliverdHandle = (quantiy) =>{
  const quantity = parseInt(quantiy-1);
  const updateQuantity = {quantity}
  const url = `http://localhost:5000/computer/${productId}`
  fetch(url , {
    method: "PUT",
    headers:{
      'content-type' : 'application/json'
    },
    body:JSON.stringify(updateQuantity)
  }).then(res => res.json())
  .then(data => {
    console.log(data)
    if(data?.modifiedCount >0 ){
     
      
   }
  })
 }


    return (
        <div className='container'>
           
           <h4> Product Name : {oneComputer.name}</h4>
           <p> Descripiton :{oneComputer.description}</p>
           <p> Quantity :{oneComputer.quantiy}</p>
           <p> suppliyer Name: {oneComputer.suppliyerName}</p>
           <p> Total Sold: {oneComputer.sold}</p>
           
           <p> Price :{oneComputer.price}</p>
           
           <img src={oneComputer.picture} alt="" />
           <button className='btn btn-warning' onClick={() => deliverdHandle(oneComputer?.quantiy)}>Deliverd</button>
        </div>
    );
};

export default ProductDetails;