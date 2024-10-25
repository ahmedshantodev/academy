"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { HoverEffect } from "../ui/card-hover-effect";
import { BackgroundGradient } from "../ui/background-gradient";
import seminer from "../../data/upcoming_seminer.json";
import Link from "next/link";

const UpcomingSeminers = () => {
  return (
    <div className="py-10 xl:py-20 px-4 md:px-0 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="text-center">
        <p className="text-[#29837d] font-bold text-sm lg:text-lg">
          UPCOMING SEMINERS
        </p>
        <h1 className="mt-2 md:mt-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 font-bold tracking-tight text-white">
          Learn With the Best
        </h1>
      </div>

      <div className="container mx-auto xl:mt-5">
        <HoverEffect items={seminer.seminers} />
      </div>

      <div className="text-center">
        <Link
          href={"/"}
          className="inline-block w-[180px] lg:w-[250px] xl-auto"
        >
          <BackgroundGradient>
            <button className="w-full bg-[#18181b] text-white py-2 xl:py-3 rounded-[20px] text-sm xl:text-lg">
              Explore More
            </button>
          </BackgroundGradient>
        </Link>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default UpcomingSeminers;
