import React from 'react'
import heroImg from '../assets/images/png/hero-bg.png'
import logo from '../assets/images/png/broadside.png'
import { Arrow } from '../utils/Icons'
import Heading from './common/Heading'
import Description from './common/Description'


const Hero = () => {
  return (
    <div className="lg:min-h-[575px] xl:min-h-[800px] 2xl:min-h-[1080px] relative max-w-[1920px] mx-auto">
      <div className='absolute'>
        <img src={heroImg} alt="heroImg" />
      </div>
      <div className='absolute right-[5%]'>
        <img src={logo} alt="logo" />
      </div>
      <div className='absolute top-[33%] xl:left-[6%] left-[3%]'>
        <Description descriptionText="WELCOME TO BROADSIDE..." descriptionClass="!font-light !text-left !uppercase !tracking-wide !text-white"/>
        <Description descriptionText="ACCEPT! REJECT!" descriptionClass="!mb-5 !font-light !text-left !uppercase !tracking-wide !text-white" />
        <div className="text-sm font-light lg:text-lg xl:text-2xl text-white">
          <p>&gt; CONNECTING WALLETS.</p>
          <p>&gt; ESTABLISHING PERIMETER.</p>
          <p>&gt; RENDERING ARM0R.</p>
          <p>&gt; ACTIVATING MAP CAMS.</p>
          <p>&gt; CALIBRATING HAPTICS.</p>
          <p>&gt; RENDERING MAP.</p>
        </div>
      </div>
      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <button className="pl-9 cursor-pointer pr-[17px] pt-[17px] pb-[19px] bg-[#FFBE06] rounded-full">
          <Arrow/>
        </button>
        <p className=" font-extrabold"></p>
        <Heading headingText="PLAY TRAILER" headingClass="!text-white xl:!text-[40px] !text-3xl !pt-2"/>
      </div>
      <div className='absolute bottom-[2%] xl:left-[12%] left-[5%]'>
        <Heading headingText="A DECENTRALIZED TALE OF 5,454 ANONYMOUS HEROES" headingClass="!text-white max-xl:!text-[40px] max-xl:text-center"/>
      </div>
    </div>
  )
}

export default Hero
