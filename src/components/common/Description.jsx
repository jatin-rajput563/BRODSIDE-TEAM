import React from 'react'

const Description = ({ descriptionClass, descriptionText, spanText }) => {
  return (
    <p className={`text-2xl leading-[120%] ${descriptionClass}`}>{descriptionText} {spanText} </p>
  )
}

export default Description