import React from 'react'
import image1 from '../images/munchiez.png'
import {Link} from 'react-router-dom'

export default function Portfolio(){
    return(
        <div className="h-auto pt-[16vh] landscape:pt-[20vh] shadow shadow-lg shadow-neonGreen p-10"> 
        <h2 className='sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto font-Tilt flex justify-center   text-neonGreen p-8'>Portfolio</h2>
<div className="   relative flex justify-center items-center   " >
    <Link to='/portfolio'>
           <img src={image1} alt="" className="bg-white p-10 flex justify-center w-[80vw] sm:w-[40vw] shadow-sm shadow-white rounded-lg" /> 
           
           </Link>
           </div>

           <a className="w-full flex pt-4 justify-center" href="https://Nellymaina.github.io/munchiez/" target="blank" rel="noopener noreferrer" aria-label='Open in new tab'><p className="bg-neonGreen text-black p-2 text-[16px] sm:text-xl rounded-[20px]">Visit website</p></a>
        </div>
    )
}