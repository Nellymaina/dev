import React from 'react'
import image from '../images/about1.png'

export default function about(){
    return(
        <div className='w-full relative h-auto pt-16'>

      <h2 className='sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto font-Tilt flex justify-center   text-neonGreen p-8'>ABOUT ME</h2>

            <div className=' relative min-h-80vh md:flex md:[] '>
<div className='md:block flex justify-center w-[100vw] md:w-[25vw] md:mt-8 mt-2 md:ml-4'>
<img src={image} alt='' className='w-[50vw] sm:w-[50vw] md:w-[25vw] bg-white'/></div>
<div className='flex relative  items-center md:h-auto lg:h-auto h-max md:ml-4 ml-[5vw] mt-2 mr-2 justify-center  md:w-[90vw]'>
<div className='absolute top-0 left-0 w-1/3 h-20 border-t-2 border-l-2 border-golden'></div>
<div className='absolute bottom-0 right-0 w-1/3 h-20 border-b-2 border-r-2 border-neonGreen'></div>
<p className=' text-[16px] text-white sm:text-[18px]  mr-4 ml-4 text-luminousBlue-light mt-[50px] mb-[50px] '>I’m a front-end developer with 6 months of hands-on experience, primarily working as a freelancer on Upwork. During this time, I’ve collaborated with clients to create user-focused, responsive websites that meet their unique needs. My freelance projects have honed my ability to manage deadlines, communicate effectively, and deliver high-quality work.</p>
</div>



</div>
        </div>
    )
}