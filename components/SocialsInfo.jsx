"use client";
import Link from "next/link";
import React from "react";

import { icons } from "@/lib/constants";

const SocialsInfo = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialsInfo;
