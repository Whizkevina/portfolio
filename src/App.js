import React from 'react';

import About from './components/about'
import Sidebar from './components/sidebar'
import Contact from './components/contact'
import Experience from './components/experience'
import Skill from './components/skill'
import Home from './components/home';


function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main">
                <Home></Home>
                <About></About>
                <Skill></Skill>
                <Experience></Experience>
                <Contact></Contact>
            </div>
        </div>
    </div>

  );
}

export default App;
