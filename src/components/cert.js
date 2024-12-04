import React from "react"
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom'

export default function Cert(){
    return(
        <div  data-aos="slide-up" data-duration='2000'   data-aos-easing="ease" className=' shadow-lg shadow-black rounded-md bg-gray-200 h-auto lg:h-[70vh] pb-4 mb-4  text-[16px] sm:text-[18px]'>
       <h2 className= "text-xl sm:text-2xl mb-6 flex justify-center text-bold text-red-600">Certifications</h2>
        <div className="flex justify-center items-center"><SchoolIcon /><p>ALX-<Link to= '/SECertification' className="text-green-600 font-monaco text-[18px] sm:text-xl ml-6" >SOFTWARE ENGINEERING PROGRAMME</Link></p></div>
        <div className="flex justify-center items-center"><SchoolIcon /><p>ALX-<Link to="/AICEcertification" className="text-green-600 font-monaco text-[18px] sm:text-xl ml-6" >AI CAREER ESSENTIALS PROGRAMME</Link></p></div>
             
        </div>
    )
}