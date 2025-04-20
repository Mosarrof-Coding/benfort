import Image from "next/image";
import React from "react";
import featuredimg from "@/../public/featured/featuredimg.svg";
import mapwhite from "@/../public/featured/mapwhite.svg";
import fbook from "@/../public/featured/fbooks.svg";

export const Featured = () => {
  return (
    <div className="bg-card py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px] myContizer">
        <div className="text-center">
          <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] text-destructive sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
            <span>Featured Properties</span>
          </h2>
          <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
            Explore highlighted properties.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mt-14 sm:mt-18 md:mt-20 lg:mt-26 propertiesContainer">
          <div className="relative rounded-[12px] overflow-hidden">
            <Image src={featuredimg} alt="featuredimg" />
            <div className="bottom-0 left-0 absolute bg-gradient-to-b from-[#191a2000] to-[#191a20] p-2 sm:p-3 lg:p-4 pt-12 pb-[18px] w-full font-light text-sm">
              <h5 className="mb-2 lg:mb-3 font-normal text-[16px] text-white lg:text-[18px] leading-[27px]">
                Suburb Home
              </h5>
              <ul className="flex items-center gap-2 text-white">
                <li className="flex items-center gap-1">
                  <Image src={mapwhite} alt="location" className="" />
                  <p className="text-[#f4f4f4] text-[14px] leading-[16px] sm:leading-[18px]">
                    Jersey City
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <span className="bg-[#f5f5f5] rounded-full w-2.5 h-2.5"></span>
                </li>
                <li className="flex items-center gap-1">
                  <Image src={fbook} alt="fbook" />
                  <p className="text-[#f4f4f4] text-[14px] leading-[16px] sm:leading-[18px]">
                    04
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
