import React from 'react'

const CustomInput = ({ inputClass }) => {
    return (
        <input className={` text-xl md:2xl xl:text-[35px] leading-[100%] text-black pl-8 py-[23.5px] ${inputClass}`} type="email" placeholder="broadsider@email.com" />
    )
}

export default CustomInput


