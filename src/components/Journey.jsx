import React from 'react'
import Heading from './common/Heading'
import { JOURNEY_DATA } from '../utils/helper'

const Journey = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto lg:pt-20 md:pt-14 pt-10">
        <Heading headingText={"-The Journey Ahead..."} />
        <div className="flex lg:mt-20.5 md:mt-14 mt-10 max-xl:flex-wrap">
          {JOURNEY_DATA.map((item, index) => (
            <div key={index} className="max-xl:mx-auto max-xl:mb-6">
              <img
                className={`${index === 0 ? 'max-[1480px]:max-w-[476px] w-full pointer-events-none' : 'max-[1480px]:max-w-[483px] w-full pointer-events-none'}`} src={item.img} alt="" />
              <div className="mt-5 md:mt-10 lg:mt-[50px] px-4">
                <p className='max-w-[365px] text-[28px] font-normal leading-[96%]'>
                  <span className='font-extrabold'>{item.time}</span> {item.heading}
                </p>
                {index === 0 && (
                  <p className='text-2xl ff-courir leading-[120%] max-w-[338px] pt-2.5 md:pt-[30px]'>
                    {item.title}
                  </p>
                )}
                <p className='text-2xl ff-courir leading-[120%] max-w-[415px] pt-2.5 md:pt-[30px]'>{item.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Journey