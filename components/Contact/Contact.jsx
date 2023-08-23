import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  return (
    <section className="py-20 h-[100vh]">
      <div className="relative w-full py-10">
        <h1 className="uppercase text-[10rem] absolute right-60 z-10 font-extrabold text-gray-100">
          CONTACT 
        </h1>
        <div className="flex justify-center items-center relative">
          <div className="z-50 mx-4  mt-36">
            <FontAwesomeIcon size="2xl" style={{fontSize:'5rem', zIndex:50}} icon={faLinkedin}/>
          </div>
          <div className="z-50 mx-4  mt-36">
            <FontAwesomeIcon size="2xl" style={{fontSize:'5rem', zIndex:50}} icon={faWhatsapp}/>
          </div>
          <div className="z-50 mx-4  mt-36">
            <FontAwesomeIcon size="2xl" style={{fontSize:'5rem', zIndex:50}} icon={faGithub}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
