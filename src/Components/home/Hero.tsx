import Image from "next/image";
import React from "react";
import heroSvg from "@/../public/hero/heroSvg.svg";
import heroImage from "@/../public/hero/heroImage.png";
import dream1 from "@/../public/hero/dreem1.svg";
import FadeIn from "../animation/FadIn";
export const Hero = () => {
  return (
    <section className="pt-12 sm:pt-14 md:pt-16 lg:pt-18 pb-13 sm:pb-15 md:pb-18 lg:pb-20">
      <div className="mx-auto px-4 max-w-[1224px] myContizer">
        <div className="pb-10 md:pb-14 lg:pb-22 text-center heading">
          <FadeIn>
            <h1 className="mx-auto mb-3 sm:mb-4 lg:mb-[26px] w-fit max-w-[320px] sm:max-w-fit font-medium text-[38px] sm:text-[44px] md:text-[60px] lg:text-[81px] leading-[1] tracking-[-2px] lg:tracking-[-4px]">
              <Image
                src={heroSvg}
                alt="heroIcon"
                className="sm:hidden mx-auto mb-3 max-w-[80px]"
              />
              <span className="">
                Find the <br className="md:hidden" />{" "}
                <span className="text-destructive">perfect </span>
              </span>
              <span className="hidden sm:inline-block px-3 md:px-px">
                <Image
                  src={heroSvg}
                  alt="heroIcon"
                  className="max-w-[52px] sm:max-w-[60px] md:max-w-[80px] lg:max-w-full"
                />
              </span>
              <br className="hidden sm:block" />
              <span className="text-destructive">property</span> with Benfort
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              We believe there&#39;s a perfect home for everybody, no matter the
              budget. <br className="hidden sm:block" /> That&#39;s why we
              always find the best homes for your budget.
            </p>
          </FadeIn>
        </div>

        <div className="flex sm:flex-row flex-col gap-4 lg:gap-6 lg:pr-14 lg:pl-9 innerDiv">
          {/* card img */}
          <FadeIn>
            <div className="left">
              <Image
                src={heroImage}
                alt="heroImage"
                className="min-w-[240px]"
              />
            </div>
          </FadeIn>
          {/* card */}
          <FadeIn delay={0.3}>
            <div className="block relative mt-8 sm:mt-0 rounded-xl lg:rounded-2xl sm:min-w-[340px] lg:min-w-[421px] min-h-[340px] sm:min-h-full overflow-hidden">
              {/* mask */}
              <div className="top-0 right-0 left-0 z-10 absolute bg-gradient-to-b from-card to-transparent h-[20%] touch-none pointer-events-none layer"></div>
              <div className="right-0 bottom-0 left-0 z-10 absolute bg-gradient-to-b from-transparent to-card h-[20%] touch-none pointer-events-none layer"></div>
              {/* TextBox */}
              <div
                className="top-0 left-0 absolute flex flex-col items-center bg-card px-2 md:px-4 lg:px-8 py-2 rounded-xl lg:rounded-2xl min-w-[280px] sm:max-w-[421px] h-full overflow-y-auto"
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
                        <div className="bg-white/5 shadow-[0px_8px_12px_rgba(0,0,0,0.08)] border-[2px] border-border rounded-full w-fit overflow-hidden">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
