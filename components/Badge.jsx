"use client";
import CountUp from "react-countup";
import React from "react";

const Badge = ({
  containerStyles,
  badgeText,
  icon,
  endCountNum,
  endCountText,
}) => {
  return (
    <div className={`badge${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl text-primary leading-none font-bold">
          <CountUp end={endCountNum} duration={4} delay={1} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none font-medium text-[15px] text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
