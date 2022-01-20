import React, { useState } from 'react';
import Nav, { pages } from './components/Nav';
import Cover from './components/Cover';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Credentials from './components/Credentials';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    Meeow, there is nothing here right now, but it's coming soon~~~
    </>
  )
}


// function App() {

//   const [ currentPage, setCurrentPage ] = useState('homepage');

//   let currentPageEl

//   switch(currentPage) {
//     case pages[1].id: 
//       currentPageEl = (
//         <Portfolio />
//       )
//       break;
//       case pages[2].id:
//         currentPageEl = (
//           <Credentials />
//         )
//         break;
//     case pages[3].id:
//       currentPageEl = (
//         <ContactForm />
//       )
//       break;
//     case pages[0].id:
//     default: 
//       currentPageEl = (
//         <>
//           <About />
//         </>
//       )
//   }

  

//   return (
//     <>
//       <Nav 
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//       <Cover />
//       {currentPageEl}
//       <Footer />
//     </>
//   );
// }

export default App;
