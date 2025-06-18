import React from 'react'
import avatarImg from '../assets/images/png/avatar-img.png'
import Description from './common/Description'
import Heading from './common/Heading'

const Avatars = () => {
  return (
    <>
      <div className="px-4 mt-15  lg:mt-[111px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="min-[1438px]:!flex">
            <img className='min-[1438px]:max-w-[960px] w-full max-h-[547px]' src={avatarImg} alt="avatar-img" />
            <div className="bg-[#C4C4C4] py-8 md:py-[41px] px-5 min-[1435px]:pl-5.5 min-[1435px]:pr-[49px] min-[1438px]:max-w-[481px] w-full">
              <Description descriptionClass={"font-mono min-[1438px]:max-w-[375px]"} descriptionText={"Collection features rare cc0 traits contributed by guest artists and from projects including:"} spanClass={"!mt-[22]px !max-w-[347px]"} spanText={"XCOPY, Rektguy, Moonbirds, Goblintown, Nouns, Blitmaps, Kristy Glas, Cryptoadz, Eclectic Method, Grillz Gang, Robness, Max Osiris"} spanText2={"and more."} />
            </div>
          </div>
          <div className="bg-[#999999] pt-[78px] pb-[169px] pl-[63px] pr-[100px]">
            <Heading headingClass={"max-w-[1065px]"} headingText={"- Broadside Avatars offer two different licensing models: "} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatars
