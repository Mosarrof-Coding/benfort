import React from "react";
import Link from "next/link";
import Image from "next/image";
import ford from "@/../public/agents/ford.png";
export const Agents = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="text-center agentHeading">
          <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
            Our{" "}
            <span
              className="text-destructive
"
            >
              Agents
            </span>
          </h2>
          <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
            Explore easier ways to search for properties.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 sm:mt-18 md:mt-20 lg:mt-26 p-2 sm:p-4 lg:p-6 agentCard">
          <div className="mx-auto max-w-fit">
            <Image src={ford} alt="ford" placeholder="blur" />
            <div className="flex flex-wrap justify-between gap-4 px-4 lg:px-6 pt-6 lg:pt-8 pb-3 lg:pb-4 w-full">
              <div className="">
                <h5 className="mb-0.5 font-medium text-[16px] sm:text-[18px] leading-[25px] tracking-[-1.1px] h5">
                  Ford Clinton
                </h5>
                <h6 className="font-normal text-[#191a20]/70 text-[14px] dark:text-foreground/70 leading-[21px]">
                  Listing Agent
                </h6>
              </div>
              <h6 className="flex gap-1 font-normal text-[14px] leading-[21px]">
                <span>{"5"}</span>listing
              </h6>
            </div>
          </div>
          {/* sign up */}
          <div
            className="bg-card p-2 lg:p-4 rounded-[16px] min-h-[280px]"
            style={{
              boxShadow:
                "inset 0px -2px 2px rgba(255, 102, 37, 0.12), inset 0px 2px 2px #FFFFFF",
            }}
          >
            <div className="flex flex-col justify-between bg-gradient-to-t from-[#FFEEE500] to-card mx-auto p-4 border border-destructive border-dashed rounded-[12px] max-w-fit h-full">
              {/* logo */}
              <Link href="/" className="w-fit logo">
                <h4 className="font-medium sm:text-[28px] lg:text-[32px] text-2xl cursor-pointer">
                  homfort
                </h4>
              </Link>
              <div className="flex flex-wrap justify-between gap-4 w-full">
                <h6 className="font-normal text-[14px] text-foreground leading-[21px]">
                  Our agent are available to help with your property search and
                  give your enquiries on the best offers.
                </h6>
                <Link
                  href=""
                  className="inline-block bg-destructive hover:opacity-80 shadow-[0px_4px_12px_-4px_#FF6625D9,_inset_0px_1px_1px_1px_#FFFFFF66] p-[4px_8px_4px_8px] md:p-[6px_10px_7px_10px] lg:p-[8px_12px_10px_12px] rounded-[4px] font-normal text-[14px] text-background md:text-[16px] leading-[22px] md:leading-[24px] transition-all"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
