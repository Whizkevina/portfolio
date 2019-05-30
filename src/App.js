import React from 'react';
import logo from './logo.svg';
import About from './components/about'
import Sidebar from './components/sidebar'
import Contact from './components/contact'
//import './App.css';

function App() {
  return (
    <div className="colorlib-page">
        <div className="container-wrap">
              <About></About>
              <Sidebar></Sidebar>
              <Contact></Contact>
        </div>
    </div>

  );
}

export default App;
