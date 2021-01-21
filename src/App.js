import "./App.css";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLanding from "./components/Navbar/Navbar";
import ContactForm from "./components/ContactForm/ContactForm";
import { Button, Navbar, Form, Nav, FormControl } from "react-bootstrap";
import "../src/components/Navbar/Navbar.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ImgNav from "./components/images/resize-itworks.png";


function App() {
  return (
    <div>
      <Router>
        <main>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img src={ImgNav} /> IT Works
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <Switch>
            <Route path="/" exact component={NavbarLanding} />
            <Route path="/contact" component={ContactForm} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
