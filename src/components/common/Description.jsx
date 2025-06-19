import React from 'react'

const Description = ({ descriptionClass, descriptionText, spanText, spanClass }) => {
  return (
    <p className={`text-2xl leading-[120%] ${descriptionClass}`}><span className={`font-extrabold text-2xl md:text-[32px] leading-[120%] ${spanClass}`}>{spanText}</span> {descriptionText}</p>
  )
}

export default Description