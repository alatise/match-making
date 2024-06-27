// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import logo from "../assets/logo.svg";

function Navbar() {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "VIP Membership" },
    { id: 3, text: "Membership" },
    { id: 4, text: "Our Process" },
    { id: 5, text: "About Us" },
    { id: 6, text: "FAQ" },
    { id: 7, text: "Get in Touch" },
  ];

  return (
    <div className="bg-[#151D30] sticky-navbar py-6">
      <div className=" flex justify-between items-center md:px-12 lg:px-20  xl:px-28 2xl:px-36 mb-6">
        <div className="flex items-center gap-3">
          <p>Need more information? Get in touch</p>
          <FaArrowRight color="white" className="cursor-pointer" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <MdMailOutline size={25} />
          <p>info@logoipsum.com</p>
        </div>
      </div>
      <hr />
      <div className=" flex justify-center lg:justify-between xl:justify-between px-10  md:px-12 lg:px-20  xl:px-28 2xl:px-36 items-center mx-auto  mt-6">
        <img src={logo} alt="" className="" />
        <ul className="hidden md:flex gap-7 items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={` pb-1 cursor-pointer ${
                item.text === "VIP Membership"
                  ? "border-b-2 border-b-[#BF9B30]"
                  : "hover:border-b hover:border-b-[#BF9B30]"
              } ${
                item.text === "Get in Touch"
                  ? "bg-[#ffffff] text-black font-semibold px-6 py-2 rounded-3xl hover:border-b hover:border-b-[]"
                  : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
