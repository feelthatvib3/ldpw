import React, { FunctionComponent } from "react";

import Image from "next/image";
import Link from "next/link";
import { LogoType } from "../../types/headerType";

const Logo: FunctionComponent<LogoType> = ({ logoLight, logoDark, href }) => {
  return (
    <div>
      <Link href={href} className="flex items-center gap-x-2">
        <Image
          src={logoDark}
          alt="Logo"
          width={20}
          className="hidden dark:block"
        ></Image>
        <Image
          src={logoLight}
          alt="Logo"
          width={20}
          className="dark:hidden"
        ></Image>
        <span className="text-xl font-medium tracking-wide">ЛДПУ</span>
      </Link>
    </div>
  );
};

export default Logo;
