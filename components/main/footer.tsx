import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-20">
      <div className="px-20 flex flex-row justify-between max-w-5xl mx-auto items-center">
        <div>
          <div className="flex gap-8 font-custom">
            <span>About us</span>
            <span className="border-l-2 pl-3">Overview</span>
            <span className="border-l-2 pl-3">Get Demo</span>
          </div>
          <div className="flex gap-8 mt-14 font-custom underline">
            <span>Privacy Policy</span>
            <span>2023 © Tecnod8.com</span>
          </div>
        </div>
        <div>
          <div>
            <span className="underline font-custom text-3xl">Contacts</span>
          </div>
          <div className="mt-10 space-y-5 text-lg">
            <div className="flex gap-5 items-center">
              <span>
                <Image
                  src={"/images/group-7.svg"}
                  alt="footer"
                  width={20}
                  height={20}
                />
              </span>
              <span>+91 7303807779</span>
            </div>
            <div className="flex gap-5 items-center">
              <span>
                <Image
                  src={"/images/group-82.svg"}
                  alt="footer"
                  width={20}
                  height={20}
                />
              </span>
              <span>founders@tecnod8.com</span>
            </div>
            <div className="flex gap-5 items-center">
              <span>
                <Image
                  src={"/images/group-5.svg"}
                  alt="footer"
                  width={20}
                  height={20}
                />
              </span>
              <span>Catalyst IIT Mandi, HP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
