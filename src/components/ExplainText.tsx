"use client";

import React from "react";

type Props = {
  text: React.ReactNode;
  explain: React.ReactNode;
};

export default function ExplainText({ text, explain }: Props) {
  const popupRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const onMouseMove = React.useCallback((event: React.MouseEvent) => {
    if (window.matchMedia("(min-width: 600px)").matches) {
      const popup = popupRef.current;

      if (popup) {
        const { clientX, currentTarget } = event;
        const leftMargin =
          currentTarget.clientWidth + (currentTarget.parentElement?.offsetLeft ?? 0);

        const move = -((clientX - leftMargin) / 2);

        const actualToLeftPosition =
          -move + (popup.parentElement?.offsetLeft ?? 0) + popup.clientWidth / 2 + 32;

        if (actualToLeftPosition < window.innerWidth && actualToLeftPosition > 0) {
          popup.style.right = `${move}px`;
        }
      }
    }
  }, []);

  React.useEffect(() => {
    let clickCOunt = 1;

    function closeOnClick() {
      if (clickCOunt === 2) {
        setOpen(false);
      } else {
        clickCOunt = 2;
      }
    }

    if (open) {
      window.addEventListener("click", closeOnClick);
    } else {
      window.removeEventListener("click", closeOnClick);
    }

    return () => {
      window.removeEventListener("click", closeOnClick);
    };
  });

  const onTouchClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <span
      className="leading-8 cursor-pointer relative bg-gradient-to-r inline-block after:block after:bg-gradient-to-r after:from-[#5004d4] after:to-[#13d8e6] after:h-[2px] after:w-full from-[#5004d4] to-[#13d8e6] bg-clip-text text-transparent group select-none"
      onMouseMove={onMouseMove}
      onTouchStart={onTouchClick}
    >
      {text}
      <div
        className={`absolute transition-[scale] -z-[100] scale-[0.7] opacity-0 w-0 h-0 overflow-hidden group-hover:scale-100 group-hover:z-10 group-hover:opacity-100 bg-support-100 group-hover:w-64 group-hover:h-auto rounded-2xl top-10 px-6 py-3 text-support-900 text-lg normal-case tracking-normal font-roboto font-normal`}
        ref={popupRef}
      >
        {explain}
      </div>
      <div
        className={`fixed z-40 transition-[scale] w-0 h-0 overflow-hidden bg-support-100 rounded-2xl px-6 py-3 left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4  text-support-900 text-lg normal-case tracking-normal font-roboto font-normal ${
          open ? "scale-100 z-[100] opacity-100 !w-64 !h-auto" : "-z-[100] scale-[0.7] opacity-0"
        }`}
      >
        {explain}
      </div>
    </span>
  );
}
