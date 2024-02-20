import React from 'react';
import { Navbar, Nav, Col, Row, NavDropdown, Container } from 'react-bootstrap';

function Navibar() {
  return (
    <Row className="m-3 mb-2">
      <Col md={2}>
        <Navbar.Brand href="#home">
          <img
            src='/logo.png'
            height="110"
          />
         
        </Navbar.Brand>
      </Col>
      <Col md={10} className="px-5 text-end">
        <Row className="border-bottom border-dark"> 
          <Container className="text-end">
           <Navbar>
            
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#link">About</Nav.Link>
                 <Nav.Link href="#link">Shop</Nav.Link>
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                     Separated link
                   </NavDropdown.Item>
                 </NavDropdown>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
          </Container>
          
        </Row>
        <Row>
          <p><a href="">Login</a> | <a href="">Signup</a></p>
        </Row></Col>
      
    
    </Row>
   
  );
}


export default Navibar;