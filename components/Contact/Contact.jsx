"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";


const Contact = () => {
  return (
    <section className="py-20 h-[100vh]">
      <div className="relative w-full py-10">
      <Tween
          from={
            {
              x:"-500px"
            }
          }
          to={{
            x: "400px",
            scrollTrigger: {
              trigger: ".contact-heading",
              start: "-500px left",
              end: "500px center",
              scrub: 0.9,
              markers: true,
            },
          }}
        >
            <h1 className="contact-heading uppercase text-[10rem] absolute right-60 z-10 font-extrabold text-gray-100">
          CONTACT 
        </h1>
        </Tween>
     
        <div className="flex justify-center items-center relative">
          <div className="z-50 mx-4  mt-36">
          <Link href={'https://www.linkedin.com/in/biyinzika-joshua-j/'} target="__blank">
            <FontAwesomeIcon size="2xl" style={{fontSize:'5rem', zIndex:50}} icon={faLinkedin}/>
          </Link>
          </div>
          <div className="z-50 mx-4  mt-36">
          <Link href={'https://wa.me/256784180208'} target="__blank">
            <FontAwesomeIcon size="2xl" style={{fontSize:'5rem', zIndex:50}} icon={faWhatsapp}/>
          </Link>
          </div>
          <div className="z-50 mx-4  mt-36">
          <Link href={'https://github.com/Biyinzika-Joshua-J'} target="__blank">
            <FontAwesomeIcon size="2xl" style={{fontSize:'5rem', zIndex:50}} icon={faGithub}/>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
