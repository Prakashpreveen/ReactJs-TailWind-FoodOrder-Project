import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HeadlineCards = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#card-text",
      { y: "-80px", opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, stagger: 0.5 }
    );

    gsap.fromTo("#card-btn", { opacity: 0 }, { opacity: 1, delay: 3.5 });
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card-1 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute pl-2 bg-black/50 w-full h-full rounded-xl text-white">
          <p id="card-text" className="font-bold text-2xl px-2 pt-4">
            Sun's Out, BOGO's Out
          </p>
          <p id="card-text" className="px-2">
            Through 8/26
          </p>
          <button
            id="card-btn"
            className="border-white bg-white text-black mx-2 absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>

      {/* Card-2 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute pl-2 bg-black/50 w-full h-full rounded-xl text-white">
          <p id="card-text" className="font-bold text-2xl px-2 pt-4">
            New Restaurants
          </p>
          <p id="card-text" className="px-2">
            Added Daily
          </p>
          <button
            id="card-btn"
            className="border-white bg-white text-black mx-2 absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>

      {/* Card-3 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute pl-2 bg-black/50 w-full h-full rounded-xl text-white">
          <p id="card-text" className="font-bold text-2xl px-2 pt-4">
            We Deliver Desserts Too
          </p>
          <p id="card-text" className="px-2">
            Tasty Treats
          </p>
          <button
            id="card-btn"
            className="border-white bg-white text-black mx-2 absolute bottom-4"
          >
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/14316549/pexels-photo-14316549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
