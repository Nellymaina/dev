import React from 'react'
import image1 from '../images/port.png'
import {Link} from 'react-router-dom'

export default function Portfolio(){
    return(
        <div className="h-auto pt-[16vh] landscape:pt-[20vh]"> 
        <h2 className='sm:text-2xl text-xl  inset-0 sm:w-[25vw] w-[50vw] font-bold flex justify-center bg-black text-white mb-4'>Portfolio</h2>
<div className="w-full flex justify-center" >
    <Link to='/portfolio'>
           <img src={image1} alt="" className="w-[20vw]  h-[60vh] " /> 
           
           </Link>
           </div>
           <a className="w-full flex justify-center" href="https://Nellymaina.github.io/munchieshub/" target="blank" rel="noopener noreferrer" aria-label='Open in new tab'><p className="text-green-400 text-xl bg-black">Visit website</p></a>
        </div>
    )
}