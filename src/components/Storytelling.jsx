import React from "react";
import Heading from "./common/Heading";
import { STORYTELLING_DATA } from "../utils/helper";

const Storytelling = () => (
  <div className="">
    <Heading
      headingClass="py-[82px] max-w-[1320px] mx-auto px-3"
      headingText="-Starting with Storytelling..."
    />
    <div className="flex flex-wrap justify-center">
      {STORYTELLING_DATA.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden w-full max-w-[720px]"
        >
          <img
            className="w-full"
            src={item.img}
            alt={`story-img-${index + 1}`}
          />
          <div className="bg-[#7CA3D6] pt-[42px] pl-[38px] pb-[135px] pr-[12px] absolute top-[-100%] group-hover:top-0 transition-all duration-300 ease-in-out">
            <p className="font-extrabold text-[33px] leading-[100%] max-w-[453px]">
              {item.descriptionOne}
            </p>
            <p className="text-2xl max-w-[670px] pt-[30px]">
              {item.descriptionTwo}
            </p>
            <p className="text-2xl mt-[45px]">{item.descriptionThree}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Storytelling;
