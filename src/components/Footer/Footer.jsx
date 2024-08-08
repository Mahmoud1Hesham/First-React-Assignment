import React, { useEffect, useState } from 'react'
export default function Footer() {



    return <>
        <footer className='bg-slate-700'>
            <div className="container flex flex-col items-center md:flex-row justify-between  p-3 text-center">
                <div className="card w-1/3 py-20 ">
                    <h2 className='text-3xl text-white font-semibold'>LOCATION</h2>
                    <p className='text-white'>2215 John Daniel Drive</p>
                    <p className='text-white'>Clark, MO 65243</p>
                </div>
                <div className="card w-1/3 py-20 ">
                    <h2 className='text-3xl text-white font-semibold'>AROUND THE WEB</h2>
                    <div className="icons flex space-x-2 justify-center mt-2">
                    <div className='flex justify-center content-center flex-wrap rounded-full border border-white h-10 w-10'>
                        <i class="fa-brands  fa-facebook text-white"></i>
                    </div>
                    <div className='flex justify-center content-center flex-wrap rounded-full border border-white h-10 w-10'>
                        <i class="fa-brands  fa-twitter text-white"></i>
                    </div>
                    <div className='flex justify-center content-center flex-wrap rounded-full border border-white h-10 w-10'>
                        <i class="fa-brands  fa-linkedin-in text-white"></i>
                    </div>
                    <div className='flex justify-center content-center flex-wrap rounded-full border border-white h-10 w-10'>
                        <i class="fa-solid  fa-globe text-white"></i>
                    </div>
                    </div>
                </div>
                <div className="card w-1/3 py-20 ">
                <h2 className='text-3xl text-white font-semibold'>ABOUT FREELANCER</h2>
                    <p className='text-white px-5'>Freelance is a free to use, licensed Bootstrap theme created by Route</p> 
                </div>
            </div>
            <div className=" flex justify-center content-center p-10  bg-slate-800 text-white">
                <p>Copyright © Your Website 2024</p>
            </div>
        </footer>
    </>
}
