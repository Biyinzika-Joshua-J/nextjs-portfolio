"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import TextLoader from "./TextLoader";
import ImageOne from "../../public/assets/learn-cs-1.png";
import ImageTwo from "../../public/assets/learn-cs-free-2.png";
import ImageThree from "../../public/assets/movila-1.png";
import ImageFour from "../../public/assets/movilla-2.png";
import ImageFive from "../../public/assets/sorting-1.png";
import ImageSix from "../../public/assets/sorting-2.png";
import Image from "next/image";

const Projects = () => {
  const [isTriggerActive, setIsTriggerActive] = useState(false);
  const [isTriggerActive2, setIsTriggerActive2] = useState(false);
  const [isTriggerActive3, setIsTriggerActive3] = useState(false);
  console.log(isTriggerActive);
  return (
    <div className=" w-full  py-16 px-2">
      <div className="mx-auto w-[100%]">
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
                {isTriggerActive ? (
                  <div className="flex flex-col justify-between py-10">
                    <div className="">
                      <span className=" font-extrabold md:text-3xl text-2xl">
                        01
                      </span>
                    </div>
                    <div className="pl-10">
                      <h2 className="md:text-6xl font-bold">
                        Learn CS For Free
                      </h2>
                      <div className="flex flex-row items-center py-6">
                        <div className="mr-4">
                          <span className="text-2xl font-semibold">
                            React JS
                          </span>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-semibold">Redux</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="w-[100%] text-[20px]">
                          An aplication that gathers the best free videos from
                          the web especially youtube to create a structured
                          curriculum for people to learn computer science!
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
                  </div>
                ) : (
                  <TextLoader />
                )}
              </div>
            </div>

            <div className="ml-2 right w-[50%]  ">
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-[80%] ">
                  <Image
                    src={ImageOne}
                    className=" object-cover h-full w-full "
                    alt="project"
                  />
                </div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-[80%]">
                  <Image
                    src={ImageTwo}
                    className=" object-cover h-full w-full md:ml-32"
                    alt="project"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </Tween>

        <Tween
          to={{
            scrollTrigger: {
              trigger: ".project-section-2",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.9,
              markers: true,
              pin: ".left2",
              onToggle: ({ isActive }) => {
                setIsTriggerActive2(isActive); // Update the state
              },
            },
          }}
        >
          <div className="flex justify-between project-section-2">
            <div className="detailsWrapper left2 w-[40%] ">
              <div className="details h-[100vh] flex ">
                {isTriggerActive2 ? (
                  <div className="flex flex-col justify-between py-10">
                    <div className="">
                      <span className=" font-extrabold md:text-3xl text-2xl">
                        02
                      </span>
                    </div>
                    <div className="pl-10">
                      <h2 className="md:text-6xl font-bold">
                        Movilla
                      </h2>
                      <div className="flex flex-row items-center py-6">
                        <div className="mr-4">
                          <span className="text-2xl font-semibold">
                            React JS
                          </span>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-semibold">Redux</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-semibold">APIs</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="w-[100%] text-[20px]">
                          An aplication that gathers the best free videos from
                          the web especially youtube to create a structured
                          curriculum for people to learn computer science!
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
                  </div>
                ) : (
                  <TextLoader />
                )}
              </div>
            </div>

            <div className="ml-2 right w-[60%]  ">
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-[80%] ">
                  <Image
                    src={ImageThree}
                    className=" object-cover h-full w-full "
                    alt="project"
                  />
                </div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-[80%]">
                  <Image
                    src={ImageFour}
                    className=" object-cover h-full w-full md:ml-32"
                    alt="project"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </Tween>

        <Tween
          to={{
            scrollTrigger: {
              trigger: ".project-section-3",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.9,
              markers: true,
              pin: ".left3",
              onToggle: ({ isActive }) => {
                setIsTriggerActive3(isActive); // Update the state
              },
            },
          }}
        >
          <div className="flex justify-between project-section-3">
            <div className="detailsWrapper left3 w-[40%] ">
              <div className="details h-[100vh] flex ">
                {isTriggerActive3 ? (
                  <div className="flex flex-col justify-between py-10">
                    <div className="">
                      <span className=" font-extrabold md:text-3xl text-2xl">
                        03
                      </span>
                    </div>
                    <div className="pl-10">
                      <h2 className="md:text-6xl font-bold">
                        Sorting Visualizer
                      </h2>
                      <div className="flex flex-row items-center py-6">
                        <div className="mr-4">
                          <span className="text-2xl font-semibold">
                            React JS
                          </span>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-semibold">Redux</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-semibold">Algorithms</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="w-[100%] text-[20px]">
                          An aplication that gathers the best free videos from
                          the web especially youtube to create a structured
                          curriculum for people to learn computer science!
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
                  </div>
                ) : (
                  <TextLoader />
                )}
              </div>
            </div>

            <div className="ml-2 right w-[60%]  ">
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-[80%] ">
                  <Image
                    src={ImageFive}
                    className=" object-cover h-full w-full "
                    alt="project"
                  />
                </div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-80 w-[80%]">
                  <Image
                    src={ImageSix}
                    className=" object-cover h-full w-full md:ml-32"
                    alt="project"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </Tween>
      </div>
    </div>
  );
};

export default Projects;
