
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min'
import Home from './pages/Home';
import About from './pages/About';
import Projectos from './pages/Projectos';
import Comunicador from './pages/Comunicador';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Sobre" element={<About title="Sobre" />} />  
        <Route exact path="/Projectos" element={<Projectos title="Projectos" />} />  
        <Route exact path="/Comunicador" element={<Comunicador title="Comunicador" />} />  

      </Routes>
    </Router>
  );
}

export default App;



