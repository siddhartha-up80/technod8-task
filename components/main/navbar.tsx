"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full p-2">
      <Image
        src={"/images/tecnod8latest.jpeg"}
        height={70}
        width={70}
        alt="logo"
      />
    </div>
  );
};

export default Navbar;
