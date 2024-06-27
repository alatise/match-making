// eslint-disable-next-line no-unused-vars
import React from "react";
import d1 from "../assets/imgs/d1.png";
import d2 from "../assets/imgs/d2.png";
import d3 from "../assets/imgs/d3.png";
import d4 from "../assets/imgs/d4.png";

const images = [
  {
    id: 1,
    img: d1,
    title: "Discover a Limitless World of Splendor",
    description:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 2,
    img: d2,
    title: "Discover a Limitless World of Splendor",
    description:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 3,
    img: d3,
    title: "Discover a Limitless World of Splendor",
    description:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 4,
    img: d4,
    title: "Discover a Limitless World of Splendor",
    description:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
];

function FifthSection() {
  return (
    <div className="flex flex-col gap-10 my-14 xl:px-16 2xl:px-40">
      <p className="font-normal text-3xl leading-normal">
        Discover a Limitless World of Splendor
      </p>
      <div className="flex gap-5">
        {images.map((pictures) => (
          <div
            key={pictures.id}
            className="relative group w-full h-full overflow-hidden"
          >
            <img
              src={pictures.img}
              alt=""
              className="cursor-pointer w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-25"
            />
            <div className="absolute bottom-0 w-full bg-[#151D30] text-white py-3 px-2 text-center transition-opacity duration-300 group-hover:opacity-0">
              {pictures.title}
            </div>
            <div className="absolute bottom-0 w-full text-white p-4  transition-transform duration-300 transform translate-y-full group-hover:translate-y-[20%] group-hover:bottom-[20%] space-y-10 ">
              <h3 className="text-xl mb-2">
                Discover a Limitless World <br /> of Splendor
              </h3>
              <hr className="w-[35%]" />
              <p className="text-sm mt-3">{pictures.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FifthSection;
