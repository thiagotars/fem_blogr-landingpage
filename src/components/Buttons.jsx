// import { useEffect } from "react";

const Buttons = () => {
  // <div className="flex flex-col items-center py-6 gap-3">
  //   <button className="w-[138px] h-[48px] hover:underline text-headings bg-white rounded-full ">
  //     Login
  //   </button>
  //   <button className="w-[138px] h-[48px] text-white bg-gradient-to-r from-gradientHeroLightRed to-gradientHeroRed rounded-full font-[500] drop-shadow-sm ">
  //     Sign Up
  //   </button>
  // </div>

  // <div>
  //   <button className="font-[500]">Login</button>
  //   <button className="w-[138px] h-[48px] bg-white text-cta rounded-full ml-6 font-[500]">
  //     Sign Up
  //   </button>
  // </div>

  return (
    <div className="flex flex-col items-center py-6 gap-2 lg:gap-0 lg:flex-row lg:items-start lg:py-0">
      <button className="w-[138px] h-[48px] text-headings rounded-full font-bold hover:underline lg:text-white">
        Login
      </button>
      <button className="w-[138px] h-[48px] text-white bg-gradient-to-r from-gradientHeroLightRed to-gradientHeroRed rounded-full font-[500] drop-shadow-sm lg:bg-none lg:bg-white lg:text-cta lg:ml-6 lg:hover:bg-ctaHoverBackground lg:hover:text-white transition duration-300 ease-in-out">
        Sign Up
      </button>
    </div>
  );
};

export default Buttons;
