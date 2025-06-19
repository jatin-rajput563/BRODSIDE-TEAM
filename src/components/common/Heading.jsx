import React from "react";

const Heading = ({
  headingText,
  headingClass,
  headSpanText,
  headSpanClass,
  headSpanTextTwo,
  headSpanClassTwo,
}) => {
  return (
    <h2
      className={`font-extrabold leading-[100%] ff-neue text-black text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] ${headingClass}`}
    >
      <span className={`${headSpanClass}`}>{headSpanText}</span>
      {headingText}
      <span className={`${headSpanClassTwo}`}>{headSpanTextTwo}</span>
    </h2>
  );
};

export default Heading;
