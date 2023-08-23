import React from "react";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section className="py-20 h-[100vh]">
      <div className="relative w-full py-10">
        <h1 className="uppercase text-[10rem] absolute right-60 z-10 font-extrabold text-gray-100">
          About me
        </h1>
        <h1 className="absolute z-50 text-3xl  font-light top-36 left-60">
          I build user interfaces that and make businesses money!
        </h1>
      </div>
    </section>
  );
};

export default About;
