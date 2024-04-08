import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zjra34n', 'template_uxafczw', form.current, {
        publicKey: 'jEAMoRHtRlBOAEXSA',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <section id='contact' className='pb-16'>
    <div className="container">
      <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
        Get in touch
      </h2>
      <div className="md:flex justify-between items-center">
        <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.05952720236!2d38.695742873361326!3d8.963337305112065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1711007440219!5m2!1sen!2set" 
         className='border-0 w-full h-full'
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>

        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
          <form className='w-full' ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <input 
              type="text" 
              placeholder='Enter your name'
              className='w-full p-3 focus:outline-none rounded-[5px]'
              name="user_name"
              required
              />

            </div> <div className="mb-5">
              <input 
              type="email" 
              placeholder='Enter your Email'
              className='w-full p-3 focus:outline-none rounded-[5px]'
              name="user_email"
              required
              />

            </div>
            <div className="mb-5">
              <input 
              type="text" 
              placeholder='Subject'
              className='w-full p-3 focus:outline-none rounded-[5px]'
              name="user_subject"
            
              />

            </div>
            <div className="mb-5">
              <textarea 
              type="text" 
              rows={3}
              placeholder='Write your message'
              className='w-full p-3 focus:outline-none rounded-[5px]'
              name="message"
              />

            </div>
           
              <input type="submit" value="Send Message" className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
            hover:bg-headingColor text-center ease-linear duration-150 cursor-pointer"/>
          

          </form>

        </div>

      </div>
    </div>

  </section>
   
  )
}

export default Contact;