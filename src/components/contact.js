import {React, useState} from 'react'


export default function Contact(){
const [Form, setForm]=useState({name:"", email:"", message:""})

function handleForm(e){
    const { name, value } = e.target;
        setForm({
          ...Form,
          [name]: value
        });
      
    
}
    return(
        <div className="h-auto mt-[16vh] mb-[10vh] ">

            <h2 className="sm:text-xl text-lg  inset-0 sm:w-[25vw] w-[50vw] font-bold flex justify-center bg-black text-white">Contact</h2>
        
        
            <form className=" mt-4 bg-transparent relative ">
                <div className='lg:flex justify-between'>
                    <input type="text" onChange={handleForm} name="name" value={Form.name} placeholder='FullName' className='shadow-md shadow-black rounded-md lg:landscape:w-[30vw] ml-2 md:ml-0 w-[70vw] sm:w-[50vw] landscape:w-[50vw] p-1 mb-6 border-black  border'/><br/>
                <input type="text" onChange={handleForm} name="email" value={Form.email} placeholder='Email' className=" shadow-md shadow-black rounded-md lg:landscape:w-[30vw] ml-2 md:ml-0 w-[70vw] sm:w-[50vw] landscape:w-[50vw] p-1 mb-6 border-black  border"/><br/>
                </div>
                <div className="md:flex justify-center w-[100vw] md:w-[80vw] ">
                <textarea onChange={handleForm} name="message" value={Form.message} placeholder='Message' className="shadow-md shadow-black rounded-md ml-2 md:ml-0 absolute w-[80vw] lg:w-[40vw] min-h-[40vh] mb-6 border-black border"></textarea>
                
<button className='bg-red-800 text-white font-Monaco p-4  mt-[45vh] text-[16px] sm:text-[18px] ml-2'>Send Message</button>
</div>
            </form>
            
        </div>
    )
}