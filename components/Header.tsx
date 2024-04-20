import Image from "next/image";
import { type ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <Image src={image.src} alt={image.alt} height={500} width={500} />
      {children}
    </header>
  );
}

export default Header;
