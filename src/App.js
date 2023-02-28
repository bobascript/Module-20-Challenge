import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header.js';
import Navi from './components/Navi.js'
import AboutMe  from './components/AboutMe.js';
import Footer from './components/Footer.js';
import Resume from './components/Resume.js'
function App() {
  const [categories] = useState ([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentCategory, setCurrentCategory] = useState (categories[0]);

  return (
    <div>
      <Header/>
      <Navi categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
    <div>
      {currentCategory===categories[0]&&<AboutMe/>}
      {currentCategory===categories[3]&&<Resume/>}
    </div>
    <Footer/>
    </div>
  );
}

export default App;
