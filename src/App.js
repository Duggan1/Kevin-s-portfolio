import Header from './Header';
import './App.css';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header /> 
    <Routes>
      <Route path="/" element={<Home/>} />
       
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects/>}/>
      
       
    </Routes>
    <Footer/>
    
  </BrowserRouter>
  );
}

export default App;
