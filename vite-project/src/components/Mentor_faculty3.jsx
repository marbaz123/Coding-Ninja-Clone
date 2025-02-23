import { Faculty } from "../Api/Faculty.js";
import Slider from "react-slick";

export const Mentor_faculty3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: false,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        dots: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        dots: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="md:px-56  relative z-[-1] ">
        <div className="h-[500px] px-8 py-5 md:mt-44 mt-60 text-xl font-semibold">
          <p>👉 Faculty that brings out the best in you</p>
          <div className=" my-5 p-5 h-[400px]">
            <Slider {...settings}>
              {Faculty.map((currentElement, index) => (
                <div
                  key={index}
                  className="mb-20 h-[350px] md:px-4 px-1 py-2  "
                >
                  <div className="shadow-xl flex flex-col rounded-2xl py-4 ">
                    <img
                      src={currentElement.profilephoto}
                      alt=""
                      className="h-24 w-24 m-auto"
                    />
                    <div className=" h-10 w-68 px-4 mt-2 flex flex-col justify-center items-center">
                      <p className="text-sm text-center ">
                        {currentElement.name}
                      </p>
                      <p className="text-xs text-center text-gray-600 font-semibold ">
                        {currentElement.work}
                      </p>
                    </div>
                    <div className="flex flex-row justify-center items-center overflow-x-auto mt-4 mb-4">
                      {currentElement.companyImage.map((companyImg, idx) => (
                        <div
                          key={idx}
                          className="w-10 mx-1 flex justify-center"
                        >
                          <img src={companyImg} alt="" className="h-10 w-10" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[#88898A] text-center text-xs">
                      Teaches
                    </div>
                    <div className="mt-2 text-center text-xs text-[#222] font-semibold h-16 ">
                      {currentElement.Expertise}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
