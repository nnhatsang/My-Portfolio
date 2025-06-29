"use client";
import { MENULINKS } from "@/utils/constants";
import logo from "@public/icon.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  const Menu = (): React.ReactNode => {
    return (
      <section
        className={`menu fixed top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center transition-visibility duration-300 ${
          menuVisible
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
      >
        <div className="flex-none overflow-hidden flex items-center justify-center">
          <div
            className={`text-center transition-opacity duration-500 overflow-y-auto flex flex-none justify-center items-center max-h-screen ${
              menuVisible ? "opacity-100" : "opacity-0"
            }`}
          >
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
                    className="link relative inline font-bold text-5xl text-white duration-300 hover:no-underline hover:text-gray-300"
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
      {/* 
        ĐÃ XÓA: `sticky`, `top-0`, `z-20`
        Header bây giờ là một phần tử tĩnh (static) bình thường.
      */}
      <header className="py-6 px-10 max-lg:px-5 max-sm:px-5 bg-[#00283C] border-b border-b-gray-800">
        <div className="flex justify-between items-center section-container">
          <Link href="/" className="link z-[999]">
            <Image src={logo} alt="logo" priority width={40} height={40} />
          </Link>
          <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
            <button
              aria-label="Toggle Menu"
              className="hamburger w-6 h-6 flex items-center justify-center link relative z-[999]"
              onClick={() => setmenuVisible(!menuVisible)}
            >
              <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
            </button>
            {Menu()}
          </nav>
        </div>
      </header>

      {/* Background overlay cho menu vẫn giữ nguyên và hoạt động bình thường */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#00283C] transition-opacity duration-500 z-50 ${
          menuVisible
            ? "opacity-95 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setmenuVisible(false)}
      ></div>
    </>
  );
};

export default Header;
