import React from 'react'
import image from '../images/image10.png'

export default function about(){
    return(
        <div className='w-full relative h-auto pt-16'>

      <h2 className='sm:text-2xl text-xl  inset-0 sm:w-[25vw] w-[50vw] font-bold flex justify-center bg-black text-white'>About Me</h2>

            <div className=' relative min-h-80vh md:flex '>

<img src={image} alt='' className='w-[40vw] sm:w-[30vw] md:w-[25vw] md:mt-8 mt-2 md:ml-4 bg-white '/>
<div className='flex relative bg-gray-200 items-center md:h-auto lg:h-auto h-max md:ml-4 ml-[5vw] mt-2 mr-2 justify-center  md:w-[90vw]'>
<div className='absolute top-0 left-0 w-1/3 h-20 border-t-4 border-l-4 border-golden'></div>
<div className='absolute bottom-0 right-0 w-1/3 h-20 border-b-4 border-r-4 border-golden'></div>
<p className=' text-[16px] sm:text-[18px]  mr-4 ml-4 mt-[50px] mb-[50px] '>I’m a front-end developer with 6 months of hands-on experience, primarily working as a freelancer on Upwork. During this time, I’ve collaborated with clients to create user-focused, responsive websites that meet their unique needs. My freelance projects have honed my ability to manage deadlines, communicate effectively, and deliver high-quality work.</p>
</div>



</div>
        </div>
    )
}