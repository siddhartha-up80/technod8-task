import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Joinwaitlist = () => {
  return (
    <section className="pt-5">
      <form className="space-y-10">
        <h1 className="text-6xl mx-auto w-max font-custom">Join Waitlist</h1>
        <div className="text-3xl font-custom text-gray-300 text-center max-w-xl mx-auto">
          Sign up to hear from us about our launch
        </div>
        <div className="max-w-md mx-auto rounded-full border-2 py-6 px-10">
          <Input
            className="bg-transparent border-none text-2xl"
            placeholder="Email"
          />
        </div>
        <div className="mx-auto max-w-sm px-10">
          <Button
            className="uppercase bg-transparent hover:bg-transparent hover:text-white w-full py-8 text-center text-xl font-light rounded-xl transition-all duration-300 transform hover:scale-110"
            variant={"ghost"}
            type="submit"
            style={{
              boxShadow: "0 4px 4px rgba(0,0,0,.25)",
              background:
                "linear-gradient(0deg, #6b3d88, hsla(0, 0%, 100%, 0))",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Joinwaitlist;
