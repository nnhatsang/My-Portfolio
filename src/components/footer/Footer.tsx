"use client";
import { MENULINKS, SOCIAL_LINKS } from "@/utils/constants";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
  const { ref: footerRef } = MENULINKS[4];
  const renderSocialIcons = (): React.ReactNode => {
    return (Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map(
      (el) => (
        <a
          href={SOCIAL_LINKS[el]}
          key={el}
          className="link hover:opacity-80 duration-300 md:px-2 px-1"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
        </a>
      ),
    );
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center text-white">
        Contact with me on social media.
      </h1>
      <div className="flex mt-8 gap-6">{renderSocialIcons()}</div>
      <div className="flex my-6">
        <Button
          variant="gooeyRight"
          name="Resume"
          href="/CV_NguyenNhatSang.pdf"
          otherProps={{ target: "_blank", rel: "noreferrer" }}
        ></Button>
      </div>
      <h2 className="text-center text-slate-400 text-sm sm:text-base">
        {/* Thiết kế và xây dựng bởi Nguyễn Nhật Sang. */}
      </h2>
    </>
  );

  return (
    <footer
      className="w-full z-0 relative select-none bg-[#00283C] flex flex-col items-stretch"
      id={footerRef}
    >
      <div className="np-footer-graphic-container">
        <img
          className="np-footer-graphic"
          src="https://www.northpass.com/hubfs/_Northpass_Website/np-footer-illustration-howie.svg?noresize"
          alt="Northpass Mountain Illustration"
          loading="lazy"
          width={3838}
          height={450}
        />
      </div>

      <div className="h-full w-full bg-[#00283C]">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center pt-5 pb-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
