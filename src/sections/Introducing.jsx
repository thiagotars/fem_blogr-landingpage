const Introducing = () => {
  return (
    <section className="pt-[120px] pb-[70px] px-6 lg:px-0 lg:py-0 flex flex-col lg:flex-row relative min-h-[1020px] items-center font-overpass">
      <h2 className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 top-[100px] xl:top-[120px] 2xl:top-[150px] text-[26px] text-center lg:text-[37.5px] text-headings font-semibold">
        Designed for the future
      </h2>

      <div className="flex justify-end mt-8 lg:mt-0 items-center lg:absolute lg:-right-[10%] lg:w-[60%]">
        <img
          src="src/assets/illustration-editor-mobile.svg"
          alt=""
          className="md:hidden flex"
        />
        <img
          src="src/assets/illustration-editor-desktop.svg"
          alt=""
          className="md:flex hidden"
        />
      </div>

      <div
        id="text-block"
        className="flex flex-col mt-8 lg:mt-0 lg:pl-[160px] w-[90%] lg:w-[50%] text-center lg:text-left"
      >
        <div id="block-1" className="flex flex-col">
          <h2 className="text-[24px] xl:text-[29.5px] text-headings font-semibold">
            Introducing an extensible editor
          </h2>
          <p className="mt-[16px] lg:mt-[26px] text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="lg:mt-[64px] mt-[34px] xl:mt-[80px]" id="block-2">
          <h2 className="text-[24px] xl:text-[29.5px] text-headings font-semibold">
            Robust content management
          </h2>
          <p className="mt-[16px] lg:mt-[26px] text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>

      {/* <h2 className="absolute left-1/2 transform -translate-x-1/2 top-[150px] text-[37.5px] text-headings font-semibold">
        Designed for the future
      </h2>
      <div id="text-block" className="flex flex-col pl-[160px] w-[50%]">
        <div id="block-1" className="flex flex-col">
          <h2 className="text-[29.5px] text-headings font-semibold">
            Introducing an extensible editor
          </h2>
          <p className="mt-[26px] text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="mt-[78px]" id="block-2">
          <h2 className="text-[29.5px] text-headings font-semibold">
            Robust content management
          </h2>
          <p className="mt-[26px] text-[15px] leading-[1.85] tracking-[1px] text-bodyCopy">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center absolute -right-[10%] w-[60%]">
        <img
          className=""
          src="src/assets/illustration-editor-desktop.svg"
          alt=""
        />
      </div> */}
    </section>
  );
};

export default Introducing;
