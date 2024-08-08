
// import React, { useState } from 'react'
// import Bar from '../Bar/Bar.jsx'
// import img1 from '../../assets/img1.png'
// import img2 from '../../assets/img2.png'
// import img3 from '../../assets/img3.png'

// export default function Portfolio() {
//     const [modalImage, setModalImage] = useState(null);

//     const openModal = (img) => {
//         setModalImage(img);
//     };

//     const closeModal = () => {
//         setModalImage(null);
//     };

//     return <>
//         <h1 className='text-[40px] text-center font-bold text-[#2c3e50] mt-3'>PORTFOLIO COMPONENT</h1>
//         <Bar backgroundColor={'bg-[#2c3e50]'} textColor={'text-[#2c3e50]'} />
//         <div className="flex justify-evenly space-x-2 px-24 py-5 container flex-wrap">
//             {[img1, img2, img3, img1, img2, img3].map((img, index) => (
//                 <div key={index} className="card w-[32%] p-2 group transition-all duration-500 ease-in-out">
//                     <div className="content relative">
//                         <img src={img} alt="" className="w-full rounded-xl" onClick={() => openModal(img)} />
//                         <div className="layer rounded-xl justify-center items-center bg-[#1abc9ce6] absolute hidden inset-0 group-hover:flex z-10">
//                             <i className="fa-solid fa-plus text-8xl text-white"></i>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>

//         {modalImage && (
//             <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
//                 <div className="relative">
//                     <img src={modalImage} alt="" className="w-full max-w-[80vw] max-h-[80vh] rounded-xl" />
//                     <button onClick={closeModal} className="absolute top-2 right-2 text-white text-4xl">&times;</button>
//                 </div>
//             </div>
//         )}
//     </>
// }



// import React, { useState } from 'react'
// import Bar from '../Bar/Bar.jsx'
// import img1 from '../../assets/img1.png'
// import img2 from '../../assets/img2.png'
// import img3 from '../../assets/img3.png'

// export default function Portfolio() {
//     const [modalImage, setModalImage] = useState(null);

//     function openModal (img)  {
//         setModalImage(img);
//     };

//     function closeModal() {
//         setModalImage(null);
//     };

//     return <>
//         <h1 className='text-[40px] text-center font-bold text-[#2c3e50] mt-3'>PORTFOLIO COMPONENT</h1>
//         <Bar backgroundColor={'bg-[#2c3e50]'} textColor={'text-[#2c3e50]'} />
//         <div className="flex justify-evenly space-x-2 px-24 py-5 container flex-wrap">
//             {[img1, img2, img3, img1, img2, img3].map((img, index) => (
//                 <div key={index} className="card w-[32%] p-2 group transition-all duration-500 ease-in-out">
//                     <div className="content relative">
//                         <img src={img} alt="" className="w-full rounded-xl" onClick={() => openModal(img)} />
//                         <div className="layer hover:flex rounded-xl justify-center items-center bg-[#1abc9ce6] absolute opacity-0 transition-opacity duration-500 inset-0 group-hover:opacity-100 z-10">
//                             <i className="fa-solid fa-plus text-8xl text-white"></i>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>

//         {modalImage && (
//             <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 opacity-0 transition-opacity duration-500" style={{ opacity: modalImage ? 1 : 0 }}>
//                 <div className="relative">
//                     <img src={modalImage} alt="" className="w-full max-w-[80vw] max-h-[80vh] rounded-xl" />
//                     <button onClick={closeModal} className="absolute top-2 right-2 text-white text-4xl">&times;</button>
//                 </div>
//             </div>
//         )}
//     </>
// }


// import React, { useState } from 'react'
// import Bar from '../Bar/Bar.jsx'
// import img1 from '../../assets/img1.png'
// import img2 from '../../assets/img2.png'
// import img3 from '../../assets/img3.png'

// export default function Portfolio() {
//     const [modalImage, setModalImage] = useState(null);

//     function openModal(img) {
//         setModalImage(img);
//     }

//     function closeModal() {
//         setModalImage(null);
//     }

//     return <>
//         <h1 className='text-[40px] text-center font-bold text-[#2c3e50] mt-3'>PORTFOLIO COMPONENT</h1>
//         <Bar backgroundColor={'bg-[#2c3e50]'} textColor={'text-[#2c3e50]'} />
//         <div className="flex justify-evenly space-x-2 px-24 py-5 container flex-wrap">
//             {[img1, img2, img3, img1, img2, img3].map((img, index) => (
//                 <div key={index} className="card w-[32%] p-2 group  ">
//                     <div className="content relative">
//                         <img src={img} alt="" className="w-full rounded-xl" onClick={() => openModal(img)} />
//                         <div className="layer hidden rounded-xl justify-center items-center bg-[#1abc9ce6] absolute opacity-0 transition-opacity duration-500 inset-0 group-hover:opacity-100 z-10">
//                             <i className="fa-solid fa-plus text-8xl text-white"></i>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>

//         {modalImage && (
//             <div className={`fixed inset-0 bg-[#2c3e50] bg-opacity-75 flex justify-center items-center z-50  ${modalImage ? 'opacity-100' : 'opacity-0'}`}>
//                 <div className="relative">
//                     <img src={modalImage} alt="" className="w-full max-w-[80vw] max-h-[80vh] rounded-xl" />
//                     <button onClick={closeModal} className="absolute top-2 right-2 text-white text-4xl">&times;</button>
//                 </div>
//             </div>
//         )}
//     </>
// }

import React, { useState } from 'react';
import Bar from '../Bar/Bar.jsx';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

export default function Portfolio() {
    const [modalImage, setModalImage] = useState(null);

    function openModal(img) {
        setModalImage(img);
    }

    function closeModal() {
        setModalImage(null);
    }

    return (
        <>
            <h1 className='text-[40px] text-center font-bold text-[#2c3e50] mt-3'>PORTFOLIO COMPONENT</h1>
            <Bar backgroundColor='bg-[#2c3e50]' textColor='text-[#2c3e50]' />
            <div className="flex justify-evenly space-x-2 px-24 py-5 container flex-wrap">
                {[img1, img2, img3, img1, img2, img3].map((img, index) => (
                    <div key={index} className="card lg:w-[31%] md:w-[48%] sm:w-full  p-2 group transition-all duration-500 ease-in-out">
                        <div className="content relative">
                            <img src={img} alt="" className="w-full rounded-xl" onClick={() => openModal(img)} />
                                      {/* problem lies here ! */}
                            <div className="layer hidden rounded-xl justify-center items-center bg-[#1abc9ce6] absolute inset-0  opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-500 opacity-100">
                    <div className="relative">
                        <img src={modalImage} alt="" className="w-full max-w-[80vw] max-h-[80vh] rounded-xl" />
                        <button onClick={closeModal} className="absolute top-2 right-2 text-white text-4xl">&times;</button>
                    </div>
                </div>
            )}
        </>
    );
}
