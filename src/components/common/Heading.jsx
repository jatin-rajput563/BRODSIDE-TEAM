import React from "react";

const Heading = ({ headingText, headingClass }) => {
  return (
    <div>
      <p
        className={`font-extrabold leading-[100%] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] m-0 ${headingClass}`}
      >
        {headingText}
      </p>
    </div>
  );
};

export default Heading;
