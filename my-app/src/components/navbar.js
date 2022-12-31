import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const NavigationStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: block;
    margin: 10px 0;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: blue;
  }
`;

function navbar() {
    return (
        <Navbar bg="light" expand="lg"> 
      <NavigationStyles className="navbar">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavigationStyles>
      </Navbar> 
    );
  }
  
  export default navbar;