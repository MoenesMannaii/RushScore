import React from "react";
import * as images from "./../assets/index";
import { TeamLogo } from "./interfaces";

const teamLogos: TeamLogo[] = [
  { src: images.RMA.src, alt: "Real Madrid Logo" },
  { src: images.FCB.src, alt: "Barcelona Logo" },
  { src: images.MANCITY.src, alt: "Manchester City Logo" },
  { src: images.LIVERPOOL.src, alt: "Liverpool Logo" },
];

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col mt-4 lg:flex-row lg:items-center">
      <div className="lg:w-1/2 flex-col items-center w-full hidden lg:flex">
        <div className="w-full lg:mx-auto lg:order-2">
          <h1 className="text-4xl font-normal tracking-wide text-white uppercase lg:text-4xl">
            Signup & Get Rewarded
          </h1>
          <h1 className="text-4xl font-bold tracking-wide text-white uppercase lg:text-4xl">
            up to <span>20,000 USD</span>
          </h1>
          <div className="mt-6">
            <button id="button1">Create Account</button>
          </div>
        </div>
      </div>

      <div className="lg:w-full h-64 lg:h-96">
        <img
          className="object-contain w-full h-full mx-auto lg:w-full"
          src="https://res.cloudinary.com/dww70arvk/image/upload/v1699215132/a6x9ohhrygqx9kh792fz.png"
          alt="Team"
        />
      </div>

      <div className="lg:w-1/2 flex flex-col items-center p-4 w-full order-2 lg:order-1 lg:hidden">
        <div className="max-w-lg lg:mx-auto">
          <h1 className="text-4xl font-normal tracking-wide text-white uppercase lg:text-4xl">
            Signup & Get Rewarded
          </h1>
          <h1 className="text-4xl font-bold tracking-wide text-white uppercase lg:text-4xl">
            up to <span>20,000 TND</span>
          </h1>
          <div className="mt-6">
            <button id="button1">Create Account</button>
          </div>
        </div>
      </div>

      <div className="lg:flex-col flex justify-center order-2 p-4 lg:p-0 gap-x-2 lg:space-y-3">
        {teamLogos.map((logo, index) => (
          <div
            key={index}
            className="p-2 bg-[#130C24] border-[#231b41] border-[1px] rounded-lg"
          >
            <img src={logo.src} className="w-24 h-auto" alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
