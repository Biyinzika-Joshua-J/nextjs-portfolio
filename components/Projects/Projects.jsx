"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import TextLoader from "./TextLoader";
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
              markers: false,
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
                        DevFlow
                      </h2>
                      <div className="flex flex-row items-center py-6">
                        <div className="mr-4">
                          <span className="text-2xl font-semibold">
                            Next JS
                          </span>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-semibold">MongoDB</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="w-[100%] text-[20px]">
                          A stack overflow clone built with Next JS 13.5 
                          utilizing Next JS server actions for the backend
                          and MongoDB for data storage.
                        </p>
                      </div>
                      <div className="flex items-center py-4">
                        <div className="mr-4">
                          <Link
                            className=" underline underline-offset-2 font-light"
                            href={"https://github.com/Biyinzika-Joshua-J/dev-overflow-nextjs"}
                            target="__blank"
                          >
                            Souce Code
                          </Link>
                        </div>
                        <div className="ml-4">
                          <Link
                            className=" underline underline-offset-2 font-light"
                            href={"https://devflow-nextjs.vercel.app/"}
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
                <div className="image h-[85%] w-[95%] ">
                  <Image
                    src={'/assets/devflow/laptop-dev-flow-1.png'}
                    width={700}
                    height={600}
                    className="mt-20  "
                    alt="project"
                  />
                </div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-[85%] w-[95%]">
                <Image
                    src={'/assets/devflow/mobile-dev-flow-1.png'}
                    width={300}
                    height={200}
                    className="-mt-28 mx-auto  "
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
              markers: false,
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
                        Movila
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
                          Movila, a movie application built with React JS
                          and Redux utilizing themoviedb.org API for both
                          authentication and fetching movie data.
                        </p>
                      </div>
                      <div className="flex items-center py-4">
                        <div className="mr-4">
                          <Link
                            className=" underline underline-offset-2 font-light"
                            href={"https://github.com/Biyinzika-Joshua-J/Movila"}
                            target="__blank"
                          >
                            Souce Code
                          </Link>
                        </div>
                        <div className="ml-4">
                          <Link
                            className=" underline underline-offset-2 font-light"
                            href={"https://movilla.netlify.app/"}
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
                <div className="image h-[85%] w-[95%] ">
                <Image
                    src={'/assets/movilla/movilla-laptop-1.png'}
                    width={700}
                    height={600}
                    className="mt-20  "
                    alt="project"
                  />
                </div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-[85%] w-[95%]">
                <Image
                    src={'/assets/movilla/movilla-mobile-1.png'}
                    width={300}
                    height={200}
                    className="-mt-20 mx-auto  "
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
              markers: false,
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
                          A sorting algorithms visualizer built with 
                          React JS and Redux. The application supports 
                          visualization of bubble sort, insertion sort, selection
                          sort and merge sort.
                        </p>
                      </div>
                      <div className="flex items-center py-4">
                        <div className="mr-4">
                          <Link
                            className=" underline underline-offset-2 font-light"
                            href={"https://github.com/Biyinzika-Joshua-J/sorting-algorithm-animations"}
                            target="__blank"
                          >
                            Souce Code
                          </Link>
                        </div>
                        <div className="ml-4">
                          <Link
                            className=" underline underline-offset-2 font-light"
                            href={"https://cs-sorting-algorithms-visualizer.netlify.app/"}
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
                <div className="image h-[85%] w-[95%] ">
                <Image
                    src={'/assets/sorting/sorting-laptop-1.png'}
                    width={700}
                    height={600}
                    className="mt-20  "
                    alt="project"
                  />
                </div>
              </div>
              <div className="h-[100vh] flex items-center">
                <div className="image h-[85%] w-[100%]">
                <Image
                    src={'/assets/sorting/sorting-mobile-1.png'}
                    width={300}
                    height={200}
                    className="-mt-20 mx-auto  "
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
