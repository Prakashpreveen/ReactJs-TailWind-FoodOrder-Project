import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo("#header-text", { x: "-800px" }, { x: 0, opacity: 1 });
  }, []);

  return (
    <div className="max-w-[1640px] max-auto p-4 ">
      <div className="max-h-[500px] relative">
        {/* OverLay */}
        <div className="absolute w-full h-full bg-black/40 max-h-[500px] text-gray-200 flex flex-col text-2xl justify-center">
          <h1
            id="header-text"
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1
            id="header-text"
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Delivered <span className="text-orange-500">Foods</span>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
