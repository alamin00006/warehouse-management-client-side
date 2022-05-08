
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    

    const handleDelete = (id) =>{
        const confirm = window.confirm('Are you Sure Delete me?');
        if(confirm){
            const url = `http://localhost:5000/computers/${id}`;
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
        console.log(email)
        const url = `http://localhost:5000/computers?email=${email}`;
       await fetch(url)
        .then(res =>res.json())
        .then(data => setMyItems(data));
        }
        findEmail()
    },[user?.email])


     return (
        <div>
            <h1>this my items{myItems.length}</h1>
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
    );
};

export default MyItems;