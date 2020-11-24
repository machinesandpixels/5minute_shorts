import React from 'react';
import { BsTerminalFill } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    return (
        <Navbar variant="light">
        <Navbar.Brand className="text-white" href="#home">
            Dev 
            <BsTerminalFill
            className="ml-3 mr-3" />
            Sandbox
        </Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link className="text-white" href="#home">
              Themes
            </Nav.Link>
            <Nav.Link className="text-white" href="#features">
                Login
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
                Signup
            </Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Header;
