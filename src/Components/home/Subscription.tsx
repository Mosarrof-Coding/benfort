"use client";
import React, { useState } from "react";
import FadeIn from "../animation/FadIn";

export const Subscription = () => {
  const [benForm, setBenForm] = useState({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with email:", benForm.email);
    setBenForm({ email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBenForm({ ...benForm, email: e.target.value });
  };

  return (
    <FadeIn>
      <div className="mx-auto px-4 max-w-[1120px]">
        <div className="gap-8 lg:gap-14 grid grid-cols-1 md:grid-cols-2 bg-card mb-14 sm:p-[38px_28px_50px_28px] lg:p-[88px_88px_90px_88px] px-3 py-8 rounded-[16px]">
          <div>
            <h3 className="mb-1 sm:mb-2 lg:mb-3 font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[30px] sm:leading-[38px] lg:leading-[39px] lg:tracking-[-1.5px] tracking-tight">
              There is always something new! Don’t miss out.
            </h3>
            <h6 className="font-normal text-[14px] leading-[21px]">
              Get property updates and the latest on pricing for your next
              property decision.
            </h6>
          </div>
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              name="subscription"
              value={benForm.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="bg-transparent p-[8px_0px_8px_6px] md:p-[12px_0px_12px_8px] lg:p-[16px_0px_16px_12px] border border-border rounded-[4px] w-full text-[14px] leading-[16px]"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="bg-foreground hover:opacity-80 px-2.5 md:px-3.5 lg:px-4.5 py-2 md:py-3 lg:py-4 rounded-[4px] w-fit font-semibold text-[14px] text-background leading-[16px] transition-all cursor-pointer"
            />
          </form>
        </div>
      </div>
    </FadeIn>
  );
};
