import React from "react";
import web from "../assets/web.jpg"
import data from "../assets/data.jpg"


export const Courses = () => {
  return (
    <>
      <div className="relative z-[-1] bg-cover bg-center  flex justify-center  items-center px-10 py-5 md:p-10 md:gap-16 gap-10">
      
        <div>
            <h1 className=" text-7xl md:text-8xl font-bold mb-10 text-[#E3E3E3]">OUR OFFERINGS</h1>
            <div className="flex  absolute md:top-44  gap-5 *">
                <p className="text-lg font-semibold ">👉 Job Bootcamp</p>
                <div className=" bg-[#E6ECFC] px-5 font-semibold py-.5 rounded-r-full ">For graduates</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10 gap-5  mt-28 ">
              {/* box-1 */}
                <div className="relative p-5 md:p-16 rounded-lg bg-[#F5F7FE] h-44 md:h-60 ">
                  <div className="flex gap-5 items-center  ">
                      <div>
                        <img src={web} alt="" className="rounded-full h-16" />
                      </div>
                      <div className="text-lg font-semibold">
                      Full Stack Web Development
                      </div>
                  </div>
                  <div className="flex justify-between p-5 text-sm bg-[#FEFEFE]  w-full left-0 absolute bottom-2 rounded-lg shadow-md shadow-gray-400 ">
                    <div>140+ Hrs of Content</div>
                    <div>600 Problems</div>
                    <div>10K+ Learners</div>
                  </div>
                </div>
                {/* box-2 */}
                <div className="relative  p-5 md:p-16 rounded-lg  bg-[#F5F7FE] h-44 md:h-60  ">
                  <div className="flex gap-5 items-center  ">
                      <div>
                        <img src={data} alt="" className="rounded-full h-16" />
                      </div>
                      <div className="text-lg font-semibold">
                      Full Stack Web Development
                      </div>
                  </div>
                  <div className="flex justify-between p-5 text-sm  bg-[#FEFEFE] w-full left-0 absolute bottom-2 rounded-lg shadow-md shadow-gray-400 ">
                    <div>140+ Hrs of Content</div>
                    <div>600 Problems</div>
                    <div>10K+ Learners</div>
                  </div>
                </div>
            </div>
            <div className="text-lg font-semibold mt-20">
              👉 IIT Certifications
            </div>
        </div>
      </div>
    </>
  );
};
