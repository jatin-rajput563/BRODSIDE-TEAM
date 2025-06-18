import React from 'react'

const CustomInput = ({ inputClass }) => {
    return (
        <input className={`xl:text-[35px] md:text-2xl text-xl leading-[100%] text-[#070004] pl-8 py-[23.5px] ${inputClass}`} type="email" placeholder="broadsider@email.com" />
    )
}

export default CustomInput