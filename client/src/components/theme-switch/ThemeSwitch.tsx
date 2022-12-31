"use client";

import React, { useEffect, useState } from "react";

import { themeOptions } from "../../data/data";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  });

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });

  return (
    <select
      className="border-1 w-full cursor-pointer rounded-md border-light_border bg-white py-1 capitalize focus:border-light_border focus:ring-0 dark:border-dark_border dark:bg-black lg:w-[12%]"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setTheme(e.target.value)
      }
      value={theme!}
    >
      {themeOptions.map((option) => {
        return (
          <option className="capitalize" key={option.name}>
            {option.name}
          </option>
          // <button onClick={() => setTheme(option.name)} key={option.name}></button>
        );
      })}
    </select>
  );
};
