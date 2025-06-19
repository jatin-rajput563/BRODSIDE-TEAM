import React from "react";
import Heading from "./common/Heading";
import { TEAM_DATA } from "../utils/helper";

const Team = () => {
  return (
    <>
      <div className="py-[40px] sm:py-[60px] md:py-[82px]">
        <div className="max-w-[1320px] mx-auto px-3">
          <Heading
            headingText="-The Team..."
            headingClass="text-left max-xl:!pl-6"
          />
          <div className="flex flex-wrap justify-center gap-y-8 sm:gap-y-12 md:gap-y-16 gap-x-8 md:mt-[100px] mt-10 sm:mt-[50px]">
            {TEAM_DATA.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] px-3"
              >
                <img className="mx-auto pointer-events-none rounded-full max-w-[267px] max-h-[267px] w-full" src={item.image} alt="profile-image" />
                <p className="max-w-[410px] mx-auto text-xl sm:text-2xl leading-[120%] !pt-5 sm:!pt-10 md:!pt-13 lg:!pt-[71px] ff-courier">
                  <span className="font-extrabold ff-neue">{item.name} </span>
                  {item.description}
                </p>
                <p className="text-xl sm:text-2xl leading-[120%] !pt-5 sm:!pt-9 md:!pt-[50px] max-w-[427px] mx-auto ff-courier">
                  {item.descriptionTwo}
                </p>
                {index !== 1 && (
                  <p className="text-xl sm:text-2xl leading-[120%] !pt-5 sm:!pt-9 md:!pt-[50px] max-w-[411px] mx-auto ff-courier">
                    {item.descriptionThree}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
