import React from 'react'
import image from '../images/about1.png'

export default function about(){
    return(
        <div className='w-full relative h-auto pt-16'>

      <h2 className='sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto font-Tilt flex justify-center   text-neonGreen p-8'>ABOUT ME</h2>

            <div className=' relative min-h- md:flex  '>
<div className='md:block flex justify-center w-[100vw] md:w-[25vw] md:mt-8 mt-2 md:ml-4'>
<img src={image} alt='' className='w-[50vw] sm:w-[30vw] md:w-[25vw] bg-white'/>
</div>
<div className='flex relative  items-center md:h-auto lg:h-auto h-max md:ml-4 ml-[5vw] mt-2 mr-2 justify-center  md:w-[90vw]'>
<div className='absolute top-0 left-0 w-1/3 h-20 border-t-2 border-l-2 border-golden'></div>
<div className='absolute bottom-0 right-0 w-1/3 h-20 border-b-2 border-r-2 border-neonGreen'></div>
<p className=' text-[16px] text-white sm:text-[18px]  mr-4 ml-4 text-luminousBlue-light mt-[50px] mb-[50px] '>I am a passionate front-end web developer driven by a deep enthusiasm for technology and design. My focus is on creating visually appealing, seamless web applications that not only meet functional requirements but also provide an exceptional user experience. I take great pride in staying updated with the latest trends and design innovations, ensuring that my work is always aligned with current industry standards.With a keen attention to detail, I thrive on contributing to projects that aim to make a meaningful impact across various industries. I specialize in building wireframes using tools like Adobe XD and Figma, and translating client visions into fully functional, responsive websites and applications. My experience working on freelance projects has sharpened my ability to manage tight deadlines, communicate effectively with clients, and deliver high-quality solutions tailored to unique user needs. Through my work, I strive to create user-focused, responsive designs that not only meet but exceed expectations.</p>
</div>



</div>
        </div>
    )
}