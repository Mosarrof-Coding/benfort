import React from "react";
import { Cards } from "./Cards";
import FadeIn from "@/Components/animation/FadIn";

export const Listing = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px] myContizer">
        <div className="text-center listHeading">
          <FadeIn>
            <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] text-destructive sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              <span>New Listing</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Explore latest & featured properties for sale.
            </p>
          </FadeIn>
        </div>
        <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 sm:mt-18 md:mt-20 lg:mt-26 cardContainer">
          <Cards />
        </div>
      </div>
    </div>
  );
};
