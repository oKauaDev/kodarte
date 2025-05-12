"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Svg from "./Svg";

const links = [
  {
    href: "/",
    label: "Início",
  },
  {
    href: "/about",
    label: "Sobre",
  },
  {
    href: "/services",
    label: "Serviços",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <>
      <nav className="absolute right-0 top-0 z-50 flex items-center justify-end w-screen gap-8 px-[2.81vw] pt-10 max-mdl:hidden">
        {links.map((link) => (
          <Link
            href={link.href}
            className={`font-space-grotesk text-xl leading-7 font-bold tracking-widest text-support-100 ${
              pathname.endsWith(link.href)
                ? "after:h-[4px] after:w-full after:block after:bg-primary-300"
                : ""
            }`}
            key={link.href}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav className="px-[6vw] pt-10 items-center justify-between hidden max-mdl:flex">
        <Link href="/" aria-label="Kodarte Logo">
          <Svg src="/icons/mobileicon.svg" />
        </Link>
        <div className="flex items-center gap-8">
          <label
            className="w-5 h-5 border-t-2 border-support-100 after:h-[2px] after:w-full after:block after:bg-support-100 after:mt-[4px] before:h-[2px] before:w-full before:block before:bg-support-100 before:mt-[4px]"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          ></label>
        </div>

        <div
          className={`fixed z-[60] bg-[rgba(0,0,0,0.8)] top-0 left-0 w-screen h-screen ${
            mobileNavOpen ? "block" : "hidden"
          }`}
          onClick={({ target, currentTarget }) => {
            if (target === currentTarget) {
              setMobileNavOpen(false);
            }
          }}
        >
          <div
            className="h-[30%]"
            onClick={({ target, currentTarget }) => {
              if (target === currentTarget) {
                setMobileNavOpen(false);
              }
            }}
          ></div>
          <div className="bg-support-900 relative h-[70%] w-[95%] mx-auto rounded-t-3xl flex flex-col gap-6 px-10 py-6 animate-nav-to-default">
            {links.map((link) => (
              <Link
                href={link.href}
                className={`font-space-grotesk text-xl leading-7 font-bold tracking-widest text-support-100 px-10 py-4 rounded-lg ${
                  pathname.endsWith(link.href) ? "bg-primary-300" : "bg-support-800"
                }`}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}

            <button
              className={`font-space-grotesk text-xl leading-7 font-bold absolute bottom-24 w-[calc(100%-80px)] tracking-widest bg-primary-300 text-support-100 px-10 py-4 rounded-lg`}
              onClick={() => setMobileNavOpen(false)}
            >
              FECHAR
            </button>

            <div className="flex gap-10 items-center justify-center w-full">
              <Link
                href="https://wa.me/5532998566823"
                className="text-support-100 bg-primary-300 p-3 rounded-lg"
              >
                <Svg src="/icons/whatsapp.svg" />
              </Link>
              <Link
                href="https://discordapp.com/users/668849866805477398"
                className="text-support-100 bg-primary-300 p-3 rounded-lg"
              >
                <Svg src="/icons/discord.svg" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
