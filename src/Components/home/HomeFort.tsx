import React from "react";
import Link from "next/link";
import Image from "next/image";
import dbimage from "@/../public/homefort/dbimage.png";
import FadeIn from "../animation/FadIn";

export const HomeFort = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-30 bgimage">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="flex md:flex-row flex-col gap-6 md:gap-8 lg:gap-25 w-full homfortContainer">
          <div className="w-fit">
            <FadeIn>
              <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] text-background sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                <span>Get more out of homfort</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-normal text-[16px] text-background leading-[22px] sm:leading-[24px]">
                Explore easier ways to search for properties.
              </p>
            </FadeIn>
            {/* button */}
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-2 mt-4 lg:mt-6">
                <Link
                  href=""
                  className="hover:opacity-80 px-5 md:px-7 lg:px-9 py-1 md:py-1.5 lg:py-2.5 border border-background rounded-[4px] font-normal text-[14px] text-background md:text-[16px] leading-[22px] md:leading-[24px]"
                >
                  Login
                </Link>
                <Link
                  href=""
                  className="bg-background hover:opacity-80 px-4 md:px-6 lg:px-8 py-1 md:py-1.5 lg:py-2.5 rounded-[4px] font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]"
                >
                  Sign Up
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="flex justify-center md:justify-end">
              <Image src={dbimage} alt="bgimage" className="" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
