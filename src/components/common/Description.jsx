import React from 'react'

const Description = ({ descriptionClass, descriptionText, spanClass, spanText, spanText2 }) => {
  return (
    <p className={`text-2xl leading-[120%] ff-courier ${descriptionClass}`}> <span className='font-bold'>{spanText2}</span> {descriptionText}  <br /> <span className={`font-extrabold text-[32px]  ${spanClass}`}>{spanText}</span></p>
  )
}

export default Description