import React, {Fragment} from 'react';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import './Menu.css';
import {Link, Route} from 'react-router-dom';

const Menu = ({match}) => {
  return (
    <Navbar className=' padding-left padding-right white' collapseOnSelect expand="lg">
      <Navbar.Brand className="poppins-bold" ><Link to='/'>UnBox</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="Questions" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to= '/'>What is food insecurity?</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/'>Who is food insecure?</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/'>Where does food insecurity occur?</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/'>What causes food insecurity?</Link></NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link><Link to = "/questions">Questions</Link></Nav.Link>
          <Nav.Link><Link to = "/maps">Maps</Link></Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link href="signin"><Button variant="outline-primary">Sign in</Button></Nav.Link>
          <Nav.Link href="signup"><Button>Sign Up</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
