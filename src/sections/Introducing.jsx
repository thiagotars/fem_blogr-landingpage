import editorMobile from "../assets/illustration-editor-mobile.svg";
import editorDesktop from "../assets/illustration-editor-desktop.svg";

const Introducing = () => {
  return (
    <section className="pt-[120px] pb-[80px] px-6 lg:px-0 lg:py-0 flex flex-col lg:flex-row relative min-h-[1020px] items-center font-overpass">
      <h2 className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 top-[100px] xl:top-[120px] 2xl:top-[150px] text-[26px] text-center lg:text-[37.5px] text-headings font-semibold">
        Designed for the future
      </h2>

      <div className="flex justify-end mt-8 lg:mt-0 items-center lg:absolute lg:-right-[10%] lg:w-[60%]">
        <img
          src={editorMobile}
          alt="editor-illustration"
          className="md:hidden flex"
        />
        <img
          src={editorDesktop}
          alt="editor-illustration"
          className="md:flex hidden"
        />
      </div>

      <div className="flex flex-col mt-8 lg:mt-0 lg:pl-[160px] 2xl:pl-[240px] lg:pr-14 w-[90%] lg:w-[50%] text-center lg:text-left">
        <div className="flex flex-col mt-6 lg:max-w-[600px] lg:mt-0">
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
        <div className="lg:mt-[64px] mt-[34px] xl:mt-[80px] lg:max-w-[600px]">
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
    </section>
  );
};

export default Introducing;
