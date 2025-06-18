import React from 'react'

const CustomButton = ({ btnClass, btnText }) => {
  return (
    <button className={`py-[23.5px] px-[25.5px] text-[35px] leadind-[100%] text-[#070004] ${btnClass}`}>{btnText}</button>
  )
}

export default CustomButton