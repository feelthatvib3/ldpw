"use client";

import React, { useState } from "react";

import logoDark from "../../../client/public/logo-dark.png";
import logoLight from "../../../client/public/logo-light.png";

import Logo from "../components/logo/Logo";
import MenuButton from "../components/menu-button/MenuButton";
import { NavigationMobile } from "../components/navigation-mobile/NavigationMobile";
import { Navigation } from "../components/navigation/Navigation";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="fixed w-full border-b border-b-light_border bg-white dark:border-b-dark_border dark:bg-black">
      <nav className="container flex max-w-screen-lg items-center justify-between py-2">
        <div>
          <Logo logoLight={logoLight} logoDark={logoDark} href={"/"} />
        </div>
        {/* mobile navigation button | shown by default | hidden on desktop mode */}
        <div className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          <MenuButton />
        </div>
        {/* navigation | hidden by default | shown on desktop mode */}
        <div className="hidden lg:block">
          <Navigation />
        </div>
      </nav>
      {/* mobile navigation | available by default | unavailable on desktop mode */}
      <div
        className={`${
          mobileNav ? "max-h-full" : "max-h-0 overflow-hidden"
        } fixed left-0 h-full w-full bg-white transition-all dark:bg-black`}
      >
        <NavigationMobile />
      </div>
    </header>
  );
};
