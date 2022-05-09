import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import './Computer.css'

const Computer = (props) => {
 
 const{_id, name, description, picture, quantity, price, suppliyerName, userEmail} = props?.computer;
 const navigate = useNavigate()
 const handleUpdate  = (id) =>{
 navigate(`/computers/${id}`)
 }
 const [user, loading] = useAuthState(auth);
 if(loading){
   return <Loading></Loading> ;  
 }


    return (
        <div className='container product-container
        col-lg-4 col-sm-12'>
            <div>
            <h4>Product Name : {name}</h4>
            <img src={picture} alt="" />
            <p> Descripiton{description}</p>
            <p> Quantity : {quantity}</p>
            <p> Price : {price}</p>
           
            <p> Suppliyer Name: {suppliyerName}</p>
                <button className='btn btn-primary rounded' onClick={ () => handleUpdate(_id)}>Update</button>
            </div>
        </div>
    );
};

export default Computer;