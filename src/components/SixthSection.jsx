// eslint-disable-next-line no-unused-vars
import React from "react";
import bg from "../assets/imgs/sixth-section-bg.svg";

function SixthSection() {
  return (
    <div className="h-screen flex flex-col items-center justify-center my-16 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.2,
        }}
      ></div>
      <div className="relative z-30 flex flex-col items-center">
        <p className="text-white font-benton font-normal text-5xl leading-[123%]">
          Live Above the Ordinary, <br /> Embrace the Extraordinary
        </p>
        <button className="bg-[#BF9B30] px-6 py-4 rounded-md mt-4">
          Schedule Your VIP Appointment
        </button>
      </div>
    </div>
  );
}

export default SixthSection;
