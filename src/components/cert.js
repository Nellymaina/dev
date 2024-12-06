import React from "react"
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom'

export default function Cert(){
    return(
        <div  data-aos="slide-up" data-duration='2000'   data-aos-easing="ease" className=' shadow-lg  rounded-md  h-auto  pb-4 mb-4  text-[16px] sm:text-[18px]'>
       <h2 className= "text-xl sm:text-2xl mb-6 flex justify-center text-bold text-white">Certifications</h2>
        <div className="flex text-white justify-center items-center"><SchoolIcon /><p>ALX-<Link to= '/SECertification' className="text-blue-400 border border-b border-t-0 border-l-0 border-r-0 border-neonGreen font-monaco text-[18px] sm:text-xl " >SOFTWARE ENGINEERING PROGRAMME</Link></p></div>
        <div className="flex text-white justify-center items-center"><SchoolIcon /><p>ALX-<Link to="/AICEcertification" className="text-blue-400 border border-b border-t-0 border-l-0 border-r-0 border-neonGreen font-monaco text-[18px] sm:text-xl " >AI CAREER ESSENTIALS PROGRAMME</Link></p></div>
             
        </div>
    )
}