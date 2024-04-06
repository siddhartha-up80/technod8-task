import React from "react";
import { Card, CardContent } from "../ui/card";

const Introcards = () => {
  return (
    <section className="">
      <div className="flex gap-12 px-10 w-full md:flex-row flex-col mx-auto w-full">
        <Card
          className="py-10 px-5 md:max-w-[33%] pt-20 bg-transparent text-white rounded-3xl transition-all duration-300 transform hover:scale-110"
          style={{
            boxShadow: "0 4px 10px 5px rgba(178,131,255,.5)",
          }}
        >
          <CardContent className="flex-col flex gap-10">
            <span className="text-5xl font-bold text-center">Co-Pilot</span>
            <span className="text-2xl font-bold text-center">
              Generative AI for unlimited Deep knowledge
            </span>
          </CardContent>
        </Card>{" "}
        <Card
          className="py-14 px-2 md:max-w-[33%] pt-20 bg-transparent text-white rounded-3xl transition-all duration-300 transform hover:scale-110"
          style={{
            boxShadow: "0 4px 10px 5px rgba(178,131,255,.5)",
          }}
        >
          <CardContent className="flex-col flex gap-10">
            <span className="text-5xl font-bold text-center w-max">
              Digital Twins
            </span>
            <span className="text-2xl font-bold text-center">
              More than Real life exposure on your finger tips
            </span>
          </CardContent>
        </Card>{" "}
        <Card
          className="py-10 px-5 md:max-w-[33%] pt-20 bg-transparent text-white rounded-3xl transition-all duration-300 transform hover:scale-110"
          style={{
            boxShadow: "0 4px 10px 5px rgba(178,131,255,.5)",
          }}
        >
          <CardContent className="flex-col flex gap-10">
            <span className="text-5xl font-bold text-center">Web-App</span>
            <span className="text-2xl font-bold text-center">
              Acess to Deep-Tech/Hard-Tech anytime, anywhere
            </span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Introcards;
