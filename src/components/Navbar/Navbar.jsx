// import React, { useEffect, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'

// export default function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);
//   function openNav() {
//     setIsOpen(!isOpen);
//   }

//   return <>
//     {/* <h1 className="text-3xl text-red-500">Navbar</h1> */}
//     <nav className="navbar bg-slate-700 sticky">
//       <div className="container flex justify-between content-center flex-wrap py-5 px-28 font-medium text-white">
//         <Link className="logo"><h3 className='text-4xl'>START FRAMEWORK</h3></Link>
//         <div className="navContent ">
//           <ul className='lg:flex sm:hidden space-x-6 content-center p-2'>
//             <li><NavLink to={'about'} className={'text-base font-bold p-2'}>ABOUT</NavLink></li>
//             <li><NavLink to={'portfolio'} className={'text-base font-bold p-2'}>PORTFOLIO</NavLink></li>
//             <li><NavLink to={'contact'} className={'text-base font-bold p-2'}>CONTACT</NavLink></li>
//           </ul>
//           {/* Mobile menu */}
//           {isOpen ? <ul className='md:flex flex-col flex-wrap lg:hidden space-y-4 h-full items-center content-center p-2'>
//             <li><NavLink to={'about'} className={'text-base font-bold p-2'}>ABOUT</NavLink></li>
//             <li><NavLink to={'portfolio'} className={'text-base font-bold p-2'}>PORTFOLIO</NavLink></li>
//             <li><NavLink to={'contact'} className={'text-base font-bold p-2'}>CONTACT</NavLink></li>
//           </ul>
//             : null
//           }
//         </div>
//         <button onClick={openNav} className='lg:hidden'><i class="fa-solid fa-bars fa-lg"></i></button>
//       </div>
//     </nav>
//   </>
// }



import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="navbar bg-slate-700 sticky top-0 z-40">
        <div className="container flex justify-between items-center flex-wrap py-5 px-6 md:px-28 font-medium text-white">
          <Link to="/" className="logo">
            <h3 className='text-4xl'>START FRAMEWORK</h3>
          </Link>
          <div className="navContent flex items-center">
            <ul className='hidden lg:flex space-x-6 content-center p-2'>
              <li><NavLink to={'/about'} className={'text-base font-bold p-2'}>ABOUT</NavLink></li>
              <li><NavLink to={'/portfolio'} className={'text-base font-bold p-2'}>PORTFOLIO</NavLink></li>
              <li><NavLink to={'/contact'} className={'text-base font-bold p-2'}>CONTACT</NavLink></li>
            </ul>
            <button onClick={openNav} className='lg:hidden ml-4 p-2 focus:border focus:rounded-md focus:border-white'>
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
          </div>
          {isOpen && (
            <div className="w-full lg:hidden  ">
              <ul className='flex flex-col space-y-4 h-full items-center content-center p-5'>
                <li><NavLink to={'/about'} className={'text-base font-bold p-2'}>ABOUT</NavLink></li>
                <li><NavLink to={'/portfolio'} className={'text-base font-bold p-2'}>PORTFOLIO</NavLink></li>
                <li><NavLink to={'/contact'} className={'text-base font-bold p-2'}>CONTACT</NavLink></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
