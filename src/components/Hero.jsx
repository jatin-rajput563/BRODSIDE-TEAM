import React, { useState } from "react";
import heroImg from "../assets/images/png/hero-bg.png";
import logo from "../assets/images/png/broadside.png";
import Heading from "./common/Heading";
import Description from "./common/Description";
import arrow from "../assets/images/svg/arrow.svg";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
  };

  return (
    <div
      className="relative max-w-[1920px] mx-auto lg:min-h-[575px] min-h-[700px] xl:min-h-[800px] 2xl:min-h-[1080px] overflow-hidden"
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {showVideo ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0pFQtR1pUEU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=0pFQtR1pUEU"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <img
            src={heroImg}
            alt="hero background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="absolute right-[5%] z-10 pointer-events-none">
        <img src={logo} alt="logo" />
      </div>

      <div className="absolute md:top-[33%] top-[65%] xl:left-[6%] md:left-[3%] left-[21%] z-10">
        <Description
          descriptionText="WELCOME TO BROADSIDE..."
          descriptionClass="!font-light md:!text-left !uppercase !tracking-wide !text-white/70"
        />
        <Description
          descriptionText="ACCEPT! REJECT!"
          descriptionClass="!mb-5 !font-light md:!text-left !text-center !uppercase !tracking-wide !text-white/70"
        />
        <div className="text-sm font-light lg:text-lg xl:text-2xl text-white/70">
          <p>&gt; CONNECTING WALLETS.</p>
          <p>&gt; ESTABLISHING PERIMETER.</p>
          <p>&gt; RENDERING ARM0R.</p>
          <p>&gt; ACTIVATING MAP CAMS.</p>
          <p>&gt; CALIBRATING HAPTICS.</p>
          <p>&gt; RENDERING MAP.</p>
        </div>
      </div>

      <div className="absolute md:top-[58%] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        {!showVideo && (
          <button
            className="pl-8 pr-[13px] py-[13px] lg:pl-9 lg:pr-[17px] lg:pt-[17px] lg:pb-[19px] bg-[#FFBE06] rounded-full cursor-pointer"
            onClick={handlePlayClick}
          >
            <img
              src={arrow}
              alt="arrow"
              className="lg:w-[45px] lg:h-[61px] md:w-[40px] w-[35px]"
            />
          </button>
        )}
        <Heading
          headingText="PLAY TRAILER"
          headingClass="!text-white xl:!text-[40px] md:!text-3xl !text-2xl !pt-3 !whitespace-nowrap"
        />
      </div>

      <div className="absolute md:bottom-[2%] bottom-[41%] xl:left-[12%] lg:left-[0%] z-10">
        <Heading
          headingText="A DECENTRALIZED TALE OF 5,454 ANONYMOUS HEROES"
          headingClass="!text-white max-xl:!text-[40px] !max-w-[1142px] max-lg:!text-4xl max-md:!text-2xl max-xl:text-center"
        />
      </div>
    </div>
  );
};

export default Hero;
