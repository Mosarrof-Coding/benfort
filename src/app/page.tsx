import Image from "next/image";
import React from "react";
import Link from "next/link";
import heroSvg from "../../public/heroSvg.svg";
import buySvg from "../../public/buysvg.svg";
import rentsvg from "../../public/rentsvg.svg";
import salsvg from "../../public/salsvg.svg";
import dream1 from "../../public/dreem1.svg";
import dream2 from "../../public/dream2.svg";
import dream3 from "../../public/dream3.svg";
import dream4 from "../../public/dream4.svg";

import heroImage from "../../public/heroImage.png";
import dreamhouseimage from "../../public/dreamhouseimage.png";
import Background from "../../public/Background.png";
import dbimage from "../../public/dbimage.png";

// featurde
import featuredimg from "../../public/featuredimg.svg";
import mapwhite from "../../public/mapwhite.svg";
import fbook from "../../public/fbooks.svg";

// agents
import ford from "../../public/ford.png";
import MyForm from "@/Components/form/MyForm";
import { Listing } from "@/Components/home/listing/Listing";

const Home = () => {
  return (
    <>
      {/* hero */}
      <div className="pt-12 sm:pt-14 md:pt-16 lg:pt-18 pb-13 sm:pb-15 md:pb-18 lg:pb-20">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="pb-10 md:pb-14 lg:pb-22 text-center heading">
            <h1 className="mx-auto mb-3 sm:mb-4 lg:mb-[26px] w-fit font-medium text-[30px] sm:text-[44px] md:text-[60px] lg:text-[81px] leading-[1] tracking-[-2px] sm:tracking-[-4px]">
              <span className="md:px-4 lg:px-[28px]">
                Find the{" "}
                <span
                  className="text-destructive
"
                >
                  {" "}
                  perfect
                </span>
              </span>
              <span className="inline-block px-3 md:px-px md:pl-6">
                <Image
                  src={heroSvg}
                  alt="heroIcon"
                  className="max-w-[46px] sm:max-w-[60px] md:max-w-[80px] lg:max-w-full"
                />
              </span>
              <br className="" />
              <span
                className="text-destructive
"
              >
                property
              </span>{" "}
              with Benfort
            </h1>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              We believe there&#39;s a perfect home for everybody, no matter the
              budget. <br className="hidden sm:block" /> That&#39;s why we
              always find the best homes for your budget.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 lg:gap-6 lg:pr-14 lg:pl-9 innerDiv">
            {/* card img */}
            <div className="left">
              <Image
                src={heroImage}
                alt="heroImage"
                className="min-w-[240px]"
              />
            </div>
            {/* card */}
            <div className="block relative mt-8 sm:mt-0 rounded-xl lg:rounded-2xl sm:min-w-[340px] lg:min-w-[421px] min-h-[340px] sm:min-h-full overflow-hidden">
              {/* mask */}
              <div className="top-0 right-0 left-0 z-10 absolute bg-gradient-to-b from-card to-transparent h-[20%] touch-none pointer-events-none layer"></div>
              <div className="right-0 bottom-0 left-0 z-10 absolute bg-gradient-to-b from-transparent to-card h-[20%] touch-none pointer-events-none layer"></div>
              {/* TextBox */}
              <div
                className="top-0 left-0 absolute flex flex-col justify-center items-center bg-card px-2 md:px-4 lg:px-8 py-2 rounded-xl lg:rounded-2xl min-w-[280px] sm:max-w-[421px] h-full overflow-y-auto"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  overflowY: "scroll",
                }}
              >
                <div className="bg-gradient-to-b from-background to-background/0 pt-3.5 rounded-t-md">
                  <div className="relative bg-transparent pb-2.5 border border-border rounded-md">
                    <div className="bg-background px-2 md:px-4 lg:px-6 pt-8 md:pt-10 lg:pt-12 rounded-md clientContainer">
                      <div className="flex items-center gap-4 mb-4 lg:mb-6 avater">
                        <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                          <Image src={dream1} alt="dream1" />
                        </div>
                        <div className="img">
                          <h5 className="mb-[1px] font-semibold text-[16px] text-foreground">
                            Evans Keith
                          </h5>
                          <h6 className="text-[14px] text-foreground/60">
                            westside, kent
                          </h6>
                        </div>
                      </div>
                      <p className="mb-4 font-normal text-[14px] text-foreground/70">
                        From start to finish, this agency provided exceptional
                        service. Their knowledge and efficiency made finding our
                        new home a breeze. Highly recommended!
                      </p>
                      <div className="relative flex items-center gap-2.5 icon">
                        {/* face */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2917 19.4583H8.54167V13.4167H7.74999C7.26666 13.4167 6.875 13.025 6.875 12.5417V10.9583C6.875 10.475 7.26666 10.0833 7.74999 10.0833H8.54167V8C8.54167 6.275 9.94167 4.875 11.6667 4.875H13.9167C14.4 4.875 14.7917 5.26666 14.7917 5.74999V7.75001C14.7917 8.23334 14.4 8.625 13.9167 8.625H12.2917V10.0833H13.8583C14.125 10.0833 14.3667 10.2 14.5333 10.4C14.7 10.6 14.7667 10.8667 14.7167 11.125L14.4 12.7083C14.3167 13.1167 13.9583 13.4083 13.5417 13.4083H12.2917V19.4583ZM9.79167 18.2083H11.0417V12.1667H13.2417L13.4083 11.3333H11.05V8.24999C11.05 7.76666 11.4417 7.375 11.925 7.375H13.55V6.125H11.6667C10.6333 6.125 9.79167 6.96667 9.79167 8V11.3333H8.125V12.1667H9.79167V18.2083Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M12.5001 19.4583H7.50008C2.97508 19.4583 1.04175 17.525 1.04175 13V7.99996C1.04175 3.47496 2.97508 1.54163 7.50008 1.54163H12.5001C17.0251 1.54163 18.9584 3.47496 18.9584 7.99996V13C18.9584 17.525 17.0251 19.4583 12.5001 19.4583ZM7.50008 2.79163C3.65841 2.79163 2.29175 4.15829 2.29175 7.99996V13C2.29175 16.8416 3.65841 18.2083 7.50008 18.2083H12.5001C16.3417 18.2083 17.7084 16.8416 17.7084 13V7.99996C17.7084 4.15829 16.3417 2.79163 12.5001 2.79163H7.50008Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>
                        {/* insta */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5001 18.4583H7.50008C2.97508 18.4583 1.04175 16.525 1.04175 12V6.99996C1.04175 2.47496 2.97508 0.541626 7.50008 0.541626H12.5001C17.0251 0.541626 18.9584 2.47496 18.9584 6.99996V12C18.9584 16.525 17.0251 18.4583 12.5001 18.4583ZM7.50008 1.79163C3.65841 1.79163 2.29175 3.15829 2.29175 6.99996V12C2.29175 15.8416 3.65841 17.2083 7.50008 17.2083H12.5001C16.3417 17.2083 17.7084 15.8416 17.7084 12V6.99996C17.7084 3.15829 16.3417 1.79163 12.5001 1.79163H7.50008Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M9.99992 13.0417C8.04992 13.0417 6.45825 11.45 6.45825 9.5C6.45825 7.55004 8.04992 5.95837 9.99992 5.95837C11.9499 5.95837 13.5416 7.55004 13.5416 9.5C13.5416 11.45 11.9499 13.0417 9.99992 13.0417ZM9.99992 7.20837C8.73325 7.20837 7.70825 8.23337 7.70825 9.5C7.70825 10.7667 8.73325 11.7917 9.99992 11.7917C11.2666 11.7917 12.2916 10.7667 12.2916 9.5C12.2916 8.23337 11.2666 7.20837 9.99992 7.20837Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M14.1666 5.75004C14.0583 5.75004 13.9499 5.72504 13.8499 5.68338C13.7499 5.64171 13.6583 5.58338 13.5749 5.50838C13.4999 5.42504 13.4333 5.33338 13.3916 5.23338C13.3499 5.13338 13.3333 5.02504 13.3333 4.91671C13.3333 4.80838 13.3499 4.70004 13.3916 4.60004C13.4416 4.49171 13.4999 4.40838 13.5749 4.32504C13.6166 4.29171 13.6583 4.25004 13.6999 4.22504C13.7499 4.19171 13.7999 4.16671 13.8499 4.15004C13.8999 4.12504 13.9499 4.10838 14.0083 4.10004C14.2749 4.04171 14.5583 4.13338 14.7583 4.32504C14.8333 4.40838 14.8916 4.49171 14.9333 4.60004C14.9749 4.70004 14.9999 4.80838 14.9999 4.91671C14.9999 5.02504 14.9749 5.13338 14.9333 5.23338C14.8916 5.33338 14.8333 5.42504 14.7583 5.50838C14.6749 5.58338 14.5833 5.64171 14.4833 5.68338C14.3833 5.72504 14.2749 5.75004 14.1666 5.75004Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>
                        <div className="right-0 bottom-0 left-0 absolute bg-background h-3.5"></div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div className="bg-gradient-to-b from-background to-background/0 pt-3.5 rounded-t-md -translate-y-1">
                  <div className="relative bg-transparent pb-2.5 border border-border rounded-md">
                    <div className="bg-background px-2 md:px-4 lg:px-6 pt-8 md:pt-10 lg:pt-12 rounded-md clientContainer">
                      <div className="flex items-center gap-4 mb-4 lg:mb-6 avater">
                        <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                          <Image src={dream1} alt="dream1" />
                        </div>
                        <div className="img">
                          <h5 className="mb-[1px] font-semibold text-[16px] text-foreground">
                            Evans Keith
                          </h5>
                          <h6 className="text-[14px] text-foreground/60">
                            westside, kent
                          </h6>
                        </div>
                      </div>
                      <p className="mb-4 font-normal text-[14px] text-foreground/70">
                        From start to finish, this agency provided exceptional
                        service. Their knowledge and efficiency made finding our
                        new home a breeze. Highly recommended!
                      </p>
                      <div className="relative flex items-center gap-2.5 icon">
                        {/* face */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2917 19.4583H8.54167V13.4167H7.74999C7.26666 13.4167 6.875 13.025 6.875 12.5417V10.9583C6.875 10.475 7.26666 10.0833 7.74999 10.0833H8.54167V8C8.54167 6.275 9.94167 4.875 11.6667 4.875H13.9167C14.4 4.875 14.7917 5.26666 14.7917 5.74999V7.75001C14.7917 8.23334 14.4 8.625 13.9167 8.625H12.2917V10.0833H13.8583C14.125 10.0833 14.3667 10.2 14.5333 10.4C14.7 10.6 14.7667 10.8667 14.7167 11.125L14.4 12.7083C14.3167 13.1167 13.9583 13.4083 13.5417 13.4083H12.2917V19.4583ZM9.79167 18.2083H11.0417V12.1667H13.2417L13.4083 11.3333H11.05V8.24999C11.05 7.76666 11.4417 7.375 11.925 7.375H13.55V6.125H11.6667C10.6333 6.125 9.79167 6.96667 9.79167 8V11.3333H8.125V12.1667H9.79167V18.2083Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M12.5001 19.4583H7.50008C2.97508 19.4583 1.04175 17.525 1.04175 13V7.99996C1.04175 3.47496 2.97508 1.54163 7.50008 1.54163H12.5001C17.0251 1.54163 18.9584 3.47496 18.9584 7.99996V13C18.9584 17.525 17.0251 19.4583 12.5001 19.4583ZM7.50008 2.79163C3.65841 2.79163 2.29175 4.15829 2.29175 7.99996V13C2.29175 16.8416 3.65841 18.2083 7.50008 18.2083H12.5001C16.3417 18.2083 17.7084 16.8416 17.7084 13V7.99996C17.7084 4.15829 16.3417 2.79163 12.5001 2.79163H7.50008Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>
                        {/* insta */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5001 18.4583H7.50008C2.97508 18.4583 1.04175 16.525 1.04175 12V6.99996C1.04175 2.47496 2.97508 0.541626 7.50008 0.541626H12.5001C17.0251 0.541626 18.9584 2.47496 18.9584 6.99996V12C18.9584 16.525 17.0251 18.4583 12.5001 18.4583ZM7.50008 1.79163C3.65841 1.79163 2.29175 3.15829 2.29175 6.99996V12C2.29175 15.8416 3.65841 17.2083 7.50008 17.2083H12.5001C16.3417 17.2083 17.7084 15.8416 17.7084 12V6.99996C17.7084 3.15829 16.3417 1.79163 12.5001 1.79163H7.50008Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M9.99992 13.0417C8.04992 13.0417 6.45825 11.45 6.45825 9.5C6.45825 7.55004 8.04992 5.95837 9.99992 5.95837C11.9499 5.95837 13.5416 7.55004 13.5416 9.5C13.5416 11.45 11.9499 13.0417 9.99992 13.0417ZM9.99992 7.20837C8.73325 7.20837 7.70825 8.23337 7.70825 9.5C7.70825 10.7667 8.73325 11.7917 9.99992 11.7917C11.2666 11.7917 12.2916 10.7667 12.2916 9.5C12.2916 8.23337 11.2666 7.20837 9.99992 7.20837Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M14.1666 5.75004C14.0583 5.75004 13.9499 5.72504 13.8499 5.68338C13.7499 5.64171 13.6583 5.58338 13.5749 5.50838C13.4999 5.42504 13.4333 5.33338 13.3916 5.23338C13.3499 5.13338 13.3333 5.02504 13.3333 4.91671C13.3333 4.80838 13.3499 4.70004 13.3916 4.60004C13.4416 4.49171 13.4999 4.40838 13.5749 4.32504C13.6166 4.29171 13.6583 4.25004 13.6999 4.22504C13.7499 4.19171 13.7999 4.16671 13.8499 4.15004C13.8999 4.12504 13.9499 4.10838 14.0083 4.10004C14.2749 4.04171 14.5583 4.13338 14.7583 4.32504C14.8333 4.40838 14.8916 4.49171 14.9333 4.60004C14.9749 4.70004 14.9999 4.80838 14.9999 4.91671C14.9999 5.02504 14.9749 5.13338 14.9333 5.23338C14.8916 5.33338 14.8333 5.42504 14.7583 5.50838C14.6749 5.58338 14.5833 5.64171 14.4833 5.68338C14.3833 5.72504 14.2749 5.75004 14.1666 5.75004Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>
                        <div className="right-0 bottom-0 left-0 absolute bg-background h-3.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-background to-background/0 pt-3.5 rounded-t-md -translate-y-2">
                  <div className="relative bg-transparent pb-2.5 border border-border rounded-md">
                    <div className="bg-background px-2 md:px-4 lg:px-6 pt-8 md:pt-10 lg:pt-12 rounded-md clientContainer">
                      <div className="flex items-center gap-4 mb-4 lg:mb-6 avater">
                        <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                          <Image src={dream1} alt="dream1" />
                        </div>
                        <div className="img">
                          <h5 className="mb-[1px] font-semibold text-[16px] text-foreground">
                            Evans Keith
                          </h5>
                          <h6 className="text-[14px] text-foreground/60">
                            westside, kent
                          </h6>
                        </div>
                      </div>
                      <p className="mb-4 font-normal text-[14px] text-foreground/70">
                        From start to finish, this agency provided exceptional
                        service. Their knowledge and efficiency made finding our
                        new home a breeze. Highly recommended!
                      </p>
                      <div className="relative flex items-center gap-2.5 icon">
                        {/* face */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2917 19.4583H8.54167V13.4167H7.74999C7.26666 13.4167 6.875 13.025 6.875 12.5417V10.9583C6.875 10.475 7.26666 10.0833 7.74999 10.0833H8.54167V8C8.54167 6.275 9.94167 4.875 11.6667 4.875H13.9167C14.4 4.875 14.7917 5.26666 14.7917 5.74999V7.75001C14.7917 8.23334 14.4 8.625 13.9167 8.625H12.2917V10.0833H13.8583C14.125 10.0833 14.3667 10.2 14.5333 10.4C14.7 10.6 14.7667 10.8667 14.7167 11.125L14.4 12.7083C14.3167 13.1167 13.9583 13.4083 13.5417 13.4083H12.2917V19.4583ZM9.79167 18.2083H11.0417V12.1667H13.2417L13.4083 11.3333H11.05V8.24999C11.05 7.76666 11.4417 7.375 11.925 7.375H13.55V6.125H11.6667C10.6333 6.125 9.79167 6.96667 9.79167 8V11.3333H8.125V12.1667H9.79167V18.2083Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M12.5001 19.4583H7.50008C2.97508 19.4583 1.04175 17.525 1.04175 13V7.99996C1.04175 3.47496 2.97508 1.54163 7.50008 1.54163H12.5001C17.0251 1.54163 18.9584 3.47496 18.9584 7.99996V13C18.9584 17.525 17.0251 19.4583 12.5001 19.4583ZM7.50008 2.79163C3.65841 2.79163 2.29175 4.15829 2.29175 7.99996V13C2.29175 16.8416 3.65841 18.2083 7.50008 18.2083H12.5001C16.3417 18.2083 17.7084 16.8416 17.7084 13V7.99996C17.7084 4.15829 16.3417 2.79163 12.5001 2.79163H7.50008Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>
                        {/* insta */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5001 18.4583H7.50008C2.97508 18.4583 1.04175 16.525 1.04175 12V6.99996C1.04175 2.47496 2.97508 0.541626 7.50008 0.541626H12.5001C17.0251 0.541626 18.9584 2.47496 18.9584 6.99996V12C18.9584 16.525 17.0251 18.4583 12.5001 18.4583ZM7.50008 1.79163C3.65841 1.79163 2.29175 3.15829 2.29175 6.99996V12C2.29175 15.8416 3.65841 17.2083 7.50008 17.2083H12.5001C16.3417 17.2083 17.7084 15.8416 17.7084 12V6.99996C17.7084 3.15829 16.3417 1.79163 12.5001 1.79163H7.50008Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M9.99992 13.0417C8.04992 13.0417 6.45825 11.45 6.45825 9.5C6.45825 7.55004 8.04992 5.95837 9.99992 5.95837C11.9499 5.95837 13.5416 7.55004 13.5416 9.5C13.5416 11.45 11.9499 13.0417 9.99992 13.0417ZM9.99992 7.20837C8.73325 7.20837 7.70825 8.23337 7.70825 9.5C7.70825 10.7667 8.73325 11.7917 9.99992 11.7917C11.2666 11.7917 12.2916 10.7667 12.2916 9.5C12.2916 8.23337 11.2666 7.20837 9.99992 7.20837Z"
                            fill=""
                            className="fill-foreground"
                          />
                          <path
                            d="M14.1666 5.75004C14.0583 5.75004 13.9499 5.72504 13.8499 5.68338C13.7499 5.64171 13.6583 5.58338 13.5749 5.50838C13.4999 5.42504 13.4333 5.33338 13.3916 5.23338C13.3499 5.13338 13.3333 5.02504 13.3333 4.91671C13.3333 4.80838 13.3499 4.70004 13.3916 4.60004C13.4416 4.49171 13.4999 4.40838 13.5749 4.32504C13.6166 4.29171 13.6583 4.25004 13.6999 4.22504C13.7499 4.19171 13.7999 4.16671 13.8499 4.15004C13.8999 4.12504 13.9499 4.10838 14.0083 4.10004C14.2749 4.04171 14.5583 4.13338 14.7583 4.32504C14.8333 4.40838 14.8916 4.49171 14.9333 4.60004C14.9749 4.70004 14.9999 4.80838 14.9999 4.91671C14.9999 5.02504 14.9749 5.13338 14.9333 5.23338C14.8916 5.33338 14.8333 5.42504 14.7583 5.50838C14.6749 5.58338 14.5833 5.64171 14.4833 5.68338C14.3833 5.72504 14.2749 5.75004 14.1666 5.75004Z"
                            fill=""
                            className="fill-foreground"
                          />
                        </svg>
                        <div className="right-0 bottom-0 left-0 absolute bg-background h-3.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Perks with Benfort */}
      <div className="bg-card py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="text-center perkHeading">
            <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              Perks with{" "}
              <span
                className="text-destructive
"
              >
                Benfort
              </span>
            </h2>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Your trusted real estate partner in every transaction.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-6 mt-12 sm:mt-17 lg:mt-20 xl:mt-28 cardContainer">
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
          </div>
        </div>
      </div>
      {/* Explore & Find your Dream home */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <h2 className="md:hidden block mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] text-center md:text-start leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
            Explore & Find <br className="hidden md:block" /> your{" "}
            <br className="md:hidden" />
            <span
              className="text-destructive
"
            >
              Dream
              <br className="hidden md:block" /> home
            </span>
          </h2>
          <div className="flex sm:flex-row flex-col justify-between gap-2.5 mx-auto max-w-[1088px]">
            <div className="flex md:flex-row flex-col justify-between gap-2 dreamImage">
              <div className="dreamHeadingr">
                <h2 className="hidden md:block mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[40px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                  Explore & Find <br className="hidden lg:block" /> your{" "}
                  <span
                    className="text-destructive
"
                  >
                    Dream
                    <br className="hidden md:block" /> home
                  </span>
                </h2>
                <div className="relative mx-auto w-fit">
                  <Image
                    src={dreamhouseimage}
                    alt="dreamhouseimage"
                    className=""
                  />
                  <div className="top-full left-0 absolute bg-background dark:bg-card px-[19px] py-3 rounded-[8px] sm:rounded-[16px] -translate-y-1/2">
                    <div className="flex">
                      <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                        <Image src={dream1} alt="dream1" />
                      </div>
                      <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                        <Image src={dream2} alt="dream2" />
                      </div>
                      <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                        <Image src={dream3} alt="dream3" />
                      </div>
                      <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit">
                        <Image src={dream4} alt="dream4" />
                      </div>
                    </div>
                    <h6 className="mt-1 sm:mt-2 font-normal text-[14px] text-center leading-[19px] sm:leading-[21px]">
                      200+ Happy Client
                    </h6>
                  </div>
                </div>
              </div>
              <div className="mx-auto dreamImage">
                <Image src={Background} alt="Background" className="" />
              </div>
            </div>
            {/* text */}
            <div className="bg-muted dark:bg-card mt-12 sm:mt-0 p-3 sm:p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] max-w-full sm:max-w-[428px] content shrink-2">
              <p className="mb-16 sm:mb-20 lg:mb-20 font-normal text-[16px] leading-[22px] sm:leading-[24px]">
                “We believe there&#39;s a perfect home for everybody, no matter
                the budget. That&#39;s why we always find the best homes for
                your budget.”
              </p>
              <div className="flex gap-8 md:gap-10 lg:gap-19 py-4 lg:py-6 border-y border-border">
                <div>
                  <h2 className="mb-1 font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    $200M+
                  </h2>
                  <h6 className="font-semibold text-[14px]">
                    Sold in Real Estate
                  </h6>
                </div>
                <div>
                  <h2 className="mb-1 font-medium text-[26px] md:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    100+
                  </h2>
                  <p className="font-semibold text-[14px]">Property Sold</p>
                </div>
              </div>
              <ul className="flex flex-col gap-1 sm:gap-2 my-5 md:my-8">
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-foreground dark:bg-white rounded-full min-w-[10px] h-[10px]"></span>
                  Over 100k+ property & update regularly
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-foreground dark:bg-white rounded-full min-w-[10px] h-[10px]"></span>
                  Expert agent consultation
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-foreground dark:bg-white rounded-full min-w-[10px] h-[10px]"></span>
                  Loan & low Interest facility
                </li>
              </ul>
              <button className="bg-foreground dark:bg-white hover:opacity-80 px-2 md:px-3 py-1 md:py-2 rounded-[4px] font-normal text-[14px] text-white dark:text-background leading-[19px] sm:leading-[21px] active:translate-y-[-1px] cursor-pointer">
                Browse Listings
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* New listing */}
      <Listing />
      {/* Featured Properties */}
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
      {/* Get more out of homfort */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-30 bgimage">
        <div className="mx-auto px-4 max-w-[1232px]">
          <div className="flex md:flex-row flex-col gap-6 md:gap-8 lg:gap-25 w-full homfortContainer">
            <div className="w-fit">
              <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] text-background sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                <span>Get more out of homfort</span>
              </h2>
              <p className="font-normal text-[16px] text-background leading-[22px] sm:leading-[24px]">
                Explore easier ways to search for properties.
              </p>
              {/* button */}
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
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src={dbimage} alt="bgimage" className="" />
            </div>
          </div>
        </div>
      </div>
      {/* Our Agents */}
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
                    benfort
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
          </div>
        </div>
      </div>
      {/* subscription */}
      <div className="mx-auto px-4 max-w-[1120px]">
        <div className="gap-8 lg:gap-14 grid grid-cols-1 md:grid-cols-2 bg-card mb-14 p-[38px_28px_50px_28px] lg:p-[88px_88px_90px_88px] rounded-[16px]">
          <div className="textContainer">
            <h3 className="mb-1 sm:mb-2 lg:mb-3 font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[32px] sm:leading-[38px] lg:leading-[39px] tracking-[-1.5px]">
              There is always something new! Don’t miss out.
            </h3>
            <h6 className="font-normal text-[14px] leading-[21px]">
              Get property updates and the latest on pricing for your next
              property decision.
            </h6>
          </div>
          <form className="flex items-center gap-2">
            <input
              type="text"
              name="subscription"
              placeholder="Enter email address"
              className="bg-transparent p-[8px_0px_8px_6px] md:p-[12px_0px_12px_8px] lg:p-[16px_0px_16px_12px] border border-border rounded-[4px] w-full text-[14px] leading-[16px]"
            />
            <input
              type="submit"
              name="subscription"
              placeholder="Enter email address"
              value={"Submit"}
              className="bg-foreground hover:opacity-80 px-2.5 md:px-3.5 lg:px-4.5 py-2 md:py-3 lg:py-4 rounded-[4px] w-fit font-semibold text-[14px] text-background leading-[16px] transition-all cursor-pointer"
            />
          </form>
        </div>
      </div>
      {/* get in touch */}
      <div className="relative bg-card pt-16 sm:pt-20 md:pt-24 lg:pt-30">
        <svg
          viewBox="0 0 1440 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ms-auto max-w-[1544px] max-h-[215px]"
        >
          <mask
            id="mask0_2_1046"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-91"
            y="0"
            width="1623"
            height="201"
          >
            <rect
              x="-90.98"
              y="0.450195"
              width="1622"
              height="200"
              fill="url(#paint0_linear_2_1046)"
            />
          </mask>
          <g mask="url(#mask0_2_1046)">
            <path
              d="M209.808 143.324C202.896 143.324 196.752 141.617 191.376 138.204C186.085 134.791 181.947 129.841 178.96 123.356C175.973 116.871 174.48 109.105 174.48 100.06C174.48 93.4042 175.291 87.3882 176.912 82.0122C178.619 76.5508 181.093 71.8575 184.336 67.9322C187.579 63.9215 191.589 60.8495 196.368 58.7162C201.232 56.4975 206.864 55.3882 213.264 55.3882C218.128 55.3882 222.48 56.0708 226.32 57.4361C230.245 58.7162 233.573 60.6362 236.304 63.1962C239.12 65.6708 241.253 68.7428 242.704 72.4122C244.24 76.0815 245.008 80.2628 245.008 84.9562L231.568 86.7482C231.568 82.4815 230.757 78.9402 229.136 76.1242C227.6 73.3082 225.424 71.1748 222.608 69.7242C219.877 68.2735 216.592 67.5481 212.752 67.5481C208.315 67.5481 204.304 68.7001 200.72 71.0042C197.136 73.3082 194.277 76.8495 192.144 81.6282C190.096 86.3215 189.072 92.2948 189.072 99.5482C189.072 105.009 189.669 109.788 190.864 113.884C192.144 117.895 193.893 121.223 196.112 123.868C198.416 126.428 201.104 128.348 204.176 129.628C207.248 130.823 210.576 131.42 214.16 131.42C218.427 131.42 222.011 130.609 224.912 128.988C227.813 127.281 230.075 124.892 231.696 121.82C233.317 118.663 234.256 114.908 234.512 110.556H218.896V99.6762H247.312V113.756L247.44 141.66H236.688L237.84 117.852H236.688C236.005 123.313 234.512 127.964 232.208 131.804C229.904 135.559 226.875 138.417 223.12 140.38C219.365 142.343 214.928 143.324 209.808 143.324ZM284.503 143.324C279.042 143.324 274.263 142.513 270.167 140.892C266.156 139.185 262.828 136.796 260.183 133.724C257.538 130.652 255.575 127.068 254.295 122.972C253.015 118.791 252.375 114.225 252.375 109.276C252.375 104.412 252.972 99.8468 254.167 95.5802C255.447 91.2282 257.367 87.3882 259.927 84.0602C262.487 80.7322 265.73 78.1295 269.655 76.2522C273.58 74.3748 278.188 73.4361 283.479 73.4361C288.428 73.4361 292.738 74.2895 296.407 75.9962C300.162 77.7028 303.234 80.1348 305.623 83.2922C308.098 86.3642 309.804 90.0762 310.743 94.4282C311.767 98.7802 311.98 103.601 311.383 108.892L260.951 109.788V100.956L301.015 100.316L298.455 105.308C298.711 101.212 298.327 97.6708 297.303 94.6842C296.279 91.6122 294.615 89.2655 292.311 87.6442C290.092 85.9375 287.148 85.0842 283.479 85.0842C279.554 85.0842 276.268 86.0655 273.623 88.0282C271.063 89.9908 269.143 92.7642 267.863 96.3482C266.583 99.9322 265.943 104.071 265.943 108.764C265.943 116.444 267.564 122.289 270.807 126.3C274.05 130.311 278.743 132.316 284.887 132.316C287.874 132.316 290.348 131.847 292.311 130.908C294.359 129.969 295.98 128.775 297.175 127.324C298.37 125.788 299.18 124.124 299.607 122.332C300.034 120.54 300.204 118.791 300.119 117.084L313.047 117.98C313.132 121.393 312.62 124.636 311.511 127.708C310.402 130.695 308.652 133.383 306.263 135.772C303.959 138.076 300.972 139.911 297.303 141.276C293.719 142.641 289.452 143.324 284.503 143.324ZM340.123 142.94C333.723 142.94 328.859 141.191 325.531 137.692C322.203 134.108 320.539 128.817 320.539 121.82V86.6202H312.475V76.7642H315.035C318.534 76.4228 321.051 75.3562 322.587 73.5642C324.123 71.6868 325.019 68.9562 325.275 65.3722L325.787 60.6362H334.363V75.2281H351.259V86.8762H334.363V120.924C334.363 124.252 335.131 126.684 336.667 128.22C338.203 129.756 340.294 130.524 342.939 130.524C344.304 130.524 345.755 130.311 347.291 129.884C348.827 129.457 350.15 128.817 351.259 127.964V140.892C349.211 141.575 347.291 142.087 345.499 142.428C343.707 142.769 341.915 142.94 340.123 142.94ZM379.522 141.66V75.2281H393.474V141.66H379.522ZM386.434 67.6762C383.618 67.6762 381.442 67.0788 379.906 65.8842C378.455 64.6042 377.73 62.8548 377.73 60.6362C377.73 58.3322 378.455 56.5828 379.906 55.3882C381.442 54.1082 383.618 53.4682 386.434 53.4682C389.335 53.4682 391.511 54.1082 392.962 55.3882C394.413 56.5828 395.138 58.3322 395.138 60.6362C395.138 62.9402 394.37 64.6895 392.834 65.8842C391.383 67.0788 389.25 67.6762 386.434 67.6762ZM400.932 141.66V108.508L400.804 75.2281H413.348L411.94 105.564H413.092C413.604 98.3108 414.756 92.3375 416.548 87.6442C418.425 82.8655 421.028 79.3242 424.356 77.0202C427.769 74.6308 431.908 73.4361 436.772 73.4361C444.281 73.4361 449.828 76.0815 453.412 81.3722C456.996 86.5775 458.788 94.5562 458.788 105.308V141.66H444.836V106.332C444.836 99.3348 443.855 94.1722 441.892 90.8442C440.015 87.5162 436.857 85.8522 432.42 85.8522C428.751 85.8522 425.593 87.1322 422.948 89.6922C420.303 92.2522 418.297 96.1775 416.932 101.468C415.567 106.673 414.884 113.457 414.884 121.82V141.66H400.932ZM511.923 142.94C505.523 142.94 500.659 141.191 497.331 137.692C494.003 134.108 492.339 128.817 492.339 121.82V86.6202H484.275V76.7642H486.835C490.334 76.4228 492.851 75.3562 494.387 73.5642C495.923 71.6868 496.819 68.9562 497.075 65.3722L497.587 60.6362H506.163V75.2281H523.059V86.8762H506.163V120.924C506.163 124.252 506.931 126.684 508.467 128.22C510.003 129.756 512.094 130.524 514.739 130.524C516.104 130.524 517.555 130.311 519.091 129.884C520.627 129.457 521.95 128.817 523.059 127.964V140.892C521.011 141.575 519.091 142.087 517.299 142.428C515.507 142.769 513.715 142.94 511.923 142.94ZM555.248 143.324C549.104 143.324 543.6 142.044 538.736 139.484C533.872 136.924 530.032 133.041 527.216 127.836C524.485 122.631 523.12 116.145 523.12 108.38C523.12 100.529 524.528 94.0442 527.344 88.9242C530.16 83.7188 533.957 79.8362 538.736 77.2762C543.6 74.7162 549.061 73.4361 555.12 73.4361C561.264 73.4361 566.725 74.7588 571.504 77.4042C576.368 79.9642 580.165 83.8468 582.896 89.0522C585.712 94.2575 587.12 100.785 587.12 108.636C587.12 116.487 585.712 123.015 582.896 128.22C580.165 133.34 576.368 137.137 571.504 139.612C566.725 142.087 561.307 143.324 555.248 143.324ZM555.504 132.316C559.173 132.316 562.288 131.42 564.848 129.628C567.493 127.836 569.499 125.233 570.864 121.82C572.315 118.321 573.04 114.14 573.04 109.276C573.04 104.241 572.272 99.9322 570.736 96.3482C569.285 92.6788 567.195 89.8628 564.464 87.9002C561.819 85.9375 558.619 84.9562 554.864 84.9562C551.195 84.9562 548.037 85.8948 545.392 87.7722C542.832 89.6495 540.827 92.3375 539.376 95.8362C537.925 99.3348 537.2 103.473 537.2 108.252C537.2 115.761 538.821 121.649 542.064 125.916C545.307 130.183 549.787 132.316 555.504 132.316ZM614.201 143.324C606.521 143.324 600.889 140.593 597.305 135.132C593.721 129.585 591.929 121.052 591.929 109.532V75.2281H606.009V109.404C606.009 117.084 606.948 122.588 608.825 125.916C610.788 129.159 613.945 130.78 618.297 130.78C621.028 130.78 623.46 130.14 625.593 128.86C627.726 127.58 629.518 125.617 630.969 122.972C632.505 120.241 633.657 116.828 634.425 112.732C635.193 108.551 635.577 103.559 635.577 97.7562V75.2281H649.529V108.636L649.657 141.66H637.113L638.521 113.884H637.497C636.729 120.711 635.406 126.3 633.529 130.652C631.652 135.004 629.092 138.204 625.849 140.252C622.692 142.3 618.809 143.324 614.201 143.324ZM687.318 143.324C681.942 143.324 677.249 142.471 673.238 140.764C669.227 139.057 665.857 136.668 663.126 133.596C660.481 130.439 658.475 126.769 657.11 122.588C655.83 118.407 655.19 113.799 655.19 108.764C655.19 103.815 655.83 99.2068 657.11 94.9402C658.475 90.6735 660.438 86.9188 662.998 83.6762C665.643 80.4335 668.929 77.9162 672.854 76.1242C676.865 74.3322 681.515 73.4361 686.806 73.4361C693.206 73.4361 698.411 74.6735 702.422 77.1482C706.518 79.5375 709.505 82.6948 711.382 86.6202C713.259 90.4602 714.027 94.6415 713.686 99.1642L701.27 100.444C701.27 97.0308 700.63 94.2148 699.35 91.9962C698.155 89.6922 696.449 87.9428 694.23 86.7482C692.097 85.5535 689.622 84.9562 686.806 84.9562C684.502 84.9562 682.283 85.3828 680.15 86.2362C678.102 87.0042 676.225 88.3268 674.518 90.2042C672.897 91.9962 671.617 94.3855 670.678 97.3722C669.739 100.273 669.27 103.857 669.27 108.124C669.27 113.671 670.081 118.236 671.702 121.82C673.323 125.404 675.499 128.049 678.23 129.756C681.046 131.377 684.203 132.188 687.702 132.188C691.457 132.188 694.443 131.377 696.662 129.756C698.966 128.135 700.587 126.001 701.526 123.356C702.55 120.625 702.977 117.809 702.806 114.908L715.862 115.804C716.033 119.644 715.563 123.271 714.454 126.684C713.43 130.012 711.681 132.956 709.206 135.516C706.817 137.991 703.787 139.911 700.118 141.276C696.534 142.641 692.267 143.324 687.318 143.324ZM720.267 141.66V111.068L720.139 53.9801H734.347V71.5162C734.347 73.0522 734.219 75.1855 733.963 77.9162C733.792 80.5615 733.536 83.5482 733.195 86.8762C732.854 90.1188 732.47 93.4468 732.043 96.8602C731.702 100.273 731.403 103.473 731.147 106.46H732.299C732.982 98.6948 734.347 92.3802 736.395 87.5162C738.443 82.6522 741.174 79.1108 744.587 76.8922C748.086 74.5882 752.139 73.4361 756.747 73.4361C764 73.4361 769.376 76.0388 772.875 81.2442C776.374 86.4495 778.123 94.2575 778.123 104.668V141.66H764.171V105.436C764.171 98.6095 763.232 93.6602 761.355 90.5882C759.478 87.5162 756.534 85.9802 752.523 85.9802C748.768 85.9802 745.526 87.3455 742.795 90.0762C740.064 92.7215 737.931 96.6468 736.395 101.852C734.944 107.057 734.219 113.457 734.219 121.052V141.66H720.267Z"
              fill=""
              className="fill-foreground"
            />
            <path
              d="M1109.43 143.324C1102.52 143.324 1096.37 141.617 1091 138.204C1085.71 134.791 1081.57 129.841 1078.58 123.356C1075.59 116.871 1074.1 109.105 1074.1 100.06C1074.1 93.4042 1074.91 87.3882 1076.53 82.0122C1078.24 76.5508 1080.71 71.8575 1083.96 67.9322C1087.2 63.9215 1091.21 60.8495 1095.99 58.7162C1100.85 56.4975 1106.48 55.3882 1112.88 55.3882C1117.75 55.3882 1122.1 56.0708 1125.94 57.4361C1129.87 58.7162 1133.19 60.6362 1135.92 63.1962C1138.74 65.6708 1140.87 68.7428 1142.32 72.4122C1143.86 76.0815 1144.63 80.2628 1144.63 84.9562L1131.19 86.7482C1131.19 82.4815 1130.38 78.9402 1128.76 76.1242C1127.22 73.3082 1125.04 71.1748 1122.23 69.7242C1119.5 68.2735 1116.21 67.5481 1112.37 67.5481C1107.93 67.5481 1103.92 68.7001 1100.34 71.0042C1096.76 73.3082 1093.9 76.8495 1091.76 81.6282C1089.72 86.3215 1088.69 92.2948 1088.69 99.5482C1088.69 105.009 1089.29 109.788 1090.48 113.884C1091.76 117.895 1093.51 121.223 1095.73 123.868C1098.04 126.428 1100.72 128.348 1103.8 129.628C1106.87 130.823 1110.2 131.42 1113.78 131.42C1118.05 131.42 1121.63 130.609 1124.53 128.988C1127.43 127.281 1129.69 124.892 1131.32 121.82C1132.94 118.663 1133.88 114.908 1134.13 110.556H1118.52V99.6762H1146.93V113.756L1147.06 141.66H1136.31L1137.46 117.852H1136.31C1135.63 123.313 1134.13 127.964 1131.83 131.804C1129.52 135.559 1126.49 138.417 1122.74 140.38C1118.99 142.343 1114.55 143.324 1109.43 143.324ZM1184.12 143.324C1178.66 143.324 1173.88 142.513 1169.79 140.892C1165.78 139.185 1162.45 136.796 1159.8 133.724C1157.16 130.652 1155.19 127.068 1153.91 122.972C1152.63 118.791 1151.99 114.225 1151.99 109.276C1151.99 104.412 1152.59 99.8468 1153.79 95.5802C1155.07 91.2282 1156.99 87.3882 1159.55 84.0602C1162.11 80.7322 1165.35 78.1295 1169.27 76.2522C1173.2 74.3748 1177.81 73.4361 1183.1 73.4361C1188.05 73.4361 1192.36 74.2895 1196.03 75.9962C1199.78 77.7028 1202.85 80.1348 1205.24 83.2922C1207.72 86.3642 1209.42 90.0762 1210.36 94.4282C1211.39 98.7802 1211.6 103.601 1211 108.892L1160.57 109.788V100.956L1200.64 100.316L1198.08 105.308C1198.33 101.212 1197.95 97.6708 1196.92 94.6842C1195.9 91.6122 1194.24 89.2655 1191.93 87.6442C1189.71 85.9375 1186.77 85.0842 1183.1 85.0842C1179.17 85.0842 1175.89 86.0655 1173.24 88.0282C1170.68 89.9908 1168.76 92.7642 1167.48 96.3482C1166.2 99.9322 1165.56 104.071 1165.56 108.764C1165.56 116.444 1167.18 122.289 1170.43 126.3C1173.67 130.311 1178.36 132.316 1184.51 132.316C1187.49 132.316 1189.97 131.847 1191.93 130.908C1193.98 129.969 1195.6 128.775 1196.8 127.324C1197.99 125.788 1198.8 124.124 1199.23 122.332C1199.65 120.54 1199.82 118.791 1199.74 117.084L1212.67 117.98C1212.75 121.393 1212.24 124.636 1211.13 127.708C1210.02 130.695 1208.27 133.383 1205.88 135.772C1203.58 138.076 1200.59 139.911 1196.92 141.276C1193.34 142.641 1189.07 143.324 1184.12 143.324ZM1239.74 142.94C1233.34 142.94 1228.48 141.191 1225.15 137.692C1221.82 134.108 1220.16 128.817 1220.16 121.82V86.6202H1212.1V76.7642H1214.66C1218.15 76.4228 1220.67 75.3562 1222.21 73.5642C1223.74 71.6868 1224.64 68.9562 1224.9 65.3722L1225.41 60.6362H1233.98V75.2281H1250.88V86.8762H1233.98V120.924C1233.98 124.252 1234.75 126.684 1236.29 128.22C1237.82 129.756 1239.91 130.524 1242.56 130.524C1243.92 130.524 1245.38 130.311 1246.91 129.884C1248.45 129.457 1249.77 128.817 1250.88 127.964V140.892C1248.83 141.575 1246.91 142.087 1245.12 142.428C1243.33 142.769 1241.54 142.94 1239.74 142.94ZM1279.14 141.66V75.2281H1293.09V141.66H1279.14ZM1286.05 67.6762C1283.24 67.6762 1281.06 67.0788 1279.53 65.8842C1278.08 64.6042 1277.35 62.8548 1277.35 60.6362C1277.35 58.3322 1278.08 56.5828 1279.53 55.3882C1281.06 54.1082 1283.24 53.4682 1286.05 53.4682C1288.96 53.4682 1291.13 54.1082 1292.58 55.3882C1294.03 56.5828 1294.76 58.3322 1294.76 60.6362C1294.76 62.9402 1293.99 64.6895 1292.45 65.8842C1291 67.0788 1288.87 67.6762 1286.05 67.6762ZM1300.55 141.66V108.508L1300.42 75.2281H1312.97L1311.56 105.564H1312.71C1313.22 98.3108 1314.38 92.3375 1316.17 87.6442C1318.05 82.8655 1320.65 79.3242 1323.98 77.0202C1327.39 74.6308 1331.53 73.4361 1336.39 73.4361C1343.9 73.4361 1349.45 76.0815 1353.03 81.3722C1356.62 86.5775 1358.41 94.5562 1358.41 105.308V141.66H1344.46V106.332C1344.46 99.3348 1343.47 94.1722 1341.51 90.8442C1339.63 87.5162 1336.48 85.8522 1332.04 85.8522C1328.37 85.8522 1325.21 87.1322 1322.57 89.6922C1319.92 92.2522 1317.92 96.1775 1316.55 101.468C1315.19 106.673 1314.5 113.457 1314.5 121.82V141.66H1300.55ZM1411.54 142.94C1405.14 142.94 1400.28 141.191 1396.95 137.692C1393.62 134.108 1391.96 128.817 1391.96 121.82V86.6202H1383.89V76.7642H1386.45C1389.95 76.4228 1392.47 75.3562 1394.01 73.5642C1395.54 71.6868 1396.44 68.9562 1396.69 65.3722L1397.21 60.6362H1405.78V75.2281H1422.68V86.8762H1405.78V120.924C1405.78 124.252 1406.55 126.684 1408.09 128.22C1409.62 129.756 1411.71 130.524 1414.36 130.524C1415.72 130.524 1417.17 130.311 1418.71 129.884C1420.25 129.457 1421.57 128.817 1422.68 127.964V140.892C1420.63 141.575 1418.71 142.087 1416.92 142.428C1415.13 142.769 1413.33 142.94 1411.54 142.94ZM1454.87 143.324C1448.72 143.324 1443.22 142.044 1438.36 139.484C1433.49 136.924 1429.65 133.041 1426.84 127.836C1424.11 122.631 1422.74 116.145 1422.74 108.38C1422.74 100.529 1424.15 94.0442 1426.96 88.9242C1429.78 83.7188 1433.58 79.8362 1438.36 77.2762C1443.22 74.7162 1448.68 73.4361 1454.74 73.4361C1460.88 73.4361 1466.35 74.7588 1471.12 77.4042C1475.99 79.9642 1479.79 83.8468 1482.52 89.0522C1485.33 94.2575 1486.74 100.785 1486.74 108.636C1486.74 116.487 1485.33 123.015 1482.52 128.22C1479.79 133.34 1475.99 137.137 1471.12 139.612C1466.35 142.087 1460.93 143.324 1454.87 143.324ZM1455.12 132.316C1458.79 132.316 1461.91 131.42 1464.47 129.628C1467.11 127.836 1469.12 125.233 1470.48 121.82C1471.93 118.321 1472.66 114.14 1472.66 109.276C1472.66 104.241 1471.89 99.9322 1470.36 96.3482C1468.91 92.6788 1466.81 89.8628 1464.08 87.9002C1461.44 85.9375 1458.24 84.9562 1454.48 84.9562C1450.81 84.9562 1447.66 85.8948 1445.01 87.7722C1442.45 89.6495 1440.45 92.3375 1439 95.8362C1437.55 99.3348 1436.82 103.473 1436.82 108.252C1436.82 115.761 1438.44 121.649 1441.68 125.916C1444.93 130.183 1449.41 132.316 1455.12 132.316ZM1513.82 143.324C1506.14 143.324 1500.51 140.593 1496.92 135.132C1493.34 129.585 1491.55 121.052 1491.55 109.532V75.2281H1505.63V109.404C1505.63 117.084 1506.57 122.588 1508.44 125.916C1510.41 129.159 1513.56 130.78 1517.92 130.78C1520.65 130.78 1523.08 130.14 1525.21 128.86C1527.35 127.58 1529.14 125.617 1530.59 122.972C1532.13 120.241 1533.28 116.828 1534.04 112.732C1534.81 108.551 1535.2 103.559 1535.2 97.7562V75.2281H1549.15V108.636L1549.28 141.66H1536.73L1538.14 113.884H1537.12C1536.35 120.711 1535.03 126.3 1533.15 130.652C1531.27 135.004 1528.71 138.204 1525.47 140.252C1522.31 142.3 1518.43 143.324 1513.82 143.324ZM1586.94 143.324C1581.56 143.324 1576.87 142.471 1572.86 140.764C1568.85 139.057 1565.48 136.668 1562.75 133.596C1560.1 130.439 1558.1 126.769 1556.73 122.588C1555.45 118.407 1554.81 113.799 1554.81 108.764C1554.81 103.815 1555.45 99.2068 1556.73 94.9402C1558.1 90.6735 1560.06 86.9188 1562.62 83.6762C1565.26 80.4335 1568.55 77.9162 1572.47 76.1242C1576.48 74.3322 1581.14 73.4361 1586.43 73.4361C1592.83 73.4361 1598.03 74.6735 1602.04 77.1482C1606.14 79.5375 1609.12 82.6948 1611 86.6202C1612.88 90.4602 1613.65 94.6415 1613.31 99.1642L1600.89 100.444C1600.89 97.0308 1600.25 94.2148 1598.97 91.9962C1597.78 89.6922 1596.07 87.9428 1593.85 86.7482C1591.72 85.5535 1589.24 84.9562 1586.43 84.9562C1584.12 84.9562 1581.9 85.3828 1579.77 86.2362C1577.72 87.0042 1575.84 88.3268 1574.14 90.2042C1572.52 91.9962 1571.24 94.3855 1570.3 97.3722C1569.36 100.273 1568.89 103.857 1568.89 108.124C1568.89 113.671 1569.7 118.236 1571.32 121.82C1572.94 125.404 1575.12 128.049 1577.85 129.756C1580.67 131.377 1583.82 132.188 1587.32 132.188C1591.08 132.188 1594.06 131.377 1596.28 129.756C1598.59 128.135 1600.21 126.001 1601.15 123.356C1602.17 120.625 1602.6 117.809 1602.43 114.908L1615.48 115.804C1615.65 119.644 1615.18 123.271 1614.07 126.684C1613.05 130.012 1611.3 132.956 1608.83 135.516C1606.44 137.991 1603.41 139.911 1599.74 141.276C1596.15 142.641 1591.89 143.324 1586.94 143.324ZM1619.89 141.66V111.068L1619.76 53.9801H1633.97V71.5162C1633.97 73.0522 1633.84 75.1855 1633.58 77.9162C1633.41 80.5615 1633.16 83.5482 1632.82 86.8762C1632.47 90.1188 1632.09 93.4468 1631.66 96.8602C1631.32 100.273 1631.02 103.473 1630.77 106.46H1631.92C1632.6 98.6948 1633.97 92.3802 1636.02 87.5162C1638.06 82.6522 1640.79 79.1108 1644.21 76.8922C1647.71 74.5882 1651.76 73.4361 1656.37 73.4361C1663.62 73.4361 1669 76.0388 1672.5 81.2442C1675.99 86.4495 1677.74 94.2575 1677.74 104.668V141.66H1663.79V105.436C1663.79 98.6095 1662.85 93.6602 1660.98 90.5882C1659.1 87.5162 1656.15 85.9802 1652.14 85.9802C1648.39 85.9802 1645.15 87.3455 1642.42 90.0762C1639.68 92.7215 1637.55 96.6468 1636.02 101.852C1634.56 107.057 1633.84 113.457 1633.84 121.052V141.66H1619.89Z"
              fill=""
              className="fill-foreground"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2_1046"
              x1="-90.98"
              y1="100.45"
              x2="1531.02"
              y2="100.45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.125" />
              <stop offset="0.875" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="bg-card">
          <MyForm />
        </div>
      </div>
    </>
  );
};
export default Home;
