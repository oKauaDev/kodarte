"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

type Props = ImageProps & {
  mediaQuery: number;
};

export default function ImageMediaQuery({ mediaQuery, ...props }: Props) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(`(min-width: ${mediaQuery}px)`);
    setVisible(media.matches);
  }, [mediaQuery]);

  if (visible) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...(props as ImageProps)} />;
  }

  return null;
}
