import React from 'react'
import avatarImg from '../assets/images/png/avatar-img.png'
import Description from './common/Description'
import Heading from './common/Heading'

const Avatars = () => {
  return (
    <>
      <div className="md:mt-15 mt-10  lg:mt-[111px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="min-[1438px]:!flex">
            <img className='min-[1438px]:max-w-[960px] w-full max-h-[547px] pointer-events-none' src={avatarImg} alt="avatar-img" />
            <div className="bg-[#C4C4C4] py-8 md:py-[41px] px-5 min-[1435px]:pl-5.5 min-[1435px]:pr-[49px] min-[1438px]:max-w-[481px] w-full">
              <Description descriptionClass={"min-[1438px]:max-w-[375px]"} descriptionText={"Collection features rare cc0 traits contributed by guest artists and from projects including:"} spanClass={"!mt-[22]px !max-w-[347px]"} spanText={"XCOPY, Rektguy, Moonbirds, Goblintown, Nouns, Blitmaps, Kristy Glas, Cryptoadz, Eclectic Method, Grillz Gang, Robness, Max Osiris"} spanText2={"and more."} />
            </div>
          </div>
          <div className="bg-[#999999] px-5 py-10 md:pt-[78px] md:pb-[169px] md:pl-[63px] md:pr-[100px]">
            <Heading headingClass={"max-w-[1065px] text-5xl lg:!text-[64px]"} headingText={"- Broadside Avatars offer two different licensing models: "} />
            <div className="flex flex-wrap gap-5 justify-between mt-[60px]">
              <div className="min-[1272px]:max-w-[528px] w-full">
                <Heading headingClass={"!text-[100px] md:text-[150px] lg:!text-[230.73px] text-white"} headingText={"cc0"} />
                <Description descriptionClass={"pt-[25px]"} spanText={"1."} descriptionText={"All Broadsiders featuring existing cc0 artwork from other collections and artists are cc0. Meaning you  and anyone else can continue telling their story in any way you like, on any platform you wish"} />
              </div>
              <div className="min-[1272px]:max-w-[529px] w-full max-[1272px]:mt-6">
                <Heading headingClass={"text-[30px] md:!text-[64.71px] text-white"} headingText={"FULL COMMERCIAL RIGHTS"} />
                <Description descriptionClass={"pt-[25px] md:pt-[45px]"} spanText={"2."} descriptionText={"Broadsiders without cc0 traits grant the holder full commercial rights to that Broadsider’s name and likeness. Meaning you as the holder and only you as the holder have the ability to exploit your character commercially and continue telling their story in any way you like, on any platform you wish."} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatars
