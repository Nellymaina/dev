import React from 'react'
import data from './skills-data'
import { DiGit } from "react-icons/di";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { BiLogoCss3 } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";



export default function Skills(){


    


    return (
<div className='pt-[16vh] h-auto w-full shadow shadow-lg shadow-neonGreen pb-10'>

<h2 className=' sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto font-Tilt flex justify-center   text-neonGreen p-8'>Skills</h2>

        <div className='flex justify-center items-center mt-4 '>

<div className=' grid grid-cols-4 grid-cols-3 sm:grid-cols-4 gap-4 lg:w-[50vw] w-[100vw] ml-2 mr-2 text-white'>

<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"> <SiPython />
Python</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"> <SiJavascript /> Javascript </div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><SiHtml5 />HTML5 </div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><BiLogoCss3 />CSS3</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><SiMongodb /> MongoDB</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><SiReact />React</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><BiLogoNodejs />NodeJS</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><SiExpress />ExpressJS</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><SiTypescript />Typescript</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><DiMysql />MySQL</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"><RiNextjsFill />
NextJS</div>
<div className="w-auto text-[12px] sm:text-[14px] lg:text-[16px] sm:h-[10vh]   shadow shadow-md shadow-neonGreen items-center flex justify-center border border-neonBlue border-2   text-neonBlue p-2"> <DiGit />
Git Source Control</div>




</div>
</div>
        </div>
    )
}