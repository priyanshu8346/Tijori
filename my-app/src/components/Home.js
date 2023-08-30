import React from 'react'
import Carousels from "./Carousels";
import About from './About';
import Contact from './Contact';




 function Home(props){
  return (
   <div >
        <Carousels/>
        <About />
        <Contact/>
   </div>
  )
}
 export default Home;