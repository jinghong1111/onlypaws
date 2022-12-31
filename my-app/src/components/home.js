import React from 'react';
import { Button } from 'react-bootstrap';

// use css to style the buttons to the bottom of the page 
// and to give them a margin of 10px



function Home() {
  return (
    <div className="home-page">

      <div className="buttons">
        <Button variant="primary" size="lg" href="/search">Search</Button>
        <Button variant="primary" size="lg" href="/about">About</Button>
      </div>
    </div>
  );
}

export default Home;
