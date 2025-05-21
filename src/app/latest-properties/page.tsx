import { Cards } from "@/Components/home/listing/Cards";
import React from "react";

const LatestProperties = () => {
  return (
    <>
      <section className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px]">
          <h2 className="mb-8 lg:mb-12 font-medium text-[26px] sm:text-[32px] lg:text-[40px] text-center leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
            Latest <span className="text-destructive">Properties</span>
          </h2>
          <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cardContainer">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProperties;
