import introDesktop from "../assets/bg-pattern-intro-desktop.svg";
import introMobile from "../assets/bg-pattern-intro-mobile.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden grid relative items-center text-center pb-[155px] rounded-bl-[100px] text-white bg-gradient-to-r from-gradientHeroLightRed to-gradientHeroRed ">
      {/* Background image */}
      <img
        className="hidden absolute left-[25%] scale-[2] md:flex"
        src={introDesktop}
        alt="intro-image-desktop"
      />
      <img
        className="absolute scale-[4] md:hidden"
        src={introMobile}
        alt="intro-image-mobile"
      />

      {/* Hero Content */}
      <div className="mt-[14.4rem] z-10 px-6">
        <h1 className="text-[34px] md:text-[48px] lg:text-[62px] font-[600] font-overpass tracking-[-1.6px] leading-[1.1] lg:leading-[1.35]">
          A modern publishing platform
        </h1>
        <h3 className="text-[16px] md:text-[18px] lg:text-[19.5px] mt-[10px] mb-[70px] sm:mb-[44px] font-ubuntu">
          Grow your audience and build your online brand
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-[138px] h-[48px] bg-white text-cta rounded-full font-[600] hover:bg-ctaHoverBackground hover:text-white transition duration-300 ease-in-out">
            Start for Free
          </button>
          <button className="w-[138px] h-[48px] border-[1px] border-white rounded-full font-[600] hover:bg-white hover:text-cta transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
