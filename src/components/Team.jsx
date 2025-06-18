import React from "react";
import Heading from "./common/Heading";
import { TEAM_DATA } from "../utils/helper";

const Team = () => {
  return (
    <>
      <div className="py-[82px]">
        <div className="max-w-[1320px] mx-auto px-3">
          <Heading headingText="-The Team..." headingClass="text-left" />
          <div className="flex flex-wrap justify-center gap-y-16 gap-x-8 mt-[100px]">
            {TEAM_DATA.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] px-3"
              >
                <img className="mx-auto" src={item.Image} alt="profile-image" />
                <p className="max-w-[410px] mx-auto text-xl sm:text-2xl leading-[120%] pt-10 sm:pt-[71px] ff-neue">
                  <span className="font-extrabold">{item.name} </span>
                  {item.description}
                </p>
                <p className="text-xl sm:text-2xl leading-[120%] pt-8 sm:pt-[50px] max-w-[427px] mx-auto ff-courir">
                  {item.descriptionTwo}
                </p>
                <p className="text-xl sm:text-2xl leading-[120%] pt-8 sm:pt-[50px] max-w-[411px] mx-auto ff-courir">
                  {item.descriptionThree}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
