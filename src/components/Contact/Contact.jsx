import React, { useEffect, useState } from 'react'
import Bar from '../Bar/Bar'

export default function Contact() {



    return <>

<h1 className='text-[40px] text-center font-bold text-[#2c3e50] mt-3'>PORTFOLIO COMPONENT</h1>
<Bar backgroundColor='bg-[#2c3e50]' textColor='text-[#2c3e50]' />
        <form class="container w-[50%] mx-auto p-7">
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-[#2c3e50] ">Your name</label>
                <input type="name" id="name" class=" border-b  border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#1abc9c] block w-full p-2.5 " required />
            </div>
            <div class="mb-5">
                <label for="age" class="block mb-2 text-sm font-medium text-[#2c3e50] ">Your age</label>
                <input type="age" id="age" class=" border-b  border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#1abc9c] block w-full p-2.5 " required />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-[#2c3e50] ">Your email</label>
                <input type="email" id="email" class=" border-b  border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#1abc9c] block w-full p-2.5 " placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-[#2c3e50] ">Your password</label>
                <input type="password" id="password" class=" border-b  border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#1abc9c] block w-full p-2.5 " required />
            </div>


            <button type="submit" class="text-white bg-[#1abc9c] focus:scale-110 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
        </form>

    </>
}
