import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'

export default function Contact(){
    return(
        <div className="h-[70vh] mt-[16vh] bg-black">

            <h2 className="sm:text-xl text-lg  inset-0 sm:w-[25vw] w-[50vw] font-bold flex justify-center bg-gray-100 text-black">Contact</h2>
        
        <div className=" absolute inset-0 h-[70vh] flex justify-center items-center ">
            
            <a href="https://www.linkedin.com/in/nelly-maina-5a7040213" target="blank" rel="noopener noreferrer " aria-label='Open in new tab' className="mr-4"><LinkedIn /></a>
            <a href="https://github.com/NellyMaina" target="blank" rel="noopener noreferrer" aria-label='Open in new tab' ><GitHub  className='text-red-600 mr-4'/></a>
           <a href="mailto:nellymaina095@gmail.com"><EmailIcon/> </a>

        </div>
        </div>
    )
}