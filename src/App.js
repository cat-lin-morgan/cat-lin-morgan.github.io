import React, { useState } from 'react';
import Nav, { pages } from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';



function App() {

  const [ currentPage, setCurrentPage ] = useState('homepage');

  let currentPageEl

  switch(currentPage) {
    case pages[1].id: 
      currentPageEl = (
        <About />
        )
        break;
    case pages[2].id:
      currentPageEl = (
        <Projects />
    )
        break;
    case pages[3].id:
      currentPageEl = (
        <Resume />
      )
      break;
    case pages[0].id:
    default: 
      currentPageEl = (
        <>
          <Home />
        </>
      )
  }

  

  return (
    <>
      <Nav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPageEl}
      <Footer />
    </>
  );
}

export default App;
