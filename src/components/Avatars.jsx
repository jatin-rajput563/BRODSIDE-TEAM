import React from "react";
import avatarImg from "../assets/images/png/avatar-img.png";
import Description from "./common/Description";
import Heading from "./common/Heading";

const Avatars = () => {
  return (
    <>
      <div className="md:mt-14 mt-10 lg:mt-[111px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="min-[1440px]:!flex">
            <img
              className="min-[1440px]:max-w-[960px] w-full max-h-[547px] pointer-events-none"
              src={avatarImg}
              alt="avatar-img"
            />
            <div className="bg-[#C4C4C4] py-8 md:py-[41px] px-5 min-[1435px]:pl-5.5 min-[1435px]:pr-[49px] min-[1440px]:max-w-[481px] w-full">
              <Description
                descriptionClass="min-[1440px]:max-w-[410px]"
                descriptionText="Collection features rare cc0 traits contributed by guest artists and from projects including:"
                spanClass="min-[1440px]:max-w-[347px] pt-3 sm:pt-[22px] block"
                spanText="XCOPY, Rektguy, Moonbirds, Goblintown, Nouns, Blitmaps, Kristy Glas, Cryptoadz, Eclectic Method, Grillz Gang, Robness, Max Osiris"
              />
              <Description descriptionText="and more." />
            </div>
          </div>
          <div className="bg-[#999999] px-5 py-10 sm:py-12 md:py-15 lg:py-[78px] xl:pb-[169px] md:px-[55px] lg:pr-[100px]">
            <h2 className="leading-[100%] ff-neue text-black text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] max-w-[1190px]">
              <span className="font-extrabold"> - Broadside Avatars </span>
              offer
              <span className="font-extrabold"> two </span>
              different licensing models:{" "}
            </h2>
            <div className="flex flex-wrap gap-5 justify-between mt-7 lg:mt-[60px]">
              <div className="min-xl:max-w-[528px] w-full">
                <Heading
                  headingClass={
                    "!text-[100px] md:text-[150px] lg:!text-[230.73px] text-white"
                  }
                  headingText={"cc0"}
                />
                <Description
                  descriptionClass={"pt-[25px] ff-courier"}
                  spanText2="1."
                  descriptionText={
                    "All Broadsiders featuring existing cc0 artwork from other collections and artists are cc0. Meaning you  and anyone else can continue telling their story in any way you like, on any platform you wish"
                  }
                />
              </div>
              <div className="min-xl:max-w-[529px] w-full">
                <Heading
                  headingClass={"text-[30px] md:!text-[64.71px] text-white"}
                  headingText={"FULL COMMERCIAL RIGHTS"}
                />
                <Description
                  descriptionClass={"pt-[25px] md:pt-[45px] ff-courier"}
                  spanText2="2."
                  descriptionText={
                    " Broadsiders without cc0 traits grant the holder full commercial rights to that Broadsider’s name and likeness. Meaning you as the holder and only you as the holder have the ability to exploit your character commercially and continue telling their story in any way you like, on any platform you wish."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatars;
