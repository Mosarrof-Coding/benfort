"use client";

import { Menu, Moon, RotateCcw, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menu, setMenu] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 280);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = [
    {
      name: "Properties",
      href: "/properties",
    },
    {
      name: "Search",
      href: "/search",
    },
    {
      name: "Agent",
      href: "/agent",
    },
  ];

  // Prevent hydration mismatch (theme is undefined on first render)
  useEffect(() => setMounted(true), []);

  return (
    <header
      className={`z-50 bg-background/80 dark:bg-card backdrop-blur-lg  w-full transition-all transform duration-1000 ${
        isSticky
          ? "fixed left-0 top-0 w-full shadow-lg py-1 md:py-2 lg:py-3 xl:py-4 transition-all duration-500"
          : "py-2 md:py-4 lg:py-6 transition-all duration-500"
      }`}
    >
      <div className={`mx-auto px-4 max-w-[1232px] transition`}>
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
                className="font-normal text-[14px] md:text-[16px] hover:text-destructive leading-[22px] lg:leading-[24px] transition-all"
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
              href=""
              className="hover:opacity-80 border-foreground transition-all btn-dark"
            >
              Login
            </Link>
          </div>

          {/* mobile-menu */}
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
                className="active:opacity-50 cursor-pointer"
              />
            </div>
            {menu && (
              <div className="top-0 right-0 left-0 z-10 fixed bg-background w-full h-screen transition-colors">
                <div className="flex items-center bg-card py-2 sm:py-2 border-b border-border">
                  {/* logo */}
                  <Link
                    href="/"
                    className="lg:ml-24 px-4 w-1/2 font-medium sm:text-[28px] lg:text-[32px] text-2xl"
                    onClick={() => setMenu(false)}
                  >
                    <h4 className="font-medium sm:text-[28px] lg:text-[32px] text-2xl cursor-pointer">
                      benfort
                    </h4>
                  </Link>
                  <div className="flex justify-end items-center gap-4 pr-4 w-1/2 h-full">
                    {/* Theme toggle inside mobile menu */}
                    {mounted && (
                      <button
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
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
                    <button
                      onClick={() => setMenu(false)}
                      className="font-medium sm:text-[28px] lg:text-[32px] text-2xl cursor-pointer"
                    >
                      <RotateCcw className="active:-rotate-180 transition duration-500" />
                    </button>
                  </div>
                </div>
                {/* navlink */}
                <div className="flex flex-col gap-2 pb-8">
                  {["Properties", "Search", "Agent"].map((item, i) => (
                    <Link
                      key={i}
                      href="/"
                      onClick={() => setMenu(false)}
                      className="px-4 py-2 w-fit font-normal text-[14px] md:text-[16px] leading-[22px] lg:leading-[24px] hover:tracking-[2px] transition-all"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-8 border-t border-border">
                  <Link
                    href=""
                    onClick={() => setMenu(false)}
                    className="p-[8px_12px_10px_12px] px-4 py-2 w-fit font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href=""
                    onClick={() => setMenu(false)}
                    className="p-[8px_12px_10px_12px] px-4 py-2 w-fit font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
