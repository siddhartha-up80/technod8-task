"use client";

import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  if (inView) {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  }

  return (
    <motion.div
      className="pt-10"
      style={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      ref={ref}
    >
      <div className="space-y-14">
        <h1 className="text-6xl font-custom mx-auto w-max">Our Partners</h1>

        <div className="pt-5 px-10 flex flex-col md:flex-row md:justify-between justify-center items-center md:items-stretch gap-4">
          <Image
            src={"/images/partners5.png"}
            height={200}
            width={200}
            alt="partners"
            className="transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-purple-500"
          />
          <Image
            src={"/images/partners4.png"}
            height={200}
            width={200}
            alt="partners"
            className="transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-purple-500"
          />
          <Image
            src={"/images/partners3.png"}
            height={200}
            width={200}
            alt="partners"
            className="transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-purple-500"
          />
          <Image
            src={"/images/partners2.jpg"}
            height={200}
            width={200}
            alt="partners"
            className="transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-purple-500"
          />
          <Image
            src={"/images/partners1.jpg"}
            height={200}
            width={200}
            alt="partners"
            className="transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
