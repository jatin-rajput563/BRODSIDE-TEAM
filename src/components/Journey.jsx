import React from 'react'
import Heading from './common/Heading'
import { JOURNEY_DATA } from '../utils/helper'

const Journey = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto lg:pt-20 md:pt-14 pt-10">
        <Heading headingClass={"pl-5 sm:pl-10 md:pl-[56px]"} headingText={"-The Journey Ahead..."} />
        <div className="flex lg:mt-20.5 md:mt-14 mt-10 max-xl:flex-wrap">
          {JOURNEY_DATA.map((item, index) => (
            <div key={index} className="max-xl:mx-auto max-xl:mb-6">
              <img
                className='w-full pointer-events-none' src={item.img} alt="images" />
              <div className="mt-5 md:mt-10 lg:mt-[50px] px-4">
                <p className={`text-[28px] font-normal leading-[96%] ${index === 0 ? 'max-w-[315px]' : 'max-w-[365px]'}`}>
                  <span className='font-extrabold'>{item.time}</span> {item.heading}
                </p>
                {index === 0 && (
                  <p className='text-2xl ff-courir leading-[120%] max-w-[338px] pt-2.5 md:pt-[30px]'>
                    {item.title}
                  </p>
                )}
                <p className={` text-2xl ff-courir leading-[120%] pt-2.5 md:pt-[30px] ${index === 2 ? 'max-w-[415px]' : ' max-w-[440px]'}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Journey