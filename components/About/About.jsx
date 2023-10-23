"use client";
import React from "react";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section className="py-20 h-[100vh] about">
      <div className="relative w-full py-10">
        
        <Tween
          from={
            {
              x:"-500px"
            }
          }
          to={{
            x: "500px",
            scrollTrigger: {
              trigger: ".about-heading",
              start: "-500px left",
              end: "500px center",
              scrub: 0.9,
              markers: false,
            },
          }}
        >
          <h1 className="about-heading uppercase text-[10rem] absolute z-10 font-extrabold text-gray-100">
            About me
          </h1>
        </Tween>

        <h1 className="absolute z-50 text-3xl  font-light top-36 left-60">
          I build user interfaces that scale and convert!
        </h1>
      </div>
    </section>
  );
};

export default About;
