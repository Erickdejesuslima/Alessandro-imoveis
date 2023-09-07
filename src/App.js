import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Galeria, { InstaFeed } from "./components/Galeria";
import Contato from "./components/Contato";
import './App.css'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contato" element={<Contato />} />
            
            
           
          </Routes>
        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;