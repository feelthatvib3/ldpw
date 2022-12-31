"use client";

import React, { useState } from "react";

const MenuButton = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      onClick={() => setMenu(!menu)}
      className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-y-2"
    >
      <span
        className={`${
          menu ? "translate-y-1 rotate-45" : ""
        } h-[1px] w-6 bg-dark_primary transition-all dark:bg-light_primary`}
      ></span>
      <span
        className={`${
          menu ? "-translate-y-[5px] -rotate-45" : ""
        } h-[1px] w-6 bg-dark_primary transition-all dark:bg-light_primary`}
      ></span>
    </div>
  );
};

export default MenuButton;
