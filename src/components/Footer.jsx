import React from "react";
import CustomInput from "./common/CustomInput";
import CustomButton from "./common/CustomButton";
import twitter from "../assets/images/svg/twitter.svg";

const Footer = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="bg-[#1154B0] flex justify-center items-center">
        <div className="w-full max-w-[1029px] mx-auto px-4 ">
          <div className="flex flex-col md:flex-row  gap-4 lg:gap-6 xl:gap-[47px] py-6 md:py-[50px] items-center">
            <CustomInput inputClass="bg-white w-full w-[730px] !text-black " />
            <CustomButton
              btnClass="bg-[#FFF173] w-full md:w-auto md:whitespace-nowrap px-[27px]"
              btnText="NOTIFY ME"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl leading-[120%] text-white text-center max-w-[395px] mx-auto">
            100% ORGANIC COMMUNITY NO PAID INFLUENCERS NO PAID ADS
          </p>
          <p className="text-[20px] sm:text-[28px] md:text-[32px] leading-[100%] text-center text-white pb-10 lg:pb-15">
            NONE OF THEM ARE AS STRONG AS ALL OF US
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center pb-[30px] md:pb-[70px] lg:pb-[96px]">
            <a
              href="https://twitter.com/en/tos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[22px] sm:text-[30px] md:text-[37px] leading-[100%] text-white"
            >
              <span className="underline">LEGAL</span> -{" "}
              <span className="underline">TWITTER</span>
            </a>
            <a
              href="https://twitter.com/Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter Icon"
                className=" hover:transition-transform duration-300 hover:scale-105 pointer-events-none w-10 md:w-[75px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
