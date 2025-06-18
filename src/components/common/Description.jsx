import React from 'react'

const Description = ({ descriptionClass, descriptionText, spanText, spanClass, spanClass2, spanText2 }) => {
  return (
    <p className={`text-2xl leading-[120%] ${descriptionClass}`}>{descriptionText} <span className={`font-extrabold text-2xl md:text-[32px] leading-[120%] ${spanClass}`}>{spanText}</span> <span className={`${spanClass2}`}>{spanText2}</span></p>
  )
}

export default Description