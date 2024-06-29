// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import videoUrl from "../assets/imgs/hero-vid.mp4";
import heroImg from "../assets/imgs/hero-img.jpg";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: "image", src: heroImg },
    { type: "video", src: videoUrl },
  ];
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.classList.remove("fade");
      void slideRef.current.offsetWidth; // Trigger reflow
      slideRef.current.classList.add("fade");
    }
  }, [currentSlide]);

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
        <main className="w-3/5 flex-1">
          <div
            ref={slideRef}
            className="w-full fade transition-all duration-300 ease-in-out  
               xl:border-l-[35px] 2xl:border-l-[50px] xl:border-b-[35px] 2xl:border-b-[50px] 
               border-l-[#000000e2] border-b-[#000000e2]
                relative"
            style={{ height: "70vh" }}
          >
            {slides[currentSlide].type === "image" ? (
              <img
                src={slides[currentSlide].src}
                alt="Hero"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            ) : (
              <video
                className="w-full h-full object-cover absolute top-0 left-0"
                muted
                autoPlay
                loop
              >
                <source src={slides[currentSlide].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default HeroSection;
