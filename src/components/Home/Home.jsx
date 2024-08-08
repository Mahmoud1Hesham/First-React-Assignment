// import React from 'react'
// import hero from '../../assets/avataaars.svg'
// import Bar from '../Bar/Bar'
// export default function Home() {



//   return <>

//     <header className='bg-[#1abc9c] flex flex-col items-center p-14'>
// <div className="header-hero">
//   <img src={hero} alt="" className="w-full" />
// </div>
// <div className="header-content mt-5">
//   <h1 className='capitalize text-[40px] text-white font-bold'>START FRAMEWORK</h1>
//     <Bar backgroundColor={'bg-white'}/>
//     <p className='text-white text-center text-lg mt-6'>Graphic Artist - Web Designer - Illustrator</p>
// </div>
//     </header>

//   </>
// }


import React from 'react'
import hero from '../../assets/avataaars.svg'
import Bar from '../Bar/Bar'

export default function Home() {
  return (
    <>
      <header className='bg-[#1abc9c] flex flex-col items-center p-14'>
        <div className="header-hero">
          <img src={hero} alt="" className="w-full" />
        </div>
        <div className="header-content mt-5">
          <h1 className='capitalize text-[40px] text-white font-bold'>START FRAMEWORK</h1>
          <Bar backgroundColor={'bg-white'} textColor={'text-white'} />
          <p className='text-white text-center text-lg mt-6'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    </>
  )
}
