"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathName = usePathname();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = [
    {
      name: "Property",
      href: "/properties",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Agent",
      href: "/agent",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
  ];

  // Prevent hydration mismatch (theme is undefined on first render)
  useEffect(() => setMounted(true), []);

  return (
    <header
      className={`z-50 bg-background/80 dark:bg-card backdrop-blur-lg w-full transition-all transform duration-500 relative  ${
        isSticky
          ? "sticky top-0 shadow-lg py-1 md:py-2 lg:py-2 xl:py-3"
          : "py-2 md:py-3 lg:py-4 xl:py-6"
      }`}
    >
      <div className="mx-auto px-4 max-w-[1232px] transition">
        <nav className="flex flex-wrap justify-between items-center w-full">
          {/* logo */}
          <Link href="/" className="logo">
            <h4 className="font-medium sm:text-[28px] lg:text-[32px] text-2xl cursor-pointer">
              benfort
            </h4>
          </Link>

          {/* main Nav */}
          <div className="hidden md:flex items-center gap-8 navMain">
            {navLink.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`
                  font-normal text-[14px] md:text-[16px] hover:text-destructive leading-[22px] lg:leading-[24px] transition-all ${
                    pathName === item.href ? "text-destructive" : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* user profile and theme toggle */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="place-items-center grid active:shadow-[0_1px_8px_0.5px] drop-shadow-2xl active:drop-shadow-foreground border-2 active:border-foreground border-border rounded-full w-7 h-7 transition cursor-pointer"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-[#191a20]" />
                )}
              </button>
            )}
            <Link href="" className="hover:opacity-80 transition-all btn-light">
              Sign Up
            </Link>
            <Link
              href="/login"
              className="hover:opacity-80 border-foreground transition-all btn-dark"
            >
              Login
            </Link>
          </div>
          {/* mobile toggler/button */}
          <div className="md:hidden">
            <div className="flex items-center gap-4 w-fit h-fit">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="place-items-center grid active:shadow-[0_1px_8px_0.5px] drop-shadow-2xl active:drop-shadow-foreground border-2 active:border-foreground border-border rounded-full w-7 h-7 transition cursor-pointer"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 lg:w-5 h-4 lg:h-5 text-foreground" />
                  ) : (
                    <Moon className="w-4 lg:w-5 h-4 lg:h-5" />
                  )}
                </button>
              )}
              <span className="mb-1 text-border text-xl">|</span>
              <Menu
                onClick={() => setMenu(!menu)}
                className={`active:opacity-50 cursor-pointer ${
                  menu ? "text-destructive" : ""
                }`}
              />
            </div>

            {/* mobile-menu */}
            <div
              className={`top-[calc(100%+0px)] z-10 absolute w-full flex
                ${menu ? "right-0 duration-300" : "-right-full duration-300"}
              `}
            >
              {/* layer closing */}
              <div
                className="backdrop-blur-lg bg-border w-full min-h-full"
                onClick={() => setMenu(!menu)}
              ></div>
              <div className="bg-background ms-auto border-gray-600 border-l-4 w-sm h-screen">
                {/* navlink */}
                <div className="flex flex-col gap-2 p-6">
                  {navLink.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="px-4 py-1 w-fit font-normal text-[14px] md:text-[16px] leading-[22px] lg:leading-[24px] hover:tracking-[2px] transition-all"
                      onClick={() => setMenu(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* auth/login */}
                <div className="flex flex-col gap-2 p-6 border-t border-border">
                  <Link
                    href=""
                    onClick={() => setMenu(false)}
                    className="p-[8px_12px_10px_12px] px-4 py-2 w-fit font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setMenu(false)}
                    className="p-[8px_12px_10px_12px] px-4 py-2 w-fit font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
