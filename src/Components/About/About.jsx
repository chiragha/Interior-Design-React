import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function About()  {

    useEffect (() => {
        AOS.init({duration : "2000" , delay: "1000"});
      }, []);
    
  return (
    <div name="About" className='mt-8'>
        <div className="relative w-full h-96" id="home">
           
    <div className="absolute inset-0">
        <img src="https://www.decorpot.com/images/238111957how-much-does-it-cost-of-interior-design-for-1bhk-2bhk-3bhk-and-4bhk-in-pune.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />

    </div>
    <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between ml-12"  data-aos="fade-down">
        <div className=" mb-4 md:mb-0">
            <h1 className="text-4xl font-bold text-green-600  md:text-7xl  mb-2 fnt">Kickstart Your<br/>
Design Journey
</h1>
            <p className="font-regular text-white text-2xl mb-8 mt-4 fnt">Take our interior design style quiz<br/>

to ignite your inspiration today!</p>
            <button className="px-6 py-3  justify-center items-center bg-green-600 rounded-md text-white font-medium  hover:bg-[#c09858]  transition duration-200">Discover</button>
        </div>;
    </div>
</div>
</div>
  )
}

export default About