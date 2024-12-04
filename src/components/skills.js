import React from 'react'
import data from './skills-data'

export default function Skills(){


    const newData=data.map(item=>{
        return(
            <div >
            <img className='portrait:h-[10vh] landscape:h-[15vh]' src={item.image} alt=''/>
            <p className='text-[12px] sm:text-[14px] lg:text-[16px] text-black'>{item.name}</p>
            </div>
    
        )
    })

    return (
<div className='pt-[16vh]   max-h-[100vh] w-full '>

<h2 className=' sm:text-2xl text-xl  inset-0 sm:w-[25vw] w-[50vw] font-bold flex justify-center bg-blue-100 text-black'>Skills</h2>

        <div className='flex justify-center items-center mt-4 '>

<div className=' grid grid-cols-4 gap-4 lg:w-[50vw] w-[100vw] ml-2 mr-2'>{newData}</div>

</div>
        </div>
    )
}