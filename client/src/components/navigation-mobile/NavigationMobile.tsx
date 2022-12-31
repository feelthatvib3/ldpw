import Link from "next/link";
import React from "react";

import { navigation } from "../../data/data";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";

export const NavigationMobile = () => {
  return (
    <nav className="flex h-full w-full flex-col gap-y-10 overflow-hidden px-4 pt-6">
      <div>
        <p className="mb-4 text-xs font-bold uppercase text-dark_header_text">
          Основные ссылки
        </p>
        <ul className="flex flex-col gap-y-4">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="border-b border-b-light_border pb-[6px] text-xl font-medium uppercase dark:border-b-dark_border"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-4 text-xs font-bold uppercase text-dark_header_text">
          Тема
        </p>
        <div className="w-full">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
