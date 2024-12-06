import React from "react";
import {Link as Li} from 'react-scroll'


export default function Footer(){
    return(
        <div className=' md:flex justify-between items-center bg-neonGreen text-[14px] text-black h-auto p-6 max-width=[100vw] width=[100%] static'>
<p>© 2024 Nelly Maina. All rights reserved.</p>

  <p>Email: <a href="mailto:nellymaina095@gmail.com">nellymaina095@gmail.com</a></p>
  <div className="">
    <a href="https://github.com/NellyMaina" target="_blank" rel="noopener noreferrer" className="cursor text-blue-600">GitHub</a>|
    
    <a href="https://www.linkedin.com/in/nelly-maina-5a7040213" target="_blank" rel="noopener noreferrer" className="cursor text-blue-600">LinkedIn</a>
  </div>
  <p>
    <Li to="about" >About</Li> | <Li to="portfolio">Portfolio</Li> | <Li to="contact">Contact</Li>
  </p>

        </div>
    )
}