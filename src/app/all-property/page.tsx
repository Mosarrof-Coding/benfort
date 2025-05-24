import FadeIn from "@/Components/animation/FadIn";
import { Cards } from "@/Components/home/listing/Cards";
import React from "react";

const AllProperty = () => {
  return (
    <div className="bg-card py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="mb-12 text-center listHeading">
          <FadeIn>
            <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              <span>All</span>
              <span className="text-destructive"> Property</span>
            </h2>
          </FadeIn>
        </div>
        <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cardContainer">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
