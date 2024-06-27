// eslint-disable-next-line no-unused-vars
import React from "react";
import vip from "../assets/imgs/vip.png";
import splendor from "../assets/imgs/splendor.png";
import discoverMain from "../assets/imgs/discover-main-img.png";
import bg from "../assets/imgs/airplane.png";

function DiscoverSection() {
  return (
    <div className="bg-[#0A0A0A] relative  ">
      <img
        src={vip}
        alt=""
        className="bg-item color absolute w-[45%] top-0 right-0"
      />
      <img
        src={splendor}
        alt=""
        className="bg-item absolute bottom-0 w-[100%]  "
      />
      <div className="relative xl:px-16 2xl:px-48 xl:pt-14 2xl:pt-20 pb-72 flex">
        <div className="flex flex-col">
          <p className="text-white  xl:mb-14 2xl:mb-24 font-normal xl:text-4xl 2xl:text-[40px] leading-normal">
            Discover a Limitless World of Splendor
          </p>
          <div className="flex border border-[#BF9B30] opacity-30 xl:w-[70%] 2xl:w-[90%]">
            <img src={discoverMain} alt="" className="z-30 " />
          </div>
        </div>
        <div className="border-y border-y-[#BF9B30] absolute z-50 xl:top-[40%] xl:left-[46%] 2xl:top-[40%] 2xl:left-[48%] bg-[#151D30] xl:h-[35%] 2xl:h-[40%]  xl:py-14 2xl:py-20 xl:px-8 2xl:px-20 w-[45%]   ">
          <img
            src={bg}
            alt=""
            className="absolute xl:left-20 xl:top-3 2xl:left-32 opacity-20 w-[60%]"
          />

          <div className="relative">
            <div className="absolute top-0 flex flex-col gap-6 xl:text-[12px] 2xl:text-base">
              <p>
                From island hopping on a private jet in the South Pacific to
                dancing under the stars on a <br /> chartered yacht in the
                Mediterranean, our luxury travel membership transforms seemingly{" "}
                <br />
                impossible dreams into unrivaled reality.
              </p>{" "}
              <p>
                No destination is out of reach, and no request is impossible.
                Our team has longstanding <br /> relationships with the
                best-in-class hotels and world-renowned restaurants around the
                globe.
              </p>{" "}
              <p>
                With our expansive network of liaisons and profound knowledge of
                our clients’ preferences, <br /> our members can confidently
                relax and enjoy the journey, while we take care of every detail.
                A <br /> life without limits is yours!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
