import React, { useEffect, useState } from 'react'
import Bar from '../Bar/Bar'

export default function About() {



    return <>
        <header className='bg-[#1abc9c] flex flex-col items-center md:flex-row justify-between p-44'>
<div className="header-content mt-5 flex flex-col justify-center items-center">
<h1 className='capitalize text-[40px] text-white font-bold'>About Component</h1>
<Bar backgroundColor='bg-white' textColor='text-white' />
    <div className='flex flex-col items-center md:flex-row justify-between'>
    <p className='text-white px-8 text-lg mt-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    <p className='text-white px-8 text-lg mt-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
</div>
    </header>

    </>
}
