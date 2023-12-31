import laptopDesktop from "../assets/illustration-laptop-desktop.svg";
import laptopMobile from "../assets/illustration-laptop-mobile.svg";

const Services = () => {
  return (
    <section className="flex flex-col lg:flex-row relative py-[80px] lg:py-0 px-6 lg:px-0 lg:min-h-[1020px] items-center font-overpass">
      <div className="flex justify-center items-center lg:absolute -left-[9%] lg:w-[60%]">
        <img
          className="hidden md:flex"
          src={laptopDesktop}
          alt="laptop-illustration"
        />
        <img
          className="flex md:hidden"
          src={laptopMobile}
          alt="laptop-illustration"
        />
      </div>
      <div className="flex flex-col max-w-[600px] items-center lg:items-start lg:absolute lg:left-[50%] mt-[36px] lg:mt-0 lg:mr-6 lg:pl-10 text-center lg:text-left w-[80%] lg:w-1/2">
        <div className="flex flex-col mt-6 lg:mt-0">
          <h2 className="text-[24px] lg:text-[29.5px] text-headings font-semibold">
            Free, open, simple
          </h2>
          <p className="mt-[22px]  text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="mt-[48px] lg:mt-[78px]">
          <h2 className="text-[24px] lg:text-[29.5px] text-headings font-semibold">
            Powerful tooling
          </h2>
          <p className="mt-[22px] text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
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
