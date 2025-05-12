import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Enterprise {
  icon: string;
  name: string;
  description: string;
  website?: string;
  background: string;
}

const enterprises: Enterprise[] = [
  {
    icon: "/images/icon-sapiencia.png",
    name: "Sapiencia",
    description: "A sua ferramenta para treinar suas redações com IA.",
    website: "https://sapienciaedu.com.br",
    background: "/images/background-sapiencia.jpg",
  },
  {
    icon: "/images/icon-luxfy.png",
    name: "Luxfy",
    description: "Uma assistente pronta para atender seus clientes.",
    website: "https://luxfy.app",
    background: "/images/background-luxfy.jpg",
  },
  {
    icon: "/images/icon-peteria.png",
    name: "Peteria",
    description: "Um dashboard completo para o bot do PeterIA.",
    website: "https://peteria.com.br",
    background: "/images/background-peteria.jpg",
  },
];

export default function Enterprises() {
  return (
    <div className="grid grid-cols-3 gap-16 mt-20 pl-28 max-lg2:grid-cols-2 max-mdl:pl-0 max-md:!grid-cols-1 to-bottom">
      {enterprises.map((enterprise) => (
        <div
          className="py-10 px-8 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${enterprise.background})` }}
          key={enterprise.name}
        >
          <Image
            src={enterprise.icon}
            width={90}
            height={90}
            alt={enterprise.name}
            className="mx-auto"
          />
          <h3 className="mt-7 mb-4 text-[2rem] leading-12 font-bold uppercase font-space-grotesk text-support-100 tracking-widest text-center">
            {enterprise.name}
          </h3>
          <p className="text-lg leading-7 text-support-100 text-center mb-7">
            {enterprise.description}
          </p>
          {enterprise.website && (
            <Link
              href={enterprise.website}
              target="_blank"
              className="flex items-center justify-center gap-3 text-support-100 uppercase font-space-grotesk text-xl leading-5 font-bold py-2 px-5 bg-primary-300 rounded-lg w-full relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-white/10 before:via-white/40 before:to-white/10 before:-translate-x-full before:skew-x-[-30deg] before:transition-all before:duration-500 hover:before:translate-x-[250%] max-lg:mx-auto"
            >
              ver site
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
