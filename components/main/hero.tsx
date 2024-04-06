//@ts-nocheck
"use client";

import React from "react";
import { Button } from "../ui/button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 lg:mt-0 h-56 sm:h-64 lg:h-80 xl:h-96">
          <video className="w-[45vw] pt-36" autoPlay muted loop preload="auto">
            <source src="/images/welding2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
          <h1 className="text-3xl font-bold font-custom sm:text-8xl text-center text-cyan-400">
            Tecnod8
          </h1>
          <span
            className="mt-14 mb-8 text-lg sm:mb-12 sm:text-5xl font-custom custom-line-height text-center text-cyan-400"
            style={{ lineHeight: "4rem" }}
          >
            Making Deep-Tech/ Hard-Tech Accessible to all
          </span>
          <div className="text-xl md:text-4xl font-custom text-center w-max text-violet-400">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("A Giant Leap into Industry 5.0")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
              options={{ autoStart: true, loop: true }}
            />
          </div>
          <div className="mx-auto mt-20">
            <Button
              variant={"ghost"}
              className="border-t-0 rounded-2xl rounded-t-none max-w-lg md:w-[516px] bg-transparent hover:bg-transparent hover:text-white text-3xl font-custom transition-all duration-300 transform hover:scale-110"
              style={{
                boxShadow: "0 4px 4px rgba(178,131,255,.8)",
              }}
            >
              Launching Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
