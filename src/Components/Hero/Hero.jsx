import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero ()  {




  useEffect (() => {
    AOS.init({duration : "2000" , delay: "1000"});
  }, []);




  return (
    <div>
        <section name="Home" className="relative h-screen flex flex-col items-center justify-center text-center text-white">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <img className="min-w-full min-h-full absolute object-cover"
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='img'/>
    </div>
    <div className="video-content space-y-2 z-10">
        <h1 className=" text-7xl fnt" data-aos="fade-right">INTERIOR DESIGN STUDIO</h1>
        <h3 className="text-7xl fnt font-bold text-green-600" data-aos="fade-left"> & ART GALLERY</h3>
    </div>
</section>
</div>
  )
}

export default Hero