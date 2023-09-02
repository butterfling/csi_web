import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About Us/About';
import NavBar from './Components/NavBar/Navbar.js';
// import Footer from './Components/Footer/Footer';
import Events from './Pages/Events/Events';
import ContactForm from './Pages/Contact';
import L_Sidebar from './Components/L-Sidebar/L_Sidebar';
import Team from './Pages/Team/Team';
import NewFooter from './Components/New Footer/NewFooter';
function App() {
  return (
    <Router>
    <div className='blur-background'></div>
      <div className='website'>
        <NavBar />
        <L_Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <NewFooter/>
      </div>
    </Router>
  );
}

export default App;
