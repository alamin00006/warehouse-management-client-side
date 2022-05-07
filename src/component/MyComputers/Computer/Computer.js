import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Computer.css'

const Computer = (props) => {
 const{_id, name, description, picture, quantiy, price, suppliyerName} = props.computer;
 const navigate = useNavigate()
 const handleUpdate  = (id) =>{
 navigate(`/productDetals/${id}`)
 }


    return (
        <div className='container product-container'>
            <h4>Product Name : {name}</h4>
            <img src={picture} alt="" />
            <p> Descripiton{description}</p>
            <p> Quantity : {quantiy}</p>
            <p> Price : {price}</p>
            <p> Suppliyer Name: {suppliyerName}</p>
                <button className='btn btn-primary rounded' onClick={ () => handleUpdate(_id)}>Update</button>
        </div>
    );
};

export default Computer;