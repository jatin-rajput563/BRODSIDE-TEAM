import React from 'react';
import CharliesIcon from '../assets/images/png/charlies-img.png';

const Charlie = () => {
  return (
    <div className="bg-[#D8D8D8]">
      <div className="max-w-[1090px] mx-auto flex flex-col justify-center items-center text-center px-4 lg:px-0 py-[40px] sm:py-[50px] md:py-[62px]">
        <img
          src={CharliesIcon}
          alt="Charlie Icon"
          className="w-[80px] h-[60px] sm:w-[90px] sm:h-[68px] md:w-[98px] md:h-[75px] mb-6"/>
        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[130%] font-light text-black">
          <span className="font-extrabold">Charlie, Vector</span>
          <span> and </span>
          <span className="font-extrabold">Matt reconnected on Broadside</span>
          <span> because they saw a way to combine all they have learned into a decentralized franchise powered by NFTs that they believe can </span>
          h<span className="font-extrabold">elp people understand and participate in the real and rapidly decentralizing world taking shape around us</span>
          <span>, as distributed technology continues to transform culture in exciting ways.</span>
        </p>

      </div>
    </div>
  );
};

export default Charlie;
