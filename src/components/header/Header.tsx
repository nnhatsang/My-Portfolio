"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@public/icon.svg";
import Image from "next/image";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import { ChevronDown, MenuIcon } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-background/95 sticky top-0 z-[90] !h-16 px-10 max-lg:px-5 max-sm:px-5 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
        <div className="container w-full h-full flex items-center justify-between px-0 sm:px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-2 lg:gap-4 max-lg:flex-1">
            <Link href="/">
              <Image src={logo} alt="logo" priority width={40} height={40} />
            </Link>
          </div>

          <div className="flex items-center gap-6 max-lg:flex-2">
            <nav className="hidden md:flex gap-6">
              <Link href="/link1">About</Link>
              <Link href="/link2">Education</Link>
              <Link href="/link3">Experience</Link>
            </nav>

            <div className="mx-3 z-[999]">
              <ThemeToggle />
            </div>
            <button className="block md:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
