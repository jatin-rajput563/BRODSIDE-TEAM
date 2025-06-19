import React from 'react';
import CustomButton from '../components/common/CustomButton';
import CustomInput from '../components/common/CustomInput';
import Heading from './common/Heading';
import twitter from '../assets/images/png/twitter-img.png'

const Notify = () => {
  return (
    <div className='notify-bg bg-cover bg-center bg-no-repeat md:min-h-[409px] xl:pl-[181px] px-4 md:py-20 py-10 max-w-[1920px] mx-auto '>
      <div className='max-w-[1005px]'>
        <Heading headingText="Are you ready?" headingClass="md:!text-[30px] !text-xl !pb-10" />
        <div className='gap-5 flex max-md:flex-wrap lg:justify-center'>
          <CustomInput inputClass="!bg-[#FEFDFF] !w-full xl:!max-w-[730px] !text-black" />
          <CustomButton btnText="NOTIFY ME" btnClass="!bg-[#7BFFCC] !border-black !border-[5px] !whitespace-nowrap max-md:!w-full" />
        </div>
          <a href='https://x.com/' target='_blank'
            rel='noopener noreferrer' className='flex items-center mt-10 gap-6'>
            <img
              src={twitter}
              alt="Twitter"
              className="md:w-[65px] w-10 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:brightness-110"
            />
            <Heading headingText="Follow on Twitter" headingClass="md:!text-[30px] !text-xl" />
          </a>
      </div>
    </div>
  )
}

export default Notify

