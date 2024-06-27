// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";

function SeventhSection() {
  return (
    <div className="flex flex-col justify-center px-20 mt-10">
      <main className="flex justify-between   ">
        <p className="xl:text-2xl 2xl:text-3xl">
          Bespoke Experience Tailored to You
        </p>
        <p className="xl:text-sm 2xl:text-base">
          Experience the epitome of personalized luxury with our bespoke travel
          services. Whether it's a custom- <br />
          designed wellness retreat in the Swiss Alps or a culinary tour of
          Italy guided by Michelin-starred chefs, our <br /> team crafts
          experiences that reflect your unique tastes and desires. Every journey
          is a masterpiece, curated to <br /> exceed your highest expectations.
        </p>
      </main>
      <main className="flex gap-6 justify-center">
        <div className="flex flex-col bg-[#1A1A1A] gap-4">
          <div className="overflow-hidden ">
            <img src={img1} alt="" className="hover:scale-110 duration-500 " />
          </div>
          <p className="my-10 mx-8">
            <span className="font-normal text-[24px] leading-normal uppercase font-benton-regular">
              Rejuvenate in Tranquil Luxury <br />
            </span>
            Immerse yourself in a custom-designed wellness retreat in the serene
            Swiss <br /> Alps, where every detail is crafted to rejuvenate your
            mind, body, and spirit.
          </p>
        </div>
        <div className="flex flex-col bg-[#1A1A1A] gap-4">
          <div className="overflow-hidden ">
            <img
              src={img2}
              alt=""
              className="hover:scale-110  duration-500 w-[700px]"
            />
          </div>
          <p className="my-10 mx-8">
            <span className="font-normal text-[24px] leading-normal uppercase font-benton-regular">
              Savor Culinary Excellence <br />
            </span>
            Embark on an exclusive culinary tour of Italy, guided by
            Michelin-starred <br /> chefs, and discover the rich flavors and
            traditions of Italian cuisine.
          </p>
        </div>
      </main>
    </div>
  );
}

export default SeventhSection;
