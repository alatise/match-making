// eslint-disable-next-line no-unused-vars
import React from "react";
import videoUrl from "../assets/imgs/hero-vid.mp4";

function HeroSection() {
  return (
    <>
      <div className="flex my-16 px-10 md:px-12 lg:px-20  xl:px-16 2xl:px-20   justify-between items-center w-full">
        <main className="bg-[#1A1A1A] md:px-10 lg:px-12 xl:px-10 2xl:px-20  xl:py-12 2xl:py-16 flex flex-col gap-3 w-2/5 h-2/5">
          <p className="font-normal 2xl:text-4xl xl:text-3xl leading-[125%] tracking-[2.5px]">
            CRAFTING LOVE <br /> STORY IN A WORLD OF <br /> LUXURY
          </p>
          <p>Exclusive Matchmaking for the Discerning Few</p>
          <button className="bg-[#BF9B30] 2xl:w-3/5 xl:w-2/3 px-3 py-3 rounded-md mt-4">
            Schedule Your VIP Appointment
          </button>
        </main>
        <main className="w-3/5  flex-1 ">
          <div className="transition-opacity duration-300 ease-in-out fade h-full  xl:border-l-[35px]  2xl:border-l-[50px]  xl:border-b-[35px] 2xl:border-b-[50px] border-l-[#0a0d14e2] border-b-[#0a0d14e2]">
            <video
              width="100%"
              height="auto"
              controls
              muted
              autoPlay
              loop
              style={{ objectFit: "cover" }}
            >
              <source src={videoUrl} type="video/mp4" autoPlay />
              Your browser does not support the video tag.
            </video>
          </div>
        </main>
      </div>
    </>
  );
}

export default HeroSection;
