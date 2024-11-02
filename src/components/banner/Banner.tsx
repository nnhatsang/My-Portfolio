'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import HeroImage from "./hero-image";
import { MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "@/utils/constants";
import { Button } from "../ui/button";

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
  const targetSection = useRef<HTMLDivElement | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const initRevealAnimation = (
    targetSection: React.MutableRefObject<HTMLDivElement | null>,
  ): GSAPTimeline | null => {
    if (!targetSection.current) return null;

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<",
      );

    return revealTl;
  };

  useEffect(() => {
    const currentString = TYPED_STRINGS[loopIndex % TYPED_STRINGS.length];

    if (!isDeleting && charIndex <= currentString.length) {
      setDisplayText(currentString.substring(0, charIndex));
      setCharIndex(charIndex + 1);
    } else if (isDeleting && charIndex > 0) {
      setDisplayText(currentString.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    } else if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLoopIndex(loopIndex + 1);
    }

    const timeout = setTimeout(() => {}, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex]);

  useEffect(() => {
    initRevealAnimation(targetSection);
  }, [targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
      <HeroImage />
    </div>
  );

  const renderSocialLinks = (): React.ReactNode => {
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

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-4 mb-2">
        <h2 className="text-4xl seq">Hello 👋🏻</h2>
        <h1 className="text-3xl seq">I'm Nguyễn Nhật Sang</h1>
      </div>
      <p className="mb-4">
        <span className={HERO_STYLES.TYPED_SPAN}>{displayText}</span>
      </p>
      <div className="flex seq mb-5">{renderSocialLinks()}</div>
      <div className="flex seq">
        <Button
          variant="gooeyRight"
          name="Resume"
          href="/CV_NguyenNhatSang.pdf"
          otherProps={{ target: "_blank", rel: "noreferrer" }}
        ></Button>
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
