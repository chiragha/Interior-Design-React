import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll";


function Navbar  () {
    const [menu, setMenu] =useState(false);
    const navItems = [
       {
        id:1,
        text:"Home"
       },
       {
        id:2,
        text:"About"
       },
       {
        id:3,
        text:"Gallery"
       },
       {
        id:4,
        text:"Contact-us"
       },
      
    ]



  return (
    <div className='bg-gray-700 opacity-75 max-w-screen-2xl container h-16 mx-auto px-4 z-20 md:px-20 shadow-md fixed top-0 left-0 right-0'>
     
        <div className='flex justify-between items-center h-16'>
            {/* logo content */}

            <div className='flex flex-col'>
                <h1 className='font-semibold text-3xl cursor-pointer text-green-600'>LOGO</h1>
               
            </div>

            {/* navbar content */}

            <div>
                <ul className='hidden md:flex space-x-8 text-white'>
                    {
                        navItems.map(({id, text}) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer hover:text-green-600" key={id}><Link
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>
                        ))
                    }
                </ul>


                {/* hamburger code */}
                <div className='cursor-pointer text-white text-2xl md:hidden font-medium' onClick={() => setMenu(!menu)}>
                { menu ? <IoMdClose size={28}/> : <CiMenuFries size={28}/>}
                </div>
               



            </div>
        </div>




{/* for mobile */}
       {
        menu && (
            <div className=''>
            <ul className='text-2xl h-screen bg-slate-800 text-center text-white font-semibold cursor-pointer md:hidden flex flex-col items-center justify-center'>
            {
                        navItems.map(({id, text}) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer" key={id}><Link
                            onClick={() => setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>
                        ))
                    }
            </ul>
        </div>
        )
       }

       
       </div>
  )
}

export default Navbar
