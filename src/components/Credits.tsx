import React from "react";
import Svg from "./Svg";
import Link from "next/link";

type Props = {
  margin?: boolean;
};

export default function Credits({ margin = true }: Props) {
  return (
    <>
      {margin && <div className="pl-34 max-mdl:hidden"></div>}
      <div>
        <div className="w-24 h-screen fixed left-0 z-50 top-0 bg-[rgba(0,0,0,0.8)] max-mdl:hidden">
          <div className="relative h-screen py-10 px-6">
            <Link
              href="/"
              className="mx-auto flex items-center justify-center p-3"
              aria-label="Kodarte Logo"
            >
              <Svg src="/icons/logo.svg" />
            </Link>
            <div className="text-support-100 absolute bottom-10 left-2/4 -translate-x-2/4 flex items-center justify-center flex-col gap-8">
              <Link
                href="https://wa.me/5532998566823"
                aria-label="whatsapp"
                className="text-support-300"
              >
                <Svg src="/icons/whatsapp.svg" />
              </Link>
              <Link
                href="https://discordapp.com/users/668849866805477398"
                className="text-support-300"
                aria-label="discord"
              >
                <Svg src="/icons/discord.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
