"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";

const page = () => {
  return (
    <div className="h-screen md:h-auto 2xl:h-screen w-full bg-neutral-950 relative flex md:items-start lg:items-center justify-center antialiased">
      <form className="w-full sm:w-[450px] md:w-[600px] md:border-2 md:border-[#393c41] p-5 md:rounded-[16px] relative z-20 bg-black mt-12 sm:mt-16 md:mt-[120px] lg:mt-[140px] 2xl:mt-0 md:mb-5 2xl:mb-0">
        <div className="mb-2.5">
          <label
            htmlFor="name"
            className="block text-white text-sm lg:text-lg font-mono mb-1 md:mb-2.5"
          >
            Your name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="john doe..."
            className="w-full border-2 border-[#393c41] bg-black rounded-[10px] py-1 md:py-2.5 px-4 font-mono text-sm md:text-base placeholder:text-sm md:placeholder:text-base  placeholder:font-mono text-white"
          />
        </div>

        <div className="mb-2.5">
          <label
            htmlFor="email"
            className="block text-white text-sm lg:text-lg font-mono mb-1 md:mb-2.5"
          >
            Your email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            className="w-full border-2 border-[#393c41] bg-black rounded-[10px] py-1 md:py-2.5 px-4 font-mono text-sm md:text-base placeholder:text-sm md:placeholder:text-base  placeholder:font-mono text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-sm lg:text-lg font-mono mb-1 md:mb-2.5"
          >
            Your Message:
          </label>
          <textarea
            id="email"
            placeholder="express your message here"
            className="w-full h-[200px] resize-none border-2 border-[#393c41] bg-black rounded-[10px] py-1 md:py-2.5 px-4 font-mono text-sm md:text-base placeholder:text-sm md:placeholder:text-base  placeholder:font-mono text-white"
          />
        </div>

        <button className="bg-white w-full py-2 md:py-2.5 rounded-[10px] text-sm md:text-lg font-mono font-medium">
          submit
        </button>
      </form>

      <BackgroundBeams />
    </div>
  );
};

export default page;
