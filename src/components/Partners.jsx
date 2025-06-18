// import React from 'react'
// import FooterLogo from '../assets/images/svg/footer-logo.svg'
// import { PARTNERS_DATA} from '../utils/helper'

// const Partners = () => {
//   return (
//     <div className="max-w-[1320px] mx-auto px-4">
//     <h2 className="text-[75px] font-bold mb-10 leading-[100%] pt-[92px] pb-[60px]">-Partners</h2> 
//       <div className="grid gap-16 md:grid-cols-3 items-start max-w-[1440px] mx-auto">
//         {PARTNERS_DATA.map((obj, idx) => (
//           <div key={idx} className="w-full max-w-[425px] flex flex-col text-left px-4  mx-auto h-full bg-white">
//             <div className="h-[150px] w-full  mb-[50px]">
//               <img src={obj.logo} alt={obj.name} className="h-full object-contain" />
//             </div>
//             <div className="flex flex-col flex-grow">
//               <h3 className="text-[28px] font-extrabold pb-[30px] leading-[100%] min-h-[80px]">
//                 {obj.name}
//               </h3>
//               <p className="text-2xl text-black leading-[100%] pb-[26px]">
//                  {obj.role}
//                 <br />
//                 <span className="block mt-2 text-2xl leading-[120%]">
//                   {obj.description}
//                 </span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     <img src={FooterLogo} alt="logo" className="mx-auto mt-[52px]" />
//   </div>
//   )
// }
// export default Partners



import React from 'react'
import FooterLogo from '../assets/images/svg/footer-logo.svg'
import { PARTNERS_DATA } from '../utils/helper'

const Partners = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 lg:px-0">
      <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[75px]  mb-10 leading-[100%] pt-[60px] md:pt-[92px] pb-[40px] md:pb-[60px] text-center md:text-left font-extrabold">
        -Partners
      </h2>
      <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {PARTNERS_DATA.map((obj, idx) => (
          <div
            key={idx}
            className="w-full max-w-[425px] flex flex-col text-left px-2 mx-auto h-full bg-white">
            <div className="h-[130px] sm:h-[160px] md:h-[202px] w-full mb-[30px] sm:mb-[40px] md:mb-[50px] flex items-start">
              <img
                src={obj.logo}
                alt={obj.name}
                className="h-full object-contain object-left"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-extrabold pb-[20px] sm:pb-[24px] md:pb-[30px] leading-[100%] min-h-[60px]">
                {obj.name}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-black leading-[100%]  ">
                -{obj.role}
                <br />
                <span className="block mt-4 lg:mt-[26px]  leading-[120%]">{obj.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <img src={FooterLogo} alt="logo" className="mx-auto mt-[40px] md:mt-[52px]" />
    </div>
  )
}

export default Partners


