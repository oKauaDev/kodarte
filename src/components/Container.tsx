import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`bg-[url(/images/background.jpg)] px-[2.81vw] max-mdl:px-[6vw] py-10 bg-cover bg-center min-h-screen ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
