import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const NavbarFC = ()=>{
    const isAuth=false;
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">ASK ME</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/quizzes">Quizzes</Nav.Link>
                </Nav>
                <Nav>
                    {
                        (isAuth)
                        ?(<>
                            <Nav.Link as={NavLink} to="/signin">Profile</Nav.Link>
                            <Nav.Link as={NavLink} to="/signup">Sign Out</Nav.Link>
                        </>)
                        :(<>
                            <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
                            <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                        </>)
                    }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}
export default NavbarFC;