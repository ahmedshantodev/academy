"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { WavyBackground } from "../ui/wavy-background";

export default function HeroSection() {
  const words = ["Web Developments", "App Developments", "UI/UX Design"];

  return (
    <WavyBackground>
      <div className="flex items-center justify-center text-center">
        <div>
          <h1
            className={cn(
              "flex flex-col lg:flex-row justify-center gap-x-0 md:gap-x-3 items-center relative z-20 mt-20 md:mt-24 text-2xl md:text-[33px] md:leading-[2.5rem] xl:text-6xl font-bold dark:text-white"
            )}
          >
            Master the art of <FlipWords words={words} />
          </h1>

          <p
            className={cn(
              "relative z-20 text-center mt-9 mb-12 font-normal text-base md:text-lg lg:text-2xl text-neutral-300 max-w-[90%] md:max-w-[70%] lg:max-w-4xl mx-auto"
            )}
          >
            Transform your coding career with our immersive web and app
            development courses. Whether you're starting from scratch or looking
            to master new technologies, our programs will help you reach new
            heights.
          </p>

          <Link
            href={"/"}
            className="inline-block w-[180px] lg:w-[250px] mx-auto"
          >
            <BackgroundGradient>
              <button className="w-full bg-[#18181b] text-white py-2 lg:py-3 rounded-[20px] text-sm lg:text-lg">
                Explore Courses
              </button>
            </BackgroundGradient>
          </Link>
        </div>
      </div>
    </WavyBackground>
  );
}
