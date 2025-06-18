import React from "react";

const Heading = ({ headingText, headingClass }) => {
  return (
    <h2 className={`font-extrabold leading-[100%] text-black text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] ${headingClass}`}>
      {headingText}
    </h2>
  );
};

export default Heading;
