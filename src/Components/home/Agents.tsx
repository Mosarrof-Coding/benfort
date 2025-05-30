import React from "react";
import Link from "next/link";
import Image from "next/image";
import agents1 from "@/../public/agents/agents1.png";
import agents2 from "@/../public/agents/agents2.png";
import agents3 from "@/../public/agents/agents3.png";
import agents4 from "@/../public/agents/agents4.png";
import FadeIn from "../animation/FadIn";
export const Agents = () => {
  const agentsData = [
    {
      id: 1,
      image: agents1,
      name: "Ford Clinton",
      desig: "Listing Agent",
      contribution: "5",
    },
    {
      id: 2,
      image: agents2,
      name: "Hassan Patrick",
      desig: "Sales Person",
      contribution: "2",
    },
    {
      id: 3,
      image: agents3,
      name: "Mike Rutter",
      desig: "Commercial Broker",
      contribution: "2",
    },
    {
      id: 4,
      image: agents4,
      name: "Chloe Waterwood",
      desig: "Realtor",
      contribution: "7",
    },
    {
      id: 5,
      image: agents4,
      name: "Jessy King",
      desig: "Commercial Broker",
      contribution: "1",
    },
  ];
  // last delay
  const length = agentsData.length;
  const lastDelay = (length - 1) * 0.2;
  const staticCardDelay = lastDelay + 0.2;
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="text-center agentHeading">
          <FadeIn>
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
          </FadeIn>
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 sm:mt-18 md:mt-20 lg:mt-26 p-2 sm:p-4 lg:p-6 agentCard">
          {agentsData.map((agent, i) => (
            <FadeIn key={agent.id} delay={i * 0.1}>
              <div className="mx-auto max-w-fit">
                <Image src={agent.image} alt="ford" placeholder="blur" />
                <div className="flex flex-wrap justify-between gap-4 px-4 lg:px-6 pt-6 lg:pt-8 pb-3 lg:pb-4 w-full">
                  <div className="">
                    <h5 className="mb-0.5 font-medium text-[16px] sm:text-[18px] leading-[25px] tracking-[-1.1px] h5">
                      {agent.name}
                    </h5>
                    <h6 className="font-normal text-[#191a20]/70 text-[14px] dark:text-foreground/70 leading-[21px]">
                      {agent.desig}
                    </h6>
                  </div>
                  <h6 className="flex gap-1 font-normal text-[14px] leading-[21px]">
                    <span>{agent.contribution}</span>listing
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
          {/* sign up */}
          <FadeIn delay={staticCardDelay}>
            <div
              className="bg-card mx-auto p-2 lg:p-4 rounded-[16px] max-w-[380px] h-full min-h-[380px]"
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
                    Our agent are available to help with your property search
                    and give your enquiries on the best offers.
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
