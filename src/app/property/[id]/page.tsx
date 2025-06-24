"use client";
import Link from "next/link";
import Image from "next/image";
import React, { use, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import florediagram from "@/../public/property/florediagram.png";
import { BedDouble } from "lucide-react";
import { PropertyData } from "@/constants/PropertyData";
import Category from "@/Components/home/category/Category";

interface PropertyDetailsProps {
  params: Promise<{ id: string }>;
}

const PropertyDetails = ({ params }: PropertyDetailsProps) => {
  const { id } = use(params);
  const router = useRouter();

  const [activePlane, setActivePlane] = useState(1);
  // video
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // find it's items to details
  const property = PropertyData.find((item) => item.id === id);

  // filter cateogory by title
  const category = PropertyData.filter(
    (sorted) => sorted.roomType[0] === property?.roomType[0]
  );

  if (!property) {
    return (
      <section className="mx-4 py-16 text-destructive text-center">
        <h1>Property Not Found</h1>
        <p>No property matches the provided ID.</p>
      </section>
    );
  }
  return (
    <section className="py-12 w-full">
      <div className="mx-auto px-4 max-w-[1232px]">
        {/* properties details*/}
        <div className="" key={property.id}>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {/* images */}
            <div className="top-12 sm:top-14 md:top-16 lg:top-20 md:sticky flex flex-col gap-2 h-fit">
              <Image
                src={property.image}
                alt="property1 image"
                className="mx-auto rounded-[8px] lg:rounded-[12px] w-full"
              />
              <div className="flex gap-2 sm:grid grid-cols-1 sm:grid-cols-2 overflow-x-auto">
                {property.thumbImage.map((thumb, i) => (
                  <div key={i} className="min-w-[180px] sm:min-w-full">
                    <Image
                      src={thumb}
                      alt="property2 image"
                      className="mx-auto rounded-[8px] lg:rounded-[12px] w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* details */}
            <div className="details">
              <div className="flex flex-wrap justify-between items-center gap-4 w-full">
                <div className="flex gap-1 lg:gap-2">
                  {property.roomType.map((typy, i) => (
                    <div
                      key={i}
                      className="bg-popover px-2 lg:px-3 py-1 lg:py-1.5 rounded-[6px] font-normal text-[12px] text-foreground leading-[18px]"
                    >
                      {typy}
                    </div>
                  ))}
                </div>
                <span className="bg-popover p-1 lg:p-1.5">
                  <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.63001 8.15711C7.78001 8.15711 6.93001 8.00711 6.12201 7.71511C5.79701 7.59911 5.63001 7.24011 5.74701 6.91511C5.87201 6.59011 6.23001 6.42411 6.55501 6.54011C7.89701 7.02411 9.37201 7.02411 10.713 6.54011C11.038 6.42411 11.397 6.59011 11.513 6.91511C11.63 7.24011 11.463 7.59911 11.138 7.71511C10.33 8.00711 9.48001 8.15711 8.63001 8.15711Z"
                      fill=""
                      className="fill-foreground"
                    />
                    <path
                      d="M14.522 18.5491C14.097 18.5491 13.63 18.4241 13.18 18.1651L9.114 15.9071C8.872 15.7741 8.397 15.7741 8.155 15.9071L4.089 18.1651C3.264 18.6241 2.422 18.6741 1.78 18.2901C1.139 17.9151 0.772003 17.1571 0.772003 16.2151V4.47408C0.772003 2.35708 2.497 0.63208 4.614 0.63208H12.655C14.772 0.63208 16.497 2.35708 16.497 4.47408V16.2151C16.497 17.1571 16.13 17.9151 15.489 18.2901C15.197 18.4651 14.864 18.5491 14.522 18.5491ZM8.63 14.5571C9.022 14.5571 9.405 14.6401 9.714 14.8151L13.78 17.0741C14.205 17.3151 14.597 17.3651 14.847 17.2151C15.097 17.0651 15.239 16.7071 15.239 16.2151V4.47408C15.239 3.04908 14.072 1.88208 12.647 1.88208H4.614C3.189 1.88208 2.022 3.04908 2.022 4.47408V16.2151C2.022 16.7071 2.164 17.0741 2.414 17.2151C2.664 17.3571 3.047 17.3151 3.48 17.0741L7.547 14.8151C7.855 14.6401 8.239 14.5571 8.63 14.5571Z"
                      fill=""
                      className="fill-foreground"
                    />
                    <path
                      d="M14.522 18.5491C14.097 18.5491 13.63 18.4241 13.18 18.1651L9.114 15.9071C8.872 15.7741 8.397 15.7741 8.155 15.9071L4.089 18.1651C3.264 18.6241 2.422 18.6741 1.78 18.2901C1.139 17.9151 0.772003 17.1571 0.772003 16.2151V4.47408C0.772003 2.35708 2.497 0.63208 4.614 0.63208H12.655C14.772 0.63208 16.497 2.35708 16.497 4.47408V16.2151C16.497 17.1571 16.13 17.9151 15.489 18.2901C15.197 18.4651 14.864 18.5491 14.522 18.5491ZM8.63 14.5571C9.022 14.5571 9.405 14.6401 9.714 14.8151L13.78 17.0741C14.205 17.3151 14.597 17.3651 14.847 17.2151C15.097 17.0651 15.239 16.7071 15.239 16.2151V4.47408C15.239 3.04908 14.072 1.88208 12.647 1.88208H4.614C3.189 1.88208 2.022 3.04908 2.022 4.47408V16.2151C2.022 16.7071 2.164 17.0741 2.414 17.2151C2.664 17.3571 3.047 17.3151 3.48 17.0741L7.547 14.8151C7.855 14.6401 8.239 14.5571 8.63 14.5571Z"
                      fill=""
                      className="fill-foreground"
                    />
                  </svg>
                </span>
              </div>

              <div className="mt-4 lg:mt-6">
                <div className="flex flex-wrap justify-between items-center gap-12">
                  <h4 className="font-medium text-xl lg:text-2xl leading-[34px] tracking-[-1.4px]">
                    {property.title}
                  </h4>
                  <h6 className="font-medium text-[18px] lg:text-[20px] leading-[24px] md:tracking- [-1px]">
                    $ {property.price.toLocaleString()}
                  </h6>
                </div>
                <ul className="flex flex-wrap items-center gap-2 mt-2 mb-4 lg:mb-6">
                  <li className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.0003 9.96802C6.58029 9.96802 5.42029 8.86958 5.42029 7.51085C5.42029 6.15212 6.58029 5.06006 8.0003 5.06006C9.4203 5.06006 10.5803 6.15847 10.5803 7.5172C10.5803 8.87591 9.4203 9.96802 8.0003 9.96802ZM8.0003 6.01244C7.13362 6.01244 6.42029 6.68545 6.42029 7.5172C6.42029 8.34897 7.12695 9.02196 8.0003 9.02196C8.87366 9.02196 9.5803 8.34897 9.5803 7.5172C9.5803 6.68545 8.86694 6.01244 8.0003 6.01244Z"
                        fill=""
                        className="fill-foreground"
                      />
                      <path
                        d="M8.00031 15.4218C7.01364 15.4218 6.0203 15.0662 5.24697 14.3615C3.2803 12.5583 1.10697 9.6821 1.92697 6.25989C2.66697 3.15512 5.51364 1.76465 8.00031 1.76465C8.00031 1.76465 8.00031 1.76465 8.00695 1.76465C10.4937 1.76465 13.3403 3.15512 14.0803 6.26623C14.8937 9.68842 12.7203 12.5583 10.7537 14.3615C9.98031 15.0662 8.98695 15.4218 8.00031 15.4218ZM8.00031 2.71703C6.0603 2.71703 3.56697 3.70115 2.90697 6.46941C2.18697 9.45985 4.1603 12.0377 5.94697 13.6694C7.1003 14.7297 8.90695 14.7297 10.0603 13.6694C11.8403 12.0377 13.8137 9.45985 13.107 6.46941C12.4403 3.70115 9.94031 2.71703 8.00031 2.71703Z"
                        fill=""
                        className="fill-foreground"
                      />
                    </svg>

                    <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                      {property.locate}
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="bg-foreground rounded-full w-2.5 h-2.5"></span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_414)">
                        <path
                          d="M10.0302 15.6254H6.03026C2.41026 15.6254 0.863586 14.1524 0.863586 10.7048V6.89524C0.863586 3.44762 2.41026 1.97461 6.03026 1.97461H10.0302C13.6502 1.97461 15.197 3.44762 15.197 6.89524V10.7048C15.197 14.1524 13.6502 15.6254 10.0302 15.6254ZM6.03026 2.92699C2.95692 2.92699 1.86359 3.96826 1.86359 6.89524V10.7048C1.86359 13.6317 2.95692 14.673 6.03026 14.673H10.0302C13.1036 14.673 14.197 13.6317 14.197 10.7048V6.89524C14.197 3.96826 13.1036 2.92699 10.0302 2.92699H6.03026Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M6.02974 8.00647C5.01641 8.00647 4.19641 7.22551 4.19641 6.26044C4.19641 5.29536 5.01641 4.5144 6.02974 4.5144C7.04307 4.5144 7.86307 5.29536 7.86307 6.26044C7.86307 7.22551 7.04307 8.00647 6.02974 8.00647ZM6.02974 5.46679C5.56974 5.46679 5.19641 5.82234 5.19641 6.26044C5.19641 6.69853 5.56974 7.05408 6.02974 7.05408C6.48974 7.05408 6.86307 6.69853 6.86307 6.26044C6.86307 5.82234 6.48974 5.46679 6.02974 5.46679Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M1.80999 13.689C1.64999 13.689 1.48999 13.6128 1.39666 13.4794C1.24332 13.2635 1.30332 12.9651 1.53666 12.8191L4.82332 10.7175C5.54332 10.254 6.53666 10.3111 7.18999 10.8381L7.40999 11.0223C7.74332 11.2953 8.31001 11.2953 8.63665 11.0223L11.41 8.75563C12.1166 8.17781 13.23 8.17781 13.9433 8.75563L15.03 9.64446C15.2366 9.81589 15.2633 10.1143 15.0833 10.3175C14.9033 10.5143 14.59 10.5397 14.3766 10.3683L13.29 9.47943C12.9566 9.20637 12.39 9.20637 12.0566 9.47943L9.28329 11.7461C8.57665 12.3239 7.46332 12.3239 6.74999 11.7461L6.52999 11.5619C6.22332 11.3143 5.71666 11.289 5.37666 11.5111L2.08999 13.6128C2.00332 13.6635 1.90332 13.689 1.80999 13.689Z"
                          fill=""
                          className="fill-foreground"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_414">
                          <rect
                            width="16"
                            height="16"
                            fill=""
                            className="fill-foreground"
                            transform="translate(0.0299988 0.800049)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                      {property.roomCount}
                    </p>
                  </li>
                </ul>
                <ul className="flex flex-wrap items-center gap-2 lg:gap-3 mb-2 sm:mb-3">
                  <li className="flex items-center gap-1">
                    <BedDouble
                      size={16}
                      strokeWidth={1.25}
                      absoluteStrokeWidth
                      className="text-foreground"
                    />
                    <p className="font-normal text-[12px] leading-[18px]">
                      {property.bedCount} Room
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9467 10.1333H1.61334V12.8C1.61334 13.5364 2.2103 14.1333 2.94668 14.1333H13.6133C14.3497 14.1333 14.9467 13.5364 14.9467 12.8V10.1333Z"
                        stroke=""
                        className="stroke-foreground"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.94666 14.8H13.6133"
                        stroke=""
                        className="stroke-foreground"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.6133 10.1334V3.74286C13.6133 3.22216 13.1912 2.80005 12.6705 2.80005C12.4205 2.80005 12.1807 2.89938 12.0039 3.07619L10.28 4.80005"
                        stroke=""
                        className="stroke-foreground"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.61333 5.46672C4.34971 5.46672 4.94667 4.86976 4.94667 4.13338C4.94667 3.397 4.34971 2.80005 3.61333 2.80005C2.87695 2.80005 2.28 3.397 2.28 4.13338C2.28 4.86976 2.87695 5.46672 3.61333 5.46672Z"
                        fill=""
                        className="fill-foreground"
                      />
                      <path
                        d="M10.2059 6.05948C10.336 6.18966 10.5516 6.19095 10.6455 6.03262C10.7666 5.82844 10.8321 5.59378 10.8321 5.35238C10.8321 4.99875 10.6916 4.65962 10.4415 4.40956C10.1915 4.15952 9.8524 4.01904 9.49873 4.01904C9.25733 4.01904 9.02267 4.08451 8.81853 4.20561C8.6602 4.29953 8.66147 4.51509 8.79167 4.64527L9.49873 5.35238L10.2059 6.05948Z"
                        fill=""
                        className="fill-foreground"
                      />
                      <path
                        d="M2.61332 10.1334L2.4649 8.64918C2.36589 7.65912 3.14336 6.80005 4.13835 6.80005C4.64925 6.80005 5.13245 7.03229 5.4516 7.43124L7.61332 10.1334"
                        stroke=""
                        className="stroke-foreground"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="font-normal text-[12px] leading-[18px]">
                      {property.bathCount} Bath Room
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_455)">
                        <path
                          d="M12.7767 12.6335H3.44333C1.83 12.6335 0.943329 11.7468 0.943329 10.1335V7.4668C0.943329 5.85346 1.83 4.9668 3.44333 4.9668H12.7767C14.39 4.9668 15.2767 5.85346 15.2767 7.4668V10.1335C15.2767 11.7468 14.39 12.6335 12.7767 12.6335ZM3.44333 5.9668C2.39 5.9668 1.94333 6.41346 1.94333 7.4668V10.1335C1.94333 11.1868 2.39 11.6335 3.44333 11.6335H12.7767C13.83 11.6335 14.2767 11.1868 14.2767 10.1335V7.4668C14.2767 6.41346 13.83 5.9668 12.7767 5.9668H3.44333Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M12.11 9.30013C11.8367 9.30013 11.61 9.07346 11.61 8.80013V5.4668C11.61 5.19346 11.8367 4.9668 12.11 4.9668C12.3833 4.9668 12.61 5.19346 12.61 5.4668V8.80013C12.61 9.07346 12.3833 9.30013 12.11 9.30013Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M4.10999 8.63346C3.83665 8.63346 3.60999 8.4068 3.60999 8.13346V5.4668C3.60999 5.19346 3.83665 4.9668 4.10999 4.9668C4.38332 4.9668 4.60999 5.19346 4.60999 5.4668V8.13346C4.60999 8.4068 4.38332 8.63346 4.10999 8.63346Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M6.77664 9.30013C6.49664 9.30013 6.27664 9.07346 6.27664 8.79346L6.30998 5.46013C6.30998 5.1868 6.53664 4.9668 6.80998 4.9668C6.80998 4.9668 6.80998 4.9668 6.81664 4.9668C7.08998 4.9668 7.31664 5.19346 7.30998 5.47346L7.27664 8.8068C7.27664 9.08013 7.04998 9.30013 6.77664 9.30013Z"
                          fill=""
                          className="fill-foreground"
                        />
                        <path
                          d="M9.44333 7.9668C9.17 7.9668 8.94333 7.74013 8.94333 7.4668V5.4668C8.94333 5.19346 9.17 4.9668 9.44333 4.9668C9.71666 4.9668 9.94333 5.19346 9.94333 5.4668V7.4668C9.94333 7.74013 9.71666 7.9668 9.44333 7.9668Z"
                          fill=""
                          className="fill-foreground"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_455">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.109985 0.800049)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="font-normal text-[12px] leading-[18px]">
                      {property.squareFit}
                    </p>
                  </li>
                </ul>
                <div className="flex items-center gap-2 my-7 md:my-10 lg:my-12">
                  <Image src={property.agentImg} alt="agentFml image" />
                  <div>
                    <h6>{property.agent}</h6>
                    <p className="text-foreground/60">view Profile</p>
                  </div>
                </div>
                <p className="text-[12px]">DESCRIPTIONS</p>
                <p className="mt-3 lg:mt-4 text-[14px]">
                  {(() => {
                    const text = property.description;
                    let dotCount = 0;
                    let splitIndex = -1;

                    for (let i = 0; i < text.length; i++) {
                      if (text[i] === ".") {
                        dotCount++;
                        if (dotCount === 3) {
                          splitIndex = i + 1; // right after 3rd dot
                          break;
                        }
                      }
                    }

                    if (splitIndex === -1) return text; // if fewer than 3 dots

                    const firstPart = text.slice(0, splitIndex);
                    const secondPart = text.slice(splitIndex);

                    return (
                      <>
                        {firstPart}
                        <br />
                        <br />
                        {secondPart}
                      </>
                    );
                  })()}
                </p>
                {/* address */}
                <div className="mt-8 lg:mt-12 address">
                  <p className="mb-4 text-[12px]">ADDRESS</p>
                  <div className="gap-6 lg:gap-8 grid grid-cols-2">
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Area/Landmark
                        </p>
                        <h6 className="text-[14px]">{property.address.area}</h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Address
                        </p>
                        <h6 className="text-[14px]">
                          {property.address.Address}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">City</p>
                        <h6 className="text-[14px]">{property.address.city}</h6>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          State/County
                        </p>
                        <h6 className="text-[14px]">
                          {property.address.State}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">ZIP</p>
                        <h6 className="text-[14px]">{property.address.zip}</h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Country
                        </p>
                        <h6 className="text-[14px]">
                          {property.address.country}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div className="mt-8 lg:mt-12 address">
                  <p className="mb-4 text-[12px]">DETAILS</p>
                  <div className="gap-6 lg:gap-8 grid grid-cols-2">
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Property Id
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.PropertyId}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Price Info
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.priceInfo} / sq ft
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Property Lot Size
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.lotSize} ft<sup>2</sup>
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Bed Rooms
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.bedRooms} Room
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Garages
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.garages}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Garages Size
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.garageSize}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Struture Type
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.structure}
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">Price</p>
                        <h6 className="text-[14px]">
                          $ {property.propertyDetails.price.toLocaleString()}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Property Size
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.propertySize} ft{" "}
                          <sup>2</sup>
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">Rooms</p>
                        <h6 className="text-[14px]">
                          0{property.propertyDetails.rooms}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Bathrooms
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.bathrooms} Bathroom
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Year Build
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.year}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Availeable Form
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.form}
                        </h6>
                      </div>
                      <div className="">
                        <p className="opacity-[0.4] mb-1 text-[12px]">
                          Floors No.
                        </p>
                        <h6 className="text-[14px]">
                          {property.propertyDetails.floores}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* amenities & features */}
          <div className="mt-8 lg:mt-12 amenities">
            <p className="mb-4 text-[12px]">AMENITIES & FEATURES</p>
            <div className="gap-6 lg:gap-8 grid grid-cols-2">
              <div>
                <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                  Interior Details
                </p>
                <ul className="mt-4">
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Equipped Kitchen
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Gym
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Landry
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Media Room
                  </li>
                </ul>
              </div>
              <div>
                <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                  Outdoor Details
                </p>
                <ul className="mt-4">
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Patio
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Outdoor Fireplace
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Gazebo
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Outdoor Dining Area
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Pergola
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Garden Pathways
                  </li>
                </ul>
              </div>
            </div>
            <div className="gap-6 lg:gap-8 grid grid-cols-2 mt-6 lg:mt-8">
              {/* Utilities */}
              <div>
                <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                  Utilities
                </p>
                <ul className="mt-4">
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Central Air
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Electricity
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Heating
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Natural Gas
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Ventilation
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Water
                  </li>
                </ul>
              </div>
              {/* Other Features */}
              <div>
                <p className="opacity-[0.4] pb-2 border-b border-border text-[12px]">
                  Other Features
                </p>
                <ul className="mt-4">
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Fire Pit
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Vegetable Garden
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Treehouse
                  </li>
                  <li className="before:top-1/2 before:left-0 before:absolute relative before:bg-foreground pl-4 sm:pl-6 before:rounded-full w-full before:w-1.5 before:h-1.5 text-[14px] before:content-[''] before:-translate-y-1/2">
                    Outdoor Shower
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:gap-14">
            {/* flooer plans */}
            <div className="items-center gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-15 florplans">
              <div className="order-2 sm:order-1 plan">
                <p className="hidden sm:block text-[12px]">FLORE PLANS</p>
                <div className="flex sm:flex-col flex-col-reverse">
                  <div className="py-3 lg:py-5 text-[14px]">
                    <p className={`${activePlane === 1 ? "" : "hidden"}`}>
                      Living Spaces are more easily interpreted. All-In-Ones
                      color floor plan option clearly defines your listing’s
                      living spaces, making them obvious and clearly visible to
                      your potential buyers/clients. Add extra value to your
                      services. Color floor-plans show that you care about
                      selling your client’s listing; they add a premium, high
                      value look to any listing and can be used in your
                      brochures, email and websites.
                    </p>
                    <p className={`${activePlane === 2 ? "" : "hidden"}`}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quasi repellat repudiandae quod cupiditate. Vero quos,
                      dicta accusamus laboriosam natus aut corporis ratione
                      autem nesciunt nisi temporibus pariatur. Veniam dolorem
                      asperiores quo eum, consectetur illum in sapiente
                      molestiae quia repudiandae aspernatur hic error modi
                      vsequi quo earum nisi! Deserunt, unde totam!
                    </p>
                    <p className={`${activePlane === 3 ? "" : "hidden"}`}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ratione at iste repudiandae a laborum inventore magni
                      labore commodi sint nostrum vero quia architecto, enim
                      soluta vitae sequi. Cumque tempora libero corrupti aperiam
                      fugit neque repellat amet itaque, maiores, ipsa enim
                      architecto reiciendis obcaecatiDeserunt odio aperiam quae
                      ipsa soluta aut minima! Maiores facilis distinctio libero
                      quas dolorum.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 planning">
                    <button
                      className={`cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] lg:rounded-[8px] text-[12px] border border-foreground ${
                        activePlane === 1
                          ? "bg-foreground text-background"
                          : "bg-transparent  text-foreground"
                      }`}
                      onClick={() => setActivePlane(1)}
                    >
                      Ground Flore
                    </button>
                    <button
                      className={`cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] lg:rounded-[8px] text-[12px] border border-foreground ${
                        activePlane === 2
                          ? "bg-foreground text-background"
                          : "bg-transparent  text-foreground"
                      }`}
                      onClick={() => setActivePlane(2)}
                    >
                      First Flore
                    </button>
                    <button
                      className={`cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 rounded-[6px] lg:rounded-[8px] text-[12px] border border-foreground ${
                        activePlane === 3
                          ? "bg-foreground text-background"
                          : "bg-transparent  text-foreground"
                      }`}
                      onClick={() => setActivePlane(3)}
                    >
                      Second Flore
                    </button>
                  </div>{" "}
                </div>
              </div>
              <div className="order-1 sm:order-2 planDiagram">
                <p className="sm:hidden mb-6 text-[12px]">FLORE PLANS</p>
                <Image
                  src={florediagram}
                  alt="florediagram image"
                  placeholder="blur"
                  className={`${activePlane === 1 ? "" : "hidden"}`}
                />
                <Image
                  src={florediagram}
                  alt="florediagram image"
                  placeholder="blur"
                  className={`grayscale-50 ${
                    activePlane === 2 ? "opacity-50" : "hidden"
                  }`}
                />
                <Image
                  src={florediagram}
                  alt="florediagram image"
                  placeholder="blur"
                  className={`grayscale-100 ${
                    activePlane === 3 ? "" : "hidden"
                  }`}
                />
              </div>
            </div>
            {/* video */}
            <div className="w-full">
              <p className="mb-4 text-[12px]">VIDEO</p>
              <div className="relative rounded-[8px] lg:rounded-[12px] overflow-hidden">
                <video
                  ref={videoRef}
                  src="/property/propertiesvideo.mp4"
                  loop
                  muted
                  className="w-full aspect-[16/9]"
                >
                  Your browser does not support the video tag.
                </video>
                {!playing && (
                  <div
                    className="group z-10 absolute inset-0 place-items-center grid bg-[url('/property/videothumb.png')] bg-cover bg-center cursor-pointer"
                    onClick={handlePlay}
                  >
                    <svg
                      className="w-16 h-12"
                      viewBox="0 0 68 48"
                      version="1.1"
                    >
                      <path
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 
              C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 
              C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24
              S67.94,13.05,66.52,7.74z"
                        fill=""
                        className="fill-foreground/80"
                        fillOpacity="1"
                        style={{
                          transition:
                            "fill 0.1s cubic-bezier(0.4, 0, 1, 1), fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1)",
                        }}
                      />
                      <path
                        d="M 45,24 27,14 27,34"
                        className="fill-white group-hover:fill-destructive transition-all"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {/* map */}
            <div>
              <p className="mb-4 text-[12px]">MAP</p>
              <div className="rounded-[8px] lg:rounded-[12px] w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=52.37589,4.89131&hl=es;z=14&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full aspect-[19/9]"
                ></iframe>
              </div>
            </div>
            {/* SIMILAR PROPERTIES */}
            <div className="w-full">
              <p className="mb-4 text-[12px]">SIMILAR PROPERTIES</p>
              <div className="flex gap-4 w-full h-full overflow-x-auto">
                <Category category={category} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => router.push("/agent")}
              className="flex items-center gap-2 bg-foreground hover:opacity-80 ms-auto px-4 lg:px-5 py-2 md:py-3 lg:py-4 rounded-[8px] w-fit text-background text-sm lg:text-base cursor-pointer"
            >
              Contact Agent
              <svg
                className="w-[18px] lg:w-[21px] h-[18px] lg:h-[21px]"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2131 9.70301C10.1881 9.70301 10.1711 9.70301 10.1461 9.70301C10.1051 9.69501 10.0461 9.69501 9.99613 9.70301C7.58013 9.62801 5.75513 7.72801 5.75513 5.38701C5.75513 3.00301 7.69613 1.06201 10.0801 1.06201C12.4631 1.06201 14.4051 3.00301 14.4051 5.38701C14.3961 7.72801 12.5631 9.62801 10.2381 9.70301C10.2301 9.70301 10.2211 9.70301 10.2131 9.70301ZM10.0801 2.31201C8.38813 2.31201 7.00513 3.69501 7.00513 5.38701C7.00513 7.05301 8.30513 8.39501 9.96313 8.45301C10.0051 8.44501 10.1211 8.44501 10.2301 8.45301C11.8631 8.37801 13.1461 7.03701 13.1551 5.38701C13.1551 3.69501 11.7711 2.31201 10.0801 2.31201Z"
                  fill=""
                  className="fill-background"
                />
                <path
                  d="M10.2211 18.8118C8.58809 18.8118 6.94609 18.3948 5.70509 17.5618C4.54609 16.7948 3.91309 15.7448 3.91309 14.6028C3.91309 13.4618 4.54609 12.4028 5.70509 11.6278C8.20509 9.96978 12.2551 9.96978 14.7381 11.6278C15.8881 12.3948 16.5301 13.4448 16.5301 14.5868C16.5301 15.7278 15.8961 16.7868 14.7381 17.5618C13.4881 18.3948 11.8551 18.8118 10.2211 18.8118ZM6.39609 12.6778C5.59609 13.2118 5.16309 13.8948 5.16309 14.6118C5.16309 15.3198 5.60509 16.0028 6.39609 16.5278C8.47109 17.9198 11.9711 17.9198 14.0461 16.5278C14.8461 15.9948 15.2801 15.3118 15.2801 14.5948C15.2801 13.8868 14.8381 13.2028 14.0461 12.6778C11.9711 11.2948 8.47109 11.2948 6.39609 12.6778Z"
                  fill=""
                  className="fill-background"
                />
              </svg>
            </button>
            <div className="flex items-center gap-4 ms-auto mt-4 w-fit">
              <Link href="/policy" className="hover:text-destructive text-sm">
                Privacy Policy
              </Link>
              <Link
                href="/conditions"
                className="hover:text-destructive text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PropertyDetails;
