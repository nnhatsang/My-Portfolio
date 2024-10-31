"use client";
import FacebookIcon from "@/assets/svg/facebook.svg";
import GithubIcon from "@/assets/svg/github.svg";
import LinkedinIcon from "@/assets/svg/linkedin.svg";
import { LucidePhone } from "lucide-react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <a target="_blank" href="https://facebook.com/nnhatsang">
            <Image
              src={FacebookIcon}
              alt="Vercel Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </a>
          <a target="_blank" href="https://github.com/nnhatsang">
            <Image
              src={GithubIcon}
              alt="Vercel Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </a>
          <a target="_blank" href="https://linkedin.com/in/nnhatsang">
            <Image
              src={LinkedinIcon}
              alt="Vercel Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            className="flex gap-2 items-center"
            target="_blank"
            href="mailto:nhatsang57@gmail.com"
          >
            <CiMail className="h-6 w-6" />
            nhatsang57@gmail.com
          </a>
          <a
            className="flex gap-2 items-center"
            target="_blank"
            href="tel:0356740278"
          >
            <LucidePhone className="h-6 w-6" />
            0356740278
          </a>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-gray-300">
          &copy; Design by Nnhatsang.
        </p>
      </div>
    </div>
  );
};

export default Footer;
