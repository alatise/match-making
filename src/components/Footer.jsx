// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/logo.svg";
import { BsDash } from "react-icons/bs";
import telegram from "../assets/imgs/socials/telegram.svg";
import instagram from "../assets/imgs/socials/ig.svg";
import facebook from "../assets/imgs/socials/facebook.svg";
import tiktok from "../assets/imgs/socials/tiktok.svg";
import youtube from "../assets/imgs/socials/youtube.svg";
import linkedin from "../assets/imgs/socials/linkedin.svg";

function Footer() {
  const year = new Date().getFullYear();

  const icons = [
    { id: 1, icon: telegram },
    { id: 2, icon: instagram },
    { id: 1, icon: facebook },
    { id: 1, icon: tiktok },
    { id: 1, icon: linkedin },
    { id: 1, icon: youtube },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex  justify-center">
        <footer className="bg-[#0A0A0A] border border-[#CDDBF9] flex gap-12 py-20 px-12 rounded-lg">
          <div className="flex flex-col items-start gap-6">
            <img src={logo} alt="" />
            <p className="font-normal text-[13px] leading-[140%] tracking-[0.26px] font-benton-regular">
              1999 Avenue of the Stars Suite <br /> 1100Century City, CA 90067
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#777] font-normal text-sm leading-[140%] tracking-[0.48px] uppercase font-benton-regular">
              Matchmaking services
            </p>
            <div className="flex flex-col gap-3 font-normal text-[13px] leading-[140%] tracking-[0.26px] font-benton-regular">
              <p>Matchmaking </p>
              <p>Matchmaking For Men </p>
              <p>Matchmaking For Women </p>
              <p>Membership For Men </p>
              <p>Membership For Women </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#777] font-normal text-sm leading-[140%] tracking-[0.48px] uppercase font-benton-regular">
              support & info
            </p>
            <div className="flex flex-col gap-3 font-normal text-[13px] leading-[140%] tracking-[0.26px] font-benton-regular">
              <p>Request consultation</p>
              <p>About Us</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#777] font-normal text-sm leading-[140%] tracking-[0.48px] uppercase font-benton-regular">
              contact us
            </p>
            <div className="flex flex-col gap-3 font-normal text-[13px] leading-[140%] tracking-[0.26px] font-benton-regular">
              <p>+1 (001) 981-76-17</p>
              <p>info@logoipsum.com</p>
            </div>
          </div>
        </footer>
      </div>
      <div className="flex justify-center">
        <footer className="flex justify-between items-center xl:w-[71%] 2xl:w-[52%] bg-[#1A1A1A] px-5 py-3 mt-5 rounded-md">
          <div className="flex">
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
          <div className="flex">
            <p className="flex items-center">
              ©{year}
              <BsDash />
              Copyright
            </p>
          </div>
          <div className="flex gap-2">
            {icons.map((value) => (
              <img key={value.id} src={value.icon} alt="" />
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
