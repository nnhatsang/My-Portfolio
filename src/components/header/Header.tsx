"use client";
import { MENULINKS } from "@/utils/constants";
import logo from "@public/icon.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Header: React.FC = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  const Menu = (): React.ReactNode => {
    return (
      <section
        className="menu fixed top-0 left-0 w-full h-screen z-50 overflow-hidden invisible pointer-events-none flex items-center justify-center"
        style={{ visibility: "hidden" }}
      >
        <div className="flex-none overflow-hidden flex items-center justify-center">
          <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
            <ul
              className="list-none py-4 px-0 m-0 block max-h-screen"
              role="menu"
            >
              {MENULINKS.map((el) => (
                <li
                  className="p-0 m-6 text-2xl block"
                  key={el.name}
                  role="menuitem"
                >
                  <a
                    className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                    href={`#${el.ref}`}
                    onClick={() => setmenuVisible(false)}
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <header className="sticky top-0 py-8  px-10 max-lg:px-5 max-sm:px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
        <div className="flex justify-between section-container">
          <a href="#home" className="link z-[999]">
            <Image src={logo} alt="logo" priority width={40} height={40} />
          </a>
          <div className="flex items-center gap-6 max-lg:flex-2">
            <div className="mx-3 z-[999]">
              <ThemeToggle />
            </div>
            <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
              <button
                className="hamburger w-6 h-6 flex items-center justify-center link relative z-10"
                onClick={() => setmenuVisible(!menuVisible)}
              >
                <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
              </button>
              {Menu()}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
