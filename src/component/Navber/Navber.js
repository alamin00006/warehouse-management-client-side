import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';
const Navber = () => {
  const [user] = useAuthState(auth);
  const SingOutHandle = ()=>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">My Computer Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#MyComputers">My Computers</Nav.Link>
     
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      

      {user?.email?<>
        <Nav.Link as={Link} to="/newItem">AddNewItem</Nav.Link>
        <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
        <Nav.Link as={Link} to="/manageProduct">manageProduct</Nav.Link>
       <p onClick={SingOutHandle} className="mt-2 text-white sing-Out">
       SingOut
       </p>
      
      </>
      
      :<Nav.Link as={Link} to="/login" className="text-white">
                  Login
                </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </div>
        
    );
};

export default Navber;