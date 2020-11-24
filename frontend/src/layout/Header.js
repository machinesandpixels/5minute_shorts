import React from 'react';
import { BsTerminalFill } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    return (
        <Navbar variant="light">
        <Navbar.Brand className="text-white" href="#home">
            D e v 
            <BsTerminalFill
            className="ml-3 mr-3" />
            S a n d b o x
        </Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link className="text-white" href="#home">
              T h e m e s
            </Nav.Link>
            <Nav.Link className="text-white" href="#features">
                L o g i n
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
                S i g n u p
            </Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Header;
