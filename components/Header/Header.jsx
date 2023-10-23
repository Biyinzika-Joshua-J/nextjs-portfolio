import React from "react";
import Image from "next/image";
import Joshua from "../../public/assets/joshua.png";

const Header = () => {
  return (
    <header className="header">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <Image src={Joshua} className=" w-60 h-60  rounded-full " />
          </div>
          <div className="text-center">
            <h1 className="py-4 text-6xl font-mono">Joshua Biyinzika</h1>
            <h2 className="uppercase pt-2 text-3xl font-serif">
              frontend Developer
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
