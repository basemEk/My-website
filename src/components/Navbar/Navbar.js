import React from "react";
import { Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap';
import "./Navbar.css";
import ImgNav from '../images/resize-itworks.png';
import ImgBanner from '../images/resized-cover.jpg';


function NavbarLanding() {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={ImgNav} /> IT Works</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
  <div className="langing-page-banner">
    <img src={ImgBanner} width='100%' />
      <div className="centered">
      <div className="hero">
      <h1 id="h1-customer">Need A Help?</h1>
      <h1 className="h1-h3">Contact a support service</h1>
      <h3 className="h1-h3">Our Web developers and IT agents are onse of the best Nurds in the local tech community
      <br/> They are standing by to help you</h3><br/>
      <Button variant="primary"><b>Contact Support</b></Button>
      </div>
      </div>

  </div>

</div>
  );
}

export default NavbarLanding;
