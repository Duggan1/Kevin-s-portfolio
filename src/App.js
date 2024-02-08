import Header from './Header';
import './App.css';
import Home from './Home';
import Home2 from './Home2';
import EX2 from './EX2';

import About2 from './About2';
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

      <Route path="/3" element={<EX2/>} />
      <Route path="/about" element={<About2 />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects/>}/>
      
       
    </Routes>
    {/* <Footer/> */}
    
  </BrowserRouter>
  );
}

export default App;
