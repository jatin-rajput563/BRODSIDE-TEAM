import React from 'react';
import charliesIcon from '../assets/images/png/charlie-icon-img.png';

const Charlie = () => {
  return (
    <div className="bg-gray-300">
      <div className="max-w-[1090px] mx-auto flex flex-col justify-center items-center text-center px-6 lg:px-4 xl:px-0 py-10 sm:py-12 md:py-16">
        <img
          src={charliesIcon}
          alt="Charlie Icon"
          className="w-20 h-16 sm:w-24 sm:h-20 md:w-[98px] md:h-[75px] mb-4 lg:mb-6"/>
        <p className="text-[20px] sm:text-2xl md:text-[28px] lg:text-[32px] leading-[130%] font-light text-black">
          <span className="font-extrabold">Charlie, Vector</span>
          <span> and </span>
          <span className="font-extrabold">Matt reconnected on Broadside</span>
          <span> because they saw a way to combine all they have learned into a decentralized franchise powered by NFTs that they believe can </span>
          <span className="font-extrabold">help people understand and participate in the real and rapidly decentralizing world taking shape around us</span>
          <span>, as distributed technology continues to transform culture in exciting ways.</span>
        </p>
      </div>
    </div>
  );
};

export default Charlie;
