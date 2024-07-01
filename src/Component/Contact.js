import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub  } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-[10%] bg-indigo-950 text-indigo-300">
      <h2 className="text-3xl font-bold text-left">Contact Me</h2>
          <p className="mt-4 text-left">Get in touch With me.</p>

          <div className='w-full h-[1px] bg-gray-50 mt-2'></div>
          <div className='grid md:grid-cols-4 lg:grid-cols-4 mt-4 gap-2'>
              <div className='bg-indigo-900 shadow-md pt-2 rounded'>
                  
              <FaEnvelope size={32} className='m-4 mx-auto' />  
                  <h3 className='text-3xl font-semibold'>Email</h3>
                  <a href='href="mailto:zephdmc@gmail.com"' className='my-4 hover:text-sky-500'>Send a message</a>

              </div>
    
              <div className='bg-indigo-900 shadow-md pt-2 rounded'>
                  
              <FaWhatsapp size={32} className='m-4 mx-auto' />  
                  <h3 className='text-3xl font-semibold'>WhatsApp</h3>
                  <a href='https://wa.me/2349019258443' className='my-4 hover:text-sky-500'>Send a message</a>
              </div>
        
              <div className='bg-indigo-900 shadow-md pt-2 rounded'>
                  
              <FaLinkedin size={32} className='m-4 mx-auto' />  
                  <h3 className='text-3xl font-semibold'>Linkedin</h3>
                  <a href='https://www.linkedin.com/in/ezeji-zephrinus' className='my-4 hover:text-sky-500'>View My Page</a>

              </div>
              <div className='bg-indigo-900 shadow-md pt-2 rounded'>
                  
                  <FaGithub  size={32} className='m-4 mx-auto' />  
                      <h3 className='text-3xl font-semibold'>GitHub</h3>
                      <a href='https://github.com/zephdmc' className='my-4 hover:text-sky-500'>View My Page</a>
    
                  </div>
          </div>
          
    </section>
  );
};

export default Contact;
