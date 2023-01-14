import Button from 'react-bootstrap/Button';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { StyleSheet, Text, View } from 'react-native';
//import { UserContext } from "../../contexts/user.context";


import React, { Component }  from 'react';

import './Navbar.css'

const NavScrollExample = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="http://localhost:3000">I'm not Latte</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link to="/Home"> Home</Nav.Link> */}
            <Nav.Link href="http://localhost:3000/about">About</Nav.Link>
            <NavDropdown title="Order" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Make an order</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Past orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Summary
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://localhost:3000/contact">Contact</Nav.Link>
            <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
            {/* <Nav.Link href "http://localhost:3000/login" onClick{()=>localStorage.clear()};
            }>Logout</Nav.Link> */}
            {/* <Nav className=" my-2 ">
              <NavDropdown>
              <li><button type='button' onClick={logOutUser}>Logout</button></li>
               
              </NavDropdown>
            </Nav> */}
            
            {/*Adding the search bar */}
            <Nav.Link href="http://localhost:3000/search_bar">Search Location</Nav.Link> 
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              placeholder='enter' 
              // defaultValue={this.state.form.name}
              // onChange={this.handleChange.bind(this)}
            />
            <Button variant="outline-success">Search</Button>  */}
   
          {/* </Form> */}



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;