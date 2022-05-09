
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
   
    

    const handleDelete = (id) =>{
        const confirm = window.confirm('Are you Sure Delete me?');
        if(confirm){
            const url = `https://dry-mountain-03904.herokuapp.com/computers/${id}`;
            fetch(url , {
                method: "DELETE",
              }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount >0 ){
                       const reaminingData = myItems.filter(computer => computer._id !==id);
                       setMyItems(reaminingData)
                    }
                })
             }
        }
      

    useEffect(() =>{
        async function  findEmail(){
            const email = user?.email;
             const url = `https://dry-mountain-03904.herokuapp.com/computers?email=${email}`;
             console.log(url)
       await fetch(url)
        .then(res =>res.json())
        .then(data => setMyItems(data));
        }
        findEmail()
    },[user])


     return (
        <div>
            <h1>This my items{myItems.length}</h1>

           
            
            <div className='myItems'>
            {myItems.map(computer => <Card key={computer._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={computer.picture} />
                <Card.Body>
                  <Card.Title>{computer.name}</Card.Title>
                  <Card.Text>
                   {computer?.description?.slice(0,50)}
                  </Card.Text>
                 
                </Card.Body>
                <button className='btn-danger' onClick={ () =>handleDelete(computer._id)}>delete me</button>
              </Card>
              
              )}
            </div>
        </div>
    );
};

export default MyItems;