import Image from "next/image";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <>
      <Image
        src="/images/hero-light.png"
        alt="Hero Section"
        width={1400}
        height={200}
        className="max-h-[500px] w-full object-cover dark:hidden"
      />
      <Image
        src="/images/hero-dark.png"
        alt="Hero Section"
        width={1400}
        height={200}
        className="max-h-[500px] w-full object-cover hidden dark:block"
      />
    </>
  );
};
