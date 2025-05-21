import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerbgimg from "../../../public/footerbgimg.png";
import FadeIn from "../animation/FadIn";
const Footer = () => {
  return (
    <footer className="z-10 bg-[#191a20] pt-16 md:pt-20">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="flex sm:flex-row flex-col justify-between gap-10 lg:gap-16">
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 pages">
            {/* logo */}
            <div className="w-fit logo">
              <FadeIn>
                <div className="flex items-center gap-3 lg:gap-4 pb-8 md:pb-12 lg:pb-16 socil">
                  {/* insta */}
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="group w-6 h-6 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5001 18.4583H7.50008C2.97508 18.4583 1.04175 16.525 1.04175 12V6.99996C1.04175 2.47496 2.97508 0.541626 7.50008 0.541626H12.5001C17.0251 0.541626 18.9584 2.47496 18.9584 6.99996V12C18.9584 16.525 17.0251 18.4583 12.5001 18.4583ZM7.50008 1.79163C3.65841 1.79163 2.29175 3.15829 2.29175 6.99996V12C2.29175 15.8416 3.65841 17.2083 7.50008 17.2083H12.5001C16.3417 17.2083 17.7084 15.8416 17.7084 12V6.99996C17.7084 3.15829 16.3417 1.79163 12.5001 1.79163H7.50008Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                      <path
                        d="M9.99992 13.0417C8.04992 13.0417 6.45825 11.45 6.45825 9.5C6.45825 7.55004 8.04992 5.95837 9.99992 5.95837C11.9499 5.95837 13.5416 7.55004 13.5416 9.5C13.5416 11.45 11.9499 13.0417 9.99992 13.0417ZM9.99992 7.20837C8.73325 7.20837 7.70825 8.23337 7.70825 9.5C7.70825 10.7667 8.73325 11.7917 9.99992 11.7917C11.2666 11.7917 12.2916 10.7667 12.2916 9.5C12.2916 8.23337 11.2666 7.20837 9.99992 7.20837Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                      <path
                        d="M14.1666 5.75004C14.0583 5.75004 13.9499 5.72504 13.8499 5.68338C13.7499 5.64171 13.6583 5.58338 13.5749 5.50838C13.4999 5.42504 13.4333 5.33338 13.3916 5.23338C13.3499 5.13338 13.3333 5.02504 13.3333 4.91671C13.3333 4.80838 13.3499 4.70004 13.3916 4.60004C13.4416 4.49171 13.4999 4.40838 13.5749 4.32504C13.6166 4.29171 13.6583 4.25004 13.6999 4.22504C13.7499 4.19171 13.7999 4.16671 13.8499 4.15004C13.8999 4.12504 13.9499 4.10838 14.0083 4.10004C14.2749 4.04171 14.5583 4.13338 14.7583 4.32504C14.8333 4.40838 14.8916 4.49171 14.9333 4.60004C14.9749 4.70004 14.9999 4.80838 14.9999 4.91671C14.9999 5.02504 14.9749 5.13338 14.9333 5.23338C14.8916 5.33338 14.8333 5.42504 14.7583 5.50838C14.6749 5.58338 14.5833 5.64171 14.4833 5.68338C14.3833 5.72504 14.2749 5.75004 14.1666 5.75004Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                    </svg>
                  </a>
                  {/* msg */}
                  <a
                    href="https://www.gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="group w-6 h-6 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                      <path
                        d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                    </svg>
                  </a>
                  {/* face */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="group w-6 h-6 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.2917 19.4583H8.54167V13.4167H7.74999C7.26666 13.4167 6.875 13.025 6.875 12.5417V10.9583C6.875 10.475 7.26666 10.0833 7.74999 10.0833H8.54167V8C8.54167 6.275 9.94167 4.875 11.6667 4.875H13.9167C14.4 4.875 14.7917 5.26666 14.7917 5.74999V7.75001C14.7917 8.23334 14.4 8.625 13.9167 8.625H12.2917V10.0833H13.8583C14.125 10.0833 14.3667 10.2 14.5333 10.4C14.7 10.6 14.7667 10.8667 14.7167 11.125L14.4 12.7083C14.3167 13.1167 13.9583 13.4083 13.5417 13.4083H12.2917V19.4583ZM9.79167 18.2083H11.0417V12.1667H13.2417L13.4083 11.3333H11.05V8.24999C11.05 7.76666 11.4417 7.375 11.925 7.375H13.55V6.125H11.6667C10.6333 6.125 9.79167 6.96667 9.79167 8V11.3333H8.125V12.1667H9.79167V18.2083Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                      <path
                        d="M12.5001 19.4583H7.50008C2.97508 19.4583 1.04175 17.525 1.04175 13V7.99996C1.04175 3.47496 2.97508 1.54163 7.50008 1.54163H12.5001C17.0251 1.54163 18.9584 3.47496 18.9584 7.99996V13C18.9584 17.525 17.0251 19.4583 12.5001 19.4583ZM7.50008 2.79163C3.65841 2.79163 2.29175 4.15829 2.29175 7.99996V13C2.29175 16.8416 3.65841 18.2083 7.50008 18.2083H12.5001C16.3417 18.2083 17.7084 16.8416 17.7084 13V7.99996C17.7084 4.15829 16.3417 2.79163 12.5001 2.79163H7.50008Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                    </svg>
                  </a>
                  {/* phone */}
                  <a href="tel:+01643492556">
                    <svg
                      className="group w-6 h-6 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                        className="fill-[#f5f5f5] group-hover:fill-destructive transition-all"
                      />
                    </svg>
                  </a>
                </div>
                <h5 className="pb-2 md:pb-3 lg:pb-4 font-normal text-[#fff] text-[24px]">
                  benfort
                </h5>
                <p className="font-normal text-[#fff]/60 text-sm">
                  264 Brixton New Avenue. <br />
                  Kansas, KS 83902
                </p>
              </FadeIn>
            </div>
            {/* pages */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-2 lg:gap-3 w-fit">
                <h6 className="mb-1 lg:mb-2 font-normal text-[14px] text-white">
                  CATEGORIES
                </h6>
                <Link
                  href="/latest-properties"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  Latest Properties
                </Link>
                <Link
                  href="/featuerd-property"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  Featured Properties
                </Link>
                <Link
                  href="/agent"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  Agents
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-2 lg:gap-3 w-fit">
                <h6 className="mb-1 lg:mb-2 font-normal text-[14px] text-white">
                  MORE
                </h6>
                <Link
                  href="/properties"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  Search Properties
                </Link>
                <Link
                  href="/"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  All Listing
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="flex flex-col gap-2 lg:gap-3 w-fit">
                <h6 className="mb-1 lg:mb-2 font-normal text-[14px] text-white">
                  ACCOUNT
                </h6>
                <Link
                  href="/"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  Log in
                </Link>
                <Link
                  href="/"
                  className="w-fit font-normal text-[14px] text-white/50 hover:text-destructive"
                >
                  Sign Up
                </Link>
              </div>
            </FadeIn>
          </div>
          {/* book a cal */}
          <FadeIn delay={0.6}>
            <a
              href="https://www.framer.com"
              rel="noopener noreferer"
              target="_blunk"
              className="mb-8 w-fit h-fit"
            >
              <button className="hover:opacity-80 px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 border border-white rounded font-normal text-white text-base text-nowrap cursor-pointer">
                Book A Call
              </button>
            </a>
          </FadeIn>
        </div>

        <div className="relative mt-1 w-full">
          <Image src={footerbgimg} alt="footerbgimg.png" className="mx-auto" />
          <div className="bottom-0 left-0 absolute flex flex-wrap justify-between items-center gap-2 md:gap-6 lg:gap-8 pb-8 md:pb-13 lg:pb-19 w-full text-white copyright">
            <div className="flex gap-3 lg:gap-4">
              <FadeIn>
                <Link
                  href="/policy"
                  className="font-light hover:text-destructive text-sm transition-all"
                >
                  Privacy Policy
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/conditions"
                  className="font-light hover:text-destructive text-sm transition-all"
                >
                  Terms of Service
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.3}>
              <p className="font-light text-sm">
                Copyright © 2025 Benfort. All rights reserved.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
