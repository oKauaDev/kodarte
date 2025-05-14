"use client";

import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Vercel() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
