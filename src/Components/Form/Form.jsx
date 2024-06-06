import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Form () {



  

useEffect (() => {
  AOS.init({duration : "2000" , delay: "1000"});
}, []);




const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_eqa9ufn', 'template_3iyfn63', form.current, {
      publicKey: '9Q4eUkPK21arbJJ2B',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        toast.success("Message Successfully sent");
        e.target.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
}
  return (
   
<div name="Contact-us" className="py-10">
<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    <div className="hidden lg:block lg:w-1/2 bg-cover" data-aos="fade-right">
        <img src="https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="w-full px-8 lg:w-1/2" data-aos="fade-left">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Brand</h2>
        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
        <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
            
            
        </a>
        <div className="mt-2 flex items-center justify-between" >
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">Your Queries</a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <form ref={form} onSubmit={sendEmail}>
        <div className="mt-4">
            <label className="block text-green-600 text-sm font-semibold mb-2">Name</label>
            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="name" name="name"/>
        </div>
        <div className="mt-4">
            <div className="flex justify-between">
                <label className="block text-green-600 text-sm font-semibold mb-2">Phone-no</label>
            </div>
            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="phone" name="phone"/>
        </div>

        <div className="mt-4">
            <div className="flex justify-between">
                <label className="block text-green-600 text-sm font-semibold mb-2">Message</label>
            </div>
            <textarea className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="message" name="message"/>
        </div>

        <div className="mt-8">
            <button type="submit" value="Send" className="bg-gray-700 text-white font-bold py-2 px-4 w-60 rounded hover:bg-gray-600">Send</button>
        </div>
        </form>
    </div>
</div>
</div>

  )
}

export default Form