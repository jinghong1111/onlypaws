import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate, BrowserRouter,Switch,Router} from 'react-router-dom';
import Home from './components/home';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
  <div className="App">
    <Navbar />
    {/* setting up the routes*/} 

    <Routes>

    <Route path="/" element={<Home />} />


    </Routes>
    </div>

  );
    

}

export default App;
