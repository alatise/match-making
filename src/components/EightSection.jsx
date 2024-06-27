// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/imgs/medium-shot-people-high-five 1.png";

function EightSection() {
  return (
    <div className="border-y border-y-[#fff] my-20">
      <div className="px-20 flex justify-center my-14">
        <div className="bg-[#0A0A0A] flex border border-[#BF9B30] justify-between items-center gap-6 p-12">
          <main className="flex flex-col gap-3 w-1/2">
            <p className="font-normal xl:text-3xl 2xl:text-[40px] leading-[120%] font-benton-regular">
              Embrace Your Next Great <br /> Adventure in Love
            </p>
            <p className="text-sm">
              Choose a convenient time to discuss your luxury travel preferences
              with <br /> one of our expert matchmakers. We look forward to
              crafting your next <br /> unforgettable experience.
            </p>
            <button className="bg-[#BF9B30] px-4 py-4 rounded-md mt-4 w-1/2 ">
              Schedule Your VIP Appointment
            </button>
          </main>
          <main className="w-1/2">
            <img src={img} alt="" />
          </main>
        </div>
      </div>
    </div>
  );
}

export default EightSection;
