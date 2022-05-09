import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct/useProduct';
import './ManageProducts.css'

const ManageProducts = () => {
    const [myComputers, setMyComputers] = useProduct();


    const handleDelete = (id) =>{
        const confirm = window.confirm('Are you Sure Delete me?');
        if(confirm){
            const url = `https://dry-mountain-03904.herokuapp.com/computers/${id}`;
            fetch(url , {
                method: "DELETE",
              }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount >0 ){
                       const reaminingData = myComputers.filter(computer => computer._id !==id);
                       setMyComputers(reaminingData)
                    }
                })
             }
        }
    
    return (
        <div className='my-card'>
            {
                myComputers.map(computer => <Card key={computer._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={computer.picture} />
                <Card.Body>
                  <Card.Title>{computer.name}</Card.Title>
                  <Card.Text>
                   {computer?.description?.slice(0,50)}
                  </Card.Text>
                 
                </Card.Body>
                <button className="btn btn-danger" onClick={ () =>handleDelete(computer._id)}>delete me</button>
              </Card>
              
              )
              
            }
            <Link to = "/newItem">Add New Item</Link>
        </div>
    );
};

export default ManageProducts;