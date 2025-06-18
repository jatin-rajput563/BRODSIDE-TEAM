import React from 'react'

const Description = ({ descriptionClass, descriptionText }) => {
  return (
    <p className={`text-2xl leading-[120%] ${descriptionClass}`}>{descriptionText}</p>
  )
}

export default Description