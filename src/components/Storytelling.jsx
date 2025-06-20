import React from "react";
import Heading from "./common/Heading";
import { STORYTELLING_DATA } from "../utils/helper";

const Storytelling = () => (
  <>
    <div className="max-w-[1440px] mx-auto">
      <Heading
        headingClass="lg:py-20 md:py-14 py-10 max-w-[1320px] mx-auto px-3 max-xl:!pl-6 max-xl:!text-[65px] max-lg:!text-[48px] max-md:!text-[40px] "
        headingText="-Starting with Storytelling..."
      />
      <div className="flex flex-wrap justify-center">
        {STORYTELLING_DATA.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden w-full sm:w-[90%] md:w-[80%] cursor-pointer lg:w-[720px]"
          >
            <img
              className="w-full object-cover"
              src={item.img}
              alt={`story-img-${index + 1}`}
            />
            <div className="bg-[#7CA3D6] pt-6 sm:pt-8 md:pt-[42px] pl-4 sm:pl-6 md:pl-[38px] pb-16 sm:pb-24 md:pb-[135px] pr-3 sm:pr-4 md:pr-[12px] absolute top-[-300%] group-hover:top-0 transition-all duration-500 ease-in-out">
              <p className="font-extrabold text-[20px] sm:text-[28px] md:text-[33px] leading-[100%] max-w-[90%]">
                {item.descriptionOne}
              </p>
              <p className="text-base sm:text-xl md:text-2xl max-w-[95%] pt-4 sm:pt-6 md:pt-[30px] ff-courier">
                {item.descriptionTwo}
              </p>
              <p className="text-base sm:text-xl md:text-2xl mt-6 sm:mt-8 md:mt-[45px] ff-courier">
                {item.descriptionThree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Storytelling;
