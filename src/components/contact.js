import {React, useState} from 'react'
import emailjs from 'emailjs-com';


export default function Contact(){
const [Form, setForm]=useState({name:"", email:"", message:""})

function handleForm(e){
    const { name, value } = e.target;
        setForm({
          ...Form,
          [name]: value
        });
      
    
}

const [statusMessage, setStatusMessage] = useState(null);
const [isLoading, setIsLoading] = useState(false);


const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    emailjs
      .send('service_0rkh9v5', 'template_u57as5e', Form, 'yWmXm8KJO9mncW7Qj',
      )
      .then(
        (response) => {
          console.log('Success:', response);
          setIsLoading(false)
          setStatusMessage('Message sent successfully!');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error:', error);
          setIsLoading(false);
          setStatusMessage('Error sending message. Please try again.');
        }
      );
  };


    return(
        <div className="h-auto mt-[16vh] mb-[10vh] shadow shadow-lg shadow-neonGreen ">

            <h2 className="sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto  rounded-md font-Tilt flex justify-center   text-neonGreen p-8">Contact</h2>
        
        
            <form className=" mt-4 bg-transparent relative " onSubmit={handleSubmit}>
                <div className='lg:flex justify-between md:w-[90vw]'>
                    <input type="text" required onChange={handleForm} name="name" value={Form.name} placeholder='FullName' className='shadow-md shadow-black rounded-md lg:w-[40vw] ml-2 md:ml-0 w-[80vw] p-2 mb-6 border-black  border'/><br/>
                <input type="text" required onChange={handleForm} name="email" value={Form.email} placeholder='Email' className=" shadow-md shadow-black rounded-md lg:w-[40vw] ml-2 md:ml-0 w-[80vw] p-2 mb-6 border-black  border"/><br/>
                </div>
                <div className="lg:flex justify-center w-[100vw] md:w-[90vw] ">
                <textarea onChange={handleForm} required name="message" value={Form.message} placeholder='Message' className="shadow-md shadow-black rounded-md ml-2 md:ml-0 absolute w-[80vw] lg:w-[40vw] landscape:min-h-[60vh] min-h-[40vh] mb-6 border-black border"></textarea>
                
<button type="submit" disabled={isLoading} className='bg-red-800 text-white font-Monaco p-4  portrait:mt-[45vh] landscape:mt-[65vh] text-[16px] sm:text-[18px] ml-2'>{isLoading ? 'Sending...' : 'Send Message'}</button>
{statusMessage && (
        <p className={`mt-4 ${statusMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {statusMessage}
        </p>
      )}
      </div>
            </form>
            
        </div>
    )
}