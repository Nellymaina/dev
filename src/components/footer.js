import React from "react";
import {Link as Li} from 'react-scroll'


export default function Footer(){
    return(
        <div className=' md:flex justify-between items-center bg-white bg-opacity-5 backdrop-blur-lg text-[14px] text-neonGreen h-auto pt-6 pb-6 max-width=[100vw] width=[100%] static'>
<p className='w-[100vw]  md:w-auto md:block hidden text-neonGreen '>© 2024 Nelly Maina. All rights reserved.</p>

  <p className="w-[100vw] md:w-auto md:block flex text-red-400 justify-center mt-2">Email: <a href="mailto:nellymaina095@gmail.com" >nellymaina095@gmail.com</a></p>
  <div className="w-[100vw] md:w-auto md:block flex justify-center mt-2">
    <a href="https://github.com/NellyMaina" target="_blank" rel="noopener noreferrer" className="cursor text-blue-600">GitHub</a>|
    
    <a href="https://www.linkedin.com/in/nelly-maina-5a7040213" target="_blank" rel="noopener noreferrer" className="cursor text-blue-600">LinkedIn</a>
  </div>
  <p className='w-[100vw] md:w-auto md:block flex justify-center mt-2'>
    <Li to="about" >About</Li> | <Li to="portfolio">Portfolio</Li> | <Li to="contact">Contact</Li>
  </p>
  <p className='w-[100vw]  md:hidden flex text-neonGreen justify-center'>© 2024 Nelly Maina. All rights reserved.</p>

        </div>
    )
}