import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Hero/>
        <Products/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
