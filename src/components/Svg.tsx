"use client";

import React from "react";
import { ReactSVG } from "react-svg";
import { Props } from "react-svg/dist/types";

export default function Svg({ src, width, height, className, style }: Props) {
  return <ReactSVG src={src} width={width} height={height} className={className} style={style} />;
}
