

import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
   
    
     
 const handleNewUser = (event) =>{
     event.preventDefault();
     const name = event.target.name.value;
     const suppliyerName = event.target.suppliyerName.value;
     const picture = event.target.picture.value;
     const description = event.target.description.value;
     const quantitys = event.target.quantity.value;
     const quantity = parseInt(quantitys)

     const price = event.target.price.value;
     const email = user.email;

     const newItem = {name, suppliyerName, picture,email,description,quantity,price};
    const url = 'https://dry-mountain-03904.herokuapp.com/computers/';
     fetch(url , {
        method: "POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newItem)
      }).then(res => res.json())
        .then(data => {
           
            console.log(data)
            
            event.target.reset()
        })
    
        
       
 }
    return (
        <div className='text-center'>
            <h1>Add New Item</h1>
            <form onSubmit={handleNewUser}>
                <input type="text" name="name" id="" placeholder='name'/><br />
                <input type="text" name="suppliyerName" placeholder='suppliyerName' id="" />
                <br />
                <input type="text" name="picture" placeholder='image url' id="" />
                <br />
                <textarea type="text" name="description" 
                placeholder='description' id="" />
                <br />
                <input type="text" name="quantity" placeholder='quantity' id="" />
                <br />
                <input type="text" name="price" placeholder='price' id="" />
                <br />
                <input className='btn btn-primary' type="submit" value="Add New Item" />
                </form>
           
        </div>
    );
};

export default AddNewItem;