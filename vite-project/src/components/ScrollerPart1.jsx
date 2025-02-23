import React from "react";
import { FaBookReader } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
import bg1 from "../assets/bg_testi.jpg";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


export const ScrollerPart1 = () => {


  return (
    <>
      <div
        className="text-white relative md:p-20 py-10 flex flex-col justify-center bg-cover items-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="flex justify-center items-center md:gap-16 gap-5 flex-col">

          <div
            className="flex flex-col items-center scroll-text gap-10 w-full"
          >
            <h1 className="text-4xl md:text-7xl font-bold"
            // 
            >
              9 years of</h1>
            <h1 className="text-4xl md:text-7xl font-bold"
            // 
            >
              Shaping</h1>
            <h1 className="text-4xl md:text-7xl font-bold"
            // 
            >
              Tech Careers</h1>
          </div>

          <div
            className="flex flex-col items-center scroll-text gap-10 w-full"

          >
            <div className="h-24 w-24 rounded-2xl bg-violet-800 flex justify-center items-center">
              <div className="text-6xl">
                <FaBookReader />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center">
              <h1 className="text-4xl md:text-7xl font-bold">
                1.5 Lac + Learners
              </h1>
              <p className="text-sm font-light md:text-lg text-gray-400">
                Cracked dream roles at top tech companies
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center scroll-text gap-10 w-full"

          >
            <div className="h-24 w-24 flex justify-center items-center rounded-2xl bg-green-400">
              <div className="text-6xl">
                <GiOfficeChair />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <h1 className="text-4xl md:text-7xl font-bold">
                1400 Alumni in MAANG
              </h1>
              <p className="text-sm font-light md:text-lg text-gray-400">
                & more in 103/111 Unicorns
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center scroll-text gap-10 w-full"
          >
            <div className="h-24 w-24 flex justify-center items-center rounded-2xl bg-pink-400">
              <div className="text-6xl">
                <RiMoneyRupeeCircleLine />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-7xl font-bold gap-4">
                1 Cr+ highest CTC
              </h1>
              <p className="text-sm font-light md:text-lg text-gray-400">
                After completing the course
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center scroll-text gap-10 w-full"
          >
            <div className="h-24 w-24 flex justify-center items-center rounded-2xl bg-blue-400">
              <div className="text-6xl">
                <BsGraphUpArrow />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <h1 className="text-4xl md:text-7xl font-bold">
                128% Average hike
              </h1>
              <p className="text-sm font-light md:text-lg text-gray-400">
                Via after placement call
              </p>
            </div>
          </div>

        </div>
        <div className="mt-20 w-56 p-4 bg-orange-500 hover:bg-orange-400 cursor-pointer rounded-xl  flex justify-center gap-1  items-center ">
          <p>Explore Offering</p>
          <div className="text-3xl ">
            <MdOutlineKeyboardArrowUp />
          </div>
        </div>
      </div>
    </>
  );
};
