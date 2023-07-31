const Services = () => {
  return (
    <section className="flex flex-col lg:flex-row relative py-[80px] lg:py-0 px-6 lg:px-0 lg:min-h-[1020px] items-center font-overpass">
      <div className="flex justify-center items-center lg:absolute -left-[9%] lg:w-[60%]">
        <img
          className="hidden md:flex"
          src="src/assets/illustration-laptop-desktop.svg"
          alt=""
        />
        <img
          className="flex md:hidden"
          src="src/assets/illustration-laptop-mobile.svg"
          alt=""
        />
      </div>
      <div
        id="text-block"
        className="flex flex-col items-center lg:absolute lg:left-[50%] mt-[36px] lg:mt-0 lg:mr-6 lg:pl-6 text-center lg:text-left w-[80%] lg:w-1/2"
      >
        <div id="block-1" className="flex flex-col">
          <h2 className="text-[24px] lg:text-[29.5px] text-headings font-semibold">
            Free, open, simple
          </h2>
          <p className="mt-[22px] max-w-[530px] text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="mt-[48px] lg:mt-[78px]" id="block-2">
          <h2 className="text-[24px] lg:text-[29.5px] text-headings font-semibold">
            Powerful tooling
          </h2>
          <p className="mt-[22px] max-w-[530px]  text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
