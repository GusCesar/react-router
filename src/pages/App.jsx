import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from '../components/navbar';
import About from '../pages/about';
import Home from '../pages/home';

function App(footer) {
    return (
          <Router>
            <h1>Barra de navegação</h1>

            <Navbar />
            <Routes>
                <Route id="about" path="/about" element={<About />} />
                <Route id="home" path="/home" element={<Home />} />
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
                <footer><h2 id="letra">Contact us: 4002-8922</h2></footer>
        </Router>
    );
}

export default App;
