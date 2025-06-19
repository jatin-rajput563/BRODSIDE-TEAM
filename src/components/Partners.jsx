import React from "react";
import logo from "../assets/images/svg/footer-logo.svg";
import { PARTNERS_DATA } from "../utils/helper";
import Heading from "./common/Heading";

const Partners = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 lg:px-0">
      <Heading
        headingText="-Partners"
        headingClass="mb-4 lg:mb-10 leading-none py-8 sm:py-10 md:pt-18 lg:pt-24  md:pb-13 lg::pb-16  pl-5 "/>
      <div className=" flex flex-wrap justify-center  mx-auto   ">
        {PARTNERS_DATA.map((obj, index) => (
          <div
            key={index}
            className="w-full max-w-[425px] flex flex-col text-left px-4 xl:px-2 mx-auto h-full bg-white justify-center">
            <div className="h-20 sm:h-[130px] md:h-[150px] lg:h-[202px] w-full mb-4 sm:mb-10 md:mb-12 flex ">
              <img
                src={obj.image}
                alt={obj.name}
                className="h-full object-contain object-left"/>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[22px] sm:text-2xl md:text-[28px] font-extrabold pb-2 sm:pb-6 md:pb-8 leading-none min-h-[60px]">
                {obj.name}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-black leading-none ff-courier">
                -{obj.role}
                <span className="block mt-4 lg:mt-6 leading-[120%] ff-courier  pr-2 lg:pr-10">
                  {obj.description}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <img
        src={logo}
        alt="logo"
        className="mx-auto mt-10 md:mt-13  px-4"
      />
    </div>
  );
};

export default Partners;
