"use client"
import React from 'react'
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = () => {
  return (
    <div className=' w-full bg-red-500 py-16 px-5'>
      <div className="mx-auto w-[95%]">
        <div className="flex justify-between gallery">
       
          <div className="detailsWrapper left">
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
            <div className="details h-[100vh] flex items-center">
              <div className="">
                <div className="heading bg-green-500 h-6 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
                <div className="text bg-green-100 h-3 w-80 my-2"></div>
              </div>
            </div>
           
          </div>
       
          <div className="right flex items-center h-[100vh]">
            <Tween
           
            to={{
             
              scrollTrigger: {
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.9,
                markers: true,
                pin:'.right'
              },
            }}
          >
            
            <div className="image h-80 w-80 bg-blue-500"></div>
       
          </Tween>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects