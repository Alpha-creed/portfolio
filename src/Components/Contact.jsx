import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
       <div className="flex  justify-center items-center p-8  z-10 h-full">
       <div className="max-w-2xl text-center">
         <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
         Let's Create Something Together
         </h1>
         <p className="text-lg sm:text-xl text-white">
    
Ready to start a digital journey that transforms your online presence? As a freelance developer, I'm dedicated to excellence in every aspect of web development. Reach out today to discuss your project, and let’s turn your vision into reality.  </p>  
         {/* Centering the button for mobile view */}
         <div className="flex justify-center mt-6  ">
           <button onClick={()=>navigate('/contact')} className=" mb-7 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
           Contact Me On
                       </button>
         </div>
       </div>
     </div>
  )
}

export default Contact