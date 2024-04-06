import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="pt-10">
      <div className="space-y-14">
        <h1 className="text-6xl font-custom mx-auto w-max">Our Partners</h1>

        <div className="pt-5 px-10 flex flex-row justify-between">
          <Image
            src={"/images/partners5.png"}
            height={200}
            width={200}
            alt="partners"
            className=""
          />
          <Image
            src={"/images/partners4.png"}
            height={200}
            width={200}
            alt="partners"
            className=""
          />
          <Image
            src={"/images/partners3.png"}
            height={200}
            width={200}
            alt="partners"
            className=""
          />
          <Image
            src={"/images/partners2.jpg"}
            height={200}
            width={200}
            alt="partners"
            className=""
          />
          <Image
            src={"/images/partners1.jpg"}
            height={200}
            width={200}
            alt="partners"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
