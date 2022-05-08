
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
   
 const handleNewUser = (event) =>{
     event.preventDefault();
     const name = event.target.name.value;
     const email = event.target.email.value;
     const picture = event.target.picture.value;
     const userEmail = user.email;

     const newItem = {name, email, picture,userEmail};
    const url = 'http://localhost:5000/computers/';
     fetch(url , {
        method: "POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newItem)
      }).then(res => res.json())
        .then(data => {
        
            event.target.reset()
        })
 }
    return (
        <div>
            <form onSubmit={handleNewUser}>
                <input type="text" name="name" id="" /><br />
                <input type="text" name="email" id="" />
                <br />
                <input type="text" name="picture" id="" />
                <br />
                <input type="submit" value="Add New Item" />
                </form>
           
        </div>
    );
};

export default AddNewItem;