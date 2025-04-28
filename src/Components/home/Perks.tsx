import React from "react";
import Image from "next/image";
import buySvg from "@/../public/perks/buysvg.svg";
import rentsvg from "@/../public/perks/rentsvg.svg";
import salsvg from "@/../public/perks/salsvg.svg";
import FadeIn from "../animation/FadIn";

export const Perks = () => {
  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px] myContizer">
        <div className="text-center perkHeading">
          <FadeIn>
            <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              Perks with{" "}
              <span
                className="text-destructive
"
              >
                Benfort
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Your trusted real estate partner in every transaction.
            </p>
          </FadeIn>
        </div>

        <div className="flex sm:flex-row flex-col justify-between gap-6 mt-12 sm:mt-17 lg:mt-20 xl:mt-28 cardContainer">
          <FadeIn>
            <div className="mx-auto w-fit perkCard">
              <div className="shadow-[0px_2.35217px_3.01631px_rgba(222,110,33,0.06),0px_5.65259px_7.24861px_rgba(222,110,33,0.043),0px_10.6433px_13.6485px_rgba(222,110,33,0.035),0px_18.9859px_24.3466px_rgba(222,110,33,0.03),0px_35.511px_45.5376px_rgba(222,110,33,0.024),0px_85px_109px_rgba(222,110,33,0.016),inset_0px_-4px_36px_rgba(255,102,37,0.5)] mx-auto mb-4 sm:mb-5 lg:mb-6 rounded-full w-fit imgShaddow">
                <Image
                  src={buySvg}
                  alt="buySvg"
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-full"
                />
              </div>
              <div className="text-center">
                <h6 className="mb-3 sm:mb-4 font-semibold text-[14px]">
                  BUY PROPERTIES
                </h6>
                <p className="font-normal text-[14px]">
                  Explore homforts&#39;s 2 million+ homes tailored and
                  <br className="hidden lg:block" />
                  uncover your ideal living space.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mx-auto w-fit perkCard">
              <div className="bg-white/5 shadow-[0px_2.35217px_3.01631px_rgba(222,110,33,0.06),0px_5.65259px_7.24861px_rgba(222,110,33,0.043),0px_10.6433px_13.6485px_rgba(222,110,33,0.035),0px_18.9859px_24.3466px_rgba(222,110,33,0.03),0px_35.511px_45.5376px_rgba(222,110,33,0.024),0px_85px_109px_rgba(222,110,33,0.016),inset_0px_-4px_36px_rgba(255,102,37,0.5)] mx-auto mb-4 sm:mb-5 lg:mb-6 rounded-full w-fit imgShaddow">
                <Image
                  src={rentsvg}
                  alt="rentsvg"
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-full"
                />
              </div>
              <div className="text-center">
                <h6 className="mb-3 sm:mb-4 font-semibold text-[14px]">
                  RENT PROPERTIES
                </h6>
                <p className="font-normal text-[14px]">
                  Explore homforts&#39;s 2 million+ homes tailored and
                  <br className="hidden lg:block" />
                  uncover your ideal living space.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mx-auto w-fit perkCard">
              <div className="shadow-[0px_2.35217px_3.01631px_rgba(222,110,33,0.06),0px_5.65259px_7.24861px_rgba(222,110,33,0.043),0px_10.6433px_13.6485px_rgba(222,110,33,0.035),0px_18.9859px_24.3466px_rgba(222,110,33,0.03),0px_35.511px_45.5376px_rgba(222,110,33,0.024),0px_85px_109px_rgba(222,110,33,0.016),inset_0px_-4px_36px_rgba(255,102,37,0.5)] mx-auto mb-4 sm:mb-5 lg:mb-6 rounded-full w-fit imgShaddow">
                <Image
                  src={salsvg}
                  alt="salsvg"
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-full"
                />
              </div>
              <div className="text-center">
                <h6 className="mb-3 sm:mb-4 font-semibold text-[14px]">
                  LEASE PROPERTIES
                </h6>
                <p className="font-normal text-[14px]">
                  Explore homforts&#39;s 2 million+ homes tailored and
                  <br className="hidden lg:block" />
                  uncover your ideal living space.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
