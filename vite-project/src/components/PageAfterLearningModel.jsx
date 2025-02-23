import React from "react";


export const PageAfterLearningModel = () => {
  return (
    <>
      <div className=" bg-[#141414] relative z-[-1] flex flex-col item-center md:py-10 md:px-56 ">
        <div className="flex text-white items-center text-lg gap-5 md:mb-8 mt-6 ">
          <p className="ml-8">👉 Always available when you get stuck </p>
        </div>
        <div className="text-[#2D2D2D] w-full flex flex-col justify-center md:gap-10 gap-5 px-32 py-6 text-while-scroll">
          <p
            className="md:text-5xl sm:text-4xl text-xl font-bold text-orange-400"
          >
            Resolve doubts any time through chat, voice notes or calling.{" "}
          </p>
          <p
            className="md:text-5xl sm:text-4xl text-xl font-bold text-orange-400"
          >
            500+ dedicated Teaching Assistants to resolve your doubts quickly.
          </p>
          <p
            className="md:text-5xl sm:text-4xl text-xl  font-bold text-orange-400"
          >
            5/5 rating for 90% doubt resolutions.
          </p>
        </div>
      </div>
    </>
  );
};
