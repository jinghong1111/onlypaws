import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate, BrowserRouter,Switch,Router} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navigation/navbarElements';

function App() {
  return (
  <div className="App">
    <Navbar />
    {/* setting up the routes*/} 
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />




    </Routes>
    </div>

  );
    

}

export default App;
