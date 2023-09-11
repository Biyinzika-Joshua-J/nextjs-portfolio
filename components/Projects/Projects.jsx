"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import TextLoader from "./TextLoader";

const Projects = () => {
  const [isTriggerActive, setIsTriggerActive] = useState(false);
  console.log(isTriggerActive)
  return (
    <div className=" w-full  py-16 px-5">
      <div className="mx-auto w-[95%]">
        <Tween
          to={{
            scrollTrigger: {
              trigger: ".gallery",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.9,
              markers: true,
              pin: ".left",
              onToggle: ({ isActive }) => {
                setIsTriggerActive(isActive); // Update the state
              },
            },
          }}
        >
          <div className="flex justify-between gallery">
            <div className="detailsWrapper left w-[50%] ">
              <div className="details h-[100vh] flex ">
                {
                  isTriggerActive?(<div className="flex flex-col justify-between py-10">
                  <div className="">
                    <span className=" font-extrabold md:text-3xl text-2xl">
                      01
                    </span>
                  </div>
                  <div className="pl-10">
                    <h2 className="md:text-4xl font-bold">Learn CS For Free</h2>
                    <div className="flex flex-row items-center py-6">
                      <div className="mr-4">
                        <span className="text-2xl font-semibold">React JS</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-2xl font-semibold">Redux</span>
                      </div>
                    </div>
                    <div className="">
                      <p className="w-[70%] text-[20px]">
                        An aplication that gathers the best free videos from the
                        web especially youtube to create a structured curriculum
                        for people to learn computer science!
                      </p>
                    </div>
                    <div className="flex items-center py-4">
                      <div className="mr-4">
                        <Link
                          className=" underline underline-offset-2 font-light"
                          href={"https://github.com"}
                          target="__blank"
                        >
                          Souce Code
                        </Link>
                      </div>
                      <div className="ml-4">
                        <Link
                          className=" underline underline-offset-2 font-light"
                          href={"https://google.com"}
                          target="__blank"
                        >
                          Live
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <span className="font-bold md:text-3xl text-2xl">
                      WEB APP
                    </span>
                  </div>
                </div>):(
                  <TextLoader/>
                )
                }
              </div>
            </div>

            <div className="right  ">
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-80 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </Tween>
      </div>
    </div>
  );
};

export default Projects;
