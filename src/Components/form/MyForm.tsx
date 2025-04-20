// components/MyForm.tsx
"use client";

import { Input } from "../ui/input";

import { useState } from "react";
import { Button } from "@/Components/ui/button";

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mss, setMss] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, mss });
    setName("");
    setEmail("");
    setMss("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background mx-auto p-4 md:p-8 lg:p-14 max-w-[903px] text-foreground"
    >
      <h5 className="mb-0.5 font-normal text-[16px] sm:text-[18px]">
        Contact us today if you’d like to know more about how we help buy, sell
        or rent your home
      </h5>
      <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 mt-6 lg:mt-8">
        <div className="flex flex-col gap-4 lg:gap-6">
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="dark:bg-transparent px-2 lg:px-3 py-2 lg:py-4 border border-border rounded-[4px] focus-visible:ring-[1px] font-normal text-[14px] text-input placeholder:text-[#999999] leading-[16px]"
          />

          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="dark:bg-transparent px-2 lg:px-3 py-2 lg:py-4 border border-border rounded-[4px] focus-visible:ring-[1px] font-normal text-[14px] text-input placeholder:text-[#999999] leading-[16px]"
          />
        </div>
        <textarea
          name="textarea"
          value={mss}
          id=""
          onChange={(e) => setMss(e.target.value)}
          placeholder="Hello Homfort"
          className="dark:bg-transparent p-2 border focus:border-border rounded-[4px] focus:outline-none focus-visible:ring-[1px] text-[14px] text-input placeholder:text-[#999999]"
        ></textarea>
      </div>
      <Button
        type="submit"
        className="mt-4 lg:mt-6 rounded-[4px] w-full text-center cursor-pointer"
      >
        Submit
      </Button>
    </form>
  );
}
