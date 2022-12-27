import react from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';

import { useNavigate } from 'react-router-dom'

// set up the contact info page with a redirect back to the home page 
const Info = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact Info</h1>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    );
}
