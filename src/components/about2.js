import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'  


export default function Abt(){

    useEffect(()=>{
        AOS.init({
          duration: 1000,
          offset: 100
        })
          },[])

    return(
    <div  className='h-auto pt-[5vh]'>
        <div data-aos="slide-up" data-duration='2000'   data-aos-easing="ease" className=' shadow-lg shadow rounded-md bg-black h-auto pb-4 mb-4'>
    <h2 className='text-xl sm:text-2xl mb-4 flex justify-center text-bold text-white bg-n'>Technical Skills</h2>
    <p className="text-[16px] text-luminousBlue-light sm:text-[18px] mr-4 ml-4 mb-6" >I’m proficient in a range of technologies and tools that help bring ideas to life, including:</p>
<ul className='list-disc text-luminousBlue-light pl-6 space-y-2 ml-6 text-[16px] sm:text-[18px]'>
<li >Languages: <span className="text-golden font-monaco text-[18px] sm:text-xl">JavaScript, Python</span> </li>
<li>Frameworks & libraries: <span className="text-neonGreen font-monaco text-[18px] sm:text-xl">React.js, Node.js, MERN stack</span> </li>
<li>Styling & Design: <span className="text-golden font-monaco text-[18px] sm:text-xl">HTML, CSS, Tailwind CSS</span> </li>
<li>Version Control: <span className="text-golden font-monaco text-[18px] sm:text-xl">Git</span> </li>
</ul>
</div>
<div data-aos="slide-up" data-duration='2000'  className=' pt-[5vh] shadow-lg shadow-red rounded-all bg-black mb-4 pb-4 h-auto '>
    <h4 className="text-xl sm:text-2xl mb-6 flex justify-center text-bold text-white">Approach and Focus</h4>
    <p className="text-[16px] sm:text-[18px] text-luminousBlue-light mr-4 ml-4 mb-6">I specialize in building responsive, visually appealing websites with a strong emphasis on functionality and user experience. My keen eye for detail ensures that each project not only looks great but also performs efficiently across devices. I take pride in writing clean, maintainable code and continuously seek ways to improve my skills and stay updated with the latest industry trends.</p>
</div>
    </div>)
}