"use client"

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  return (
    <section className="py-20 h-[100vh]">
      <div className="relative w-full py-10">
      <Tween
          from={
            {
              x:"1000px"
            }
          }
          to={{
            x: "100px",
            scrollTrigger: {
              trigger: ".skills-heading",
              start: "-500px left",
              end: "500px center",
              scrub: 0.9,
              markers: false,
            },
          }}
        >
            <h1 className="skills-heading uppercase -z-50 text-[10rem] absolute right-60 -translate-x-[50%] -translate-y-[50%] top-72  font-extrabold text-gray-100">
          SKILLS
        </h1>
        </Tween>
      
        <div className="flex justify-center items-center flex-col">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[70%] mx-auto">
            <div className="py-10">
              <h3 className="font-mono text-3xl z-50 py-4">
                <FontAwesomeIcon icon={faHtml5} />
                <span className="pl-2">HTML</span>
              </h3>
              <h3 className="font-mono text-3xl z-50 py-4">
                <FontAwesomeIcon icon={faCss3} />
                <span className="pl-2">CSS</span>
              </h3>
              <h3 className="font-mono text-3xl z-50 py-4">
                <FontAwesomeIcon icon={faJs} />
                <span className="pl-2">JavaScript</span>
              </h3>
            </div>
            <div className="py-10">
              <h3 className="font-mono text-3xl z-50 py-4">
                <FontAwesomeIcon icon={faReact} />
                <span className="pl-2">React JS</span>
              </h3>
              <h3 className="font-mono text-3xl z-50 py-4 flex items-center">
                <img
                  width={40}
                  height={40}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                />
                <span className="pl-2">Next JS</span>
              </h3>
              <h3 className="font-mono text-3xl z-50 py-4">
                <FontAwesomeIcon icon={faNode} />
                <span className="pl-2">Node JS</span>
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[70%] mx-auto">
            <div className="">
              <h3 className="font-mono text-3xl z-50 py-4 flex items-center">
                <div className="h-[40px] w-[40px]">
                  <svg viewBox="0 0 128 128">
                    <path fill="none" d="M0 0h128v128H0z"></path>
                    <path
                      d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                      fill="#000"
                    ></path>
                  </svg>
                </div>
                <span className="pl-2">Redux JS</span>
              </h3>
              <h3 className="font-mono text-3xl z-50 py-4 flex items-center">
                <div className="h-[40px] w-[40px]">
                  <svg viewBox="0 0 128 128">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                    <path
                      data-name="original"
                      fill="#000"
                      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                    ></path>
                  </svg>
                </div>
                <span className="pl-2">TypeScript</span>
              </h3>
            </div>
            <div className="">
              <h3 className="font-mono text-3xl z-50 py-4 flex items-center">
                <div className="h-[40px] w-[40px]">
                  <svg viewBox="0 0 128 128">
                    <linearGradient
                      id="python-original-a"
                      gradientUnits="userSpaceOnUse"
                      x1="70.252"
                      y1="1237.476"
                      x2="170.659"
                      y2="1151.089"
                      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                    >
                      <stop offset="0" stop-color="#000"></stop>
                      <stop offset="1" stop-color="#000"></stop>
                    </linearGradient>
                    <linearGradient
                      id="python-original-b"
                      gradientUnits="userSpaceOnUse"
                      x1="209.474"
                      y1="1098.811"
                      x2="173.62"
                      y2="1149.537"
                      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                    >
                      <stop offset="0" stop-color="#000"></stop>
                      <stop offset="1" stop-color="#000"></stop>
                    </linearGradient>
                    <path
                      fill="url(#python-original-a)"
                      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                      transform="translate(0 10.26)"
                    ></path>
                    <path
                      fill="url(#python-original-b)"
                      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                      transform="translate(0 10.26)"
                    ></path>
                    <radialGradient
                      id="python-original-c"
                      cx="1825.678"
                      cy="444.45"
                      r="26.743"
                      gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#000"
                        stop-opacity=".498"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#000"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <path
                      opacity=".444"
                      fill="url(#python-original-c)"
                      d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                    ></path>
                  </svg>
                </div>
                <span className="pl-2">Python</span>
              </h3>
              <h3 className="font-mono text-3xl z-50 py-4 flex items-center">
                <div className="h-[40px] w-[40px]">
                  <svg viewBox="0 0 128 128">
                    <path fill="#000" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path>
                    <path fill="#000" d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path>
                  </svg>
                </div>
                <span className="pl-2">Django</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
