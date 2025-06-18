import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
  return (
    <button className={`py-[23.5px] px-[25.5px] xl:text-[35px] md:text-2xl text-xl leading-[100%] text-[#070004] ${btnClass}`}>{btnText}</button>
  )
}

export default CustomButton