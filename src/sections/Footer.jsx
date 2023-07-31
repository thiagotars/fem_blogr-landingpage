import { linksData } from "../data/data.js";
import logo from "../assets/logo.svg";

const Footer = () => {
  const links = linksData.map(({ id, title, link }) => (
    <div className="mb-20 text-[18.5px] md:text-[15px]" key={id}>
      <h6 className="font-bold mb-[34px] text-white">{title}</h6>
      <ul>
        {link.map((link, index) => (
          <li className="mb-[12px] cursor-pointer hover:underline" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <footer className="py-[70px] bg-footerBackground text-footerText rounded-tr-[100px]">
      <div className="w-[90%] max-w-[1100px] flex flex-col md:gap-8 md:flex-row text-center md:text-left md:justify-around md:grid-cols-4 mx-auto">
        <div className="flex mb-[72px] md:mb-0 md:items-start md:justify-start justify-center">
          <img src={logo} alt="logo" />
        </div>
        {links}
      </div>
    </footer>
  );
};

export default Footer;
