import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
  return (
    <button className={`py-[23.5px] px-[25.5px] text-xl md:2xl xl:text-[35px] leading-[100%] text-[#070004] ${btnClass}`}>{btnText}</button>
  )
}

export default CustomButton