import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate, BrowserRouter,Switch,Router} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
  <div className="App">
    {/* setting up the routes*/} 
    <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />

    </Routes>
    </div>
  );
    

}

export default App;
