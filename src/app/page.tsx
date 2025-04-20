import React from "react";
import { Listing } from "@/Components/home/listing/Listing";
import { Hero } from "@/Components/home/Hero";
import { Perks } from "@/Components/home/Perks";
import { Explore } from "@/Components/home/Explore";
import { Featured } from "@/Components/home/Featured";
import { HomeFort } from "@/Components/home/HomeFort";
import { Agents } from "@/Components/home/Agents";
import { Subscription } from "@/Components/home/Subscription";
import { GetInTouch } from "@/Components/home/GetInTouch";

const Home = () => {
  return (
    <>
      <Hero />
      <Perks />
      <Explore />
      <Listing />
      <Featured />
      <HomeFort />
      <Agents />
      <Subscription />
      <GetInTouch />
    </>
  );
};
export default Home;
