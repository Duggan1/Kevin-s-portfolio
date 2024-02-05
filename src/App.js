import Header from './Header';
import './App.css';
import Home from './Home';
import Home2 from './Home2';
import Home3 from './Home3';

import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    {/* <Header />  */}
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<Home2/>} />

      <Route path="/3" element={<Home3/>} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects/>}/>
      
       
    </Routes>
    {/* <Footer/> */}
    
  </BrowserRouter>
  );
}

export default App;
