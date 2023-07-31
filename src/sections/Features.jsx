const Features = () => {
  return (
    <section className="relative h-[625px] lg:h-[400px] xs:mt-[200px] mt-24 lg:mt-0">
      <div className="z-[-10] overflow-hidden w-screen h-full absolute bg-gradient-to-r from-gradientDarkFeatures to-gradientLightFeatures rounded-tr-[100px] rounded-bl-[100px]">
        <img
          className="absolute -top-[200px] md:-top-[512px] lg:-left-[215px]"
          src="./src/assets/bg-pattern-circles.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col lg:flex-row w-screen lg:px-[100px] 2xl:px-[123px] h-full">
        <div className="lg:w-[50%] h-[50%] lg:h-full relative">
          <img
            className="flex absolute left-1/2 transform -translate-x-1/2 -top-[50%] sm:-top-[70%] lg:-top-[25%] "
            src="./src/assets/illustration-phones.svg"
            alt=""
          />
        </div>
        <div className="px-6 md:px-10 lg:pl-4 lg:pr-0 w-full lg:max-w-[680px] font-overpass text-center lg:text-left text-white mt-0 sm:mt-10 md:mt-24 lg:mt-[116px] lg:w-[50%]">
          <h2 className="text-[24px] lg:text-[38px] font-[600]">
            State of the Art Infrastructure
          </h2>
          <p className="mt-[18px] leading-[1.63]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
