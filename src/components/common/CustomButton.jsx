import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
  return (
    <button type='button' className={`py-[23.5px] px-[25.5px] text-xl md:2xl xl:text-[35px] leading-[100%] text-[#070004] hover:bg-black hover:text-white transition-all duration-300  cursor-pointer ${btnClass}`}>{btnText}</button>
  )
}

export default CustomButton