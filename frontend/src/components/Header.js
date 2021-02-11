import React from "react";
import { Navbar, Nav} from 'react-bootstrap';

const Header=()=>{
return(
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/aws_crud_view">Users</Nav.Link>
        <Nav.Link href="#pricing">Delete</Nav.Link>
        </Nav>
   
    </Navbar>
 
    </>
)
}
export default Header