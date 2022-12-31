import { StaticImageData } from "next/image";

export type LogoType = {
  logoLight: string | StaticImageData;
  logoDark: string | StaticImageData;
  href: string;
};
