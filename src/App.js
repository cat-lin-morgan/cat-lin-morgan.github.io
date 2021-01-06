import React, { useState } from 'react';
import Nav, { pages } from './components/Nav';
import Cover from './components/Cover';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {

  const [ currentPage, setCurrentPage ] = useState('homepage');

  let currentPageEl

  switch(currentPage) {
    case pages[1].id: 
      currentPageEl = (
        <>
          <Projects />
        </>
      )
      break;
    case pages[2].id:
      currentPageEl = (
        <ContactForm />
      )
      break;
    case pages[0].id:
    default: 
      currentPageEl = (
        <>
          <About />
        </>
      )
  }

  return (
    <>
      <Nav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Cover />
      {currentPageEl}
      <Footer />
    </>
  );
}

export default App;
