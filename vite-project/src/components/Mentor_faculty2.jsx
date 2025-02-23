import wire from "../assets/wire.svg";


export const Mentor_faculty2 = () => {
  return (
    <>
      <div className="md:px-56 md:py-10 relative  mt-[460px] md:mt-0 z-[-1] h-[200px]">
        <img
          src={wire}
          alt=""
          className="absolute md:left-[250px] md:top-[-70px] top-[50px]"
        />
        <div className="h-32 flex justify-between px-10 relative ">
          <div className=" pl-14 md:pt-10 sm:pt-44 pt-48 ">
            <h1 className="md:text-xl text-2xl font-semibold">
              👉 Learn by doing
            </h1>
            <p className="md:px-7 px-10 md:text-sm text-gray-500">
              Interesting projects to help you standout to recruiters{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
