// eslint-disable-next-line no-unused-vars
import React from "react";
import vip from "../assets/imgs/vip.png";
import splendor from "../assets/imgs/splendor.png";
import discoverMain from "../assets/imgs/discover-main-img.png";
import bg from "../assets/imgs/airplane.png";

function DiscoverSection() {
  return (
    <div className="bg-[#0A0A0A] relative">
      <img
        src={vip}
        alt=""
        className="bg-item color absolute w-[45%] top-0 right-0"
      />
      <img src={splendor} alt="" className="bg-item absolute bottom-0 w-full" />
      <div className="relative md:px-8 lg:px-12 xl:px-16 2xl:px-48 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-20 pb-72 flex">
        <div className="flex flex-col">
          <p className="text-white md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-24 font-normal md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[40px] leading-normal slide-in-left">
            Discover a Limitless World of Splendor
          </p>
          <div className="flex border border-[#BF9B30] opacity-30 md:w-[60%] lg:w-[65%] xl:w-[70%] 2xl:w-[90%]">
            <img src={discoverMain} alt="" className="z-30 w-full" />
          </div>
        </div>
        <div className="border-y border-y-[#BF9B30] absolute z-50 md:top-[35%] md:left-[40%] lg:top-[38%] lg:left-[42%] xl:top-[40%] xl:left-[46%] 2xl:top-[40%] 2xl:left-[48%] bg-[#151D30] md:h-[40%] lg:h-[38%] xl:h-[35%] 2xl:h-[40%] md:py-10 lg:py-12 xl:py-14 2xl:py-20 md:px-6 lg:px-7 xl:px-8 2xl:px-20 w-[55%] md:w-[50%] lg:w-[48%] xl:w-[45%] slide-in-right">
          <img
            src={bg}
            alt=""
            className="absolute md:left-12 md:top-2 lg:left-16 lg:top-2 xl:left-20 xl:top-3 2xl:left-32 opacity-20 w-[60%]"
          />

          <div className="relative">
            <div className="absolute top-0 flex flex-col gap-4 md:gap-5 lg:gap-6 md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-base">
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
                our clients' preferences, <br /> our members can confidently
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
