import { useState, useEffect } from "react";
import { linksData } from "../data/data.js";
import Buttons from "./Buttons.jsx";
import logo from "../assets/logo.svg";
import arrowLight from "../assets/icon-arrow-light.svg";
import arrowDark from "../assets/icon-arrow-dark.svg";
import iconClose from "../assets/icon-close.svg";
import iconHamburger from "../assets/icon-hamburger.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleWindowWidth = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowWidth);
  }, []);

  const links = linksData.map(({ id, title, link }) => (
    <li
      key={id}
      className="w-full py-[6px] justify-center items-start lg:items-center lg:relative lg:flex lg:h-full lg:z-20"
    >
      <div
        className="cursor-pointer flex justify-center items-center gap-3 my-3"
        onClick={() => toggleDropdown(id)}
      >
        <p className="text-[16px] font-bold lg:hover:underline">{title}</p>
        <div className="min-w-[12px]">
          <img
            className={`hidden lg:flex transition-transform duration-200 ease-in-out ${
              activeDropdown === id ? "transform rotate-180" : ""
            }`}
            src={arrowLight}
            alt="arrow-light"
          />
          <img
            className={`flex lg:hidden transition-transform duration-200 ease-in-out ${
              activeDropdown === id ? "transform rotate-180" : ""
            }`}
            src={arrowDark}
            alt="arrow-dark"
          />
        </div>
      </div>

      {/* DROPDOWN */}
      {activeDropdown === id && (
        <div
          id={`${title}-dropdown`}
          className="flex justify-center py-[24px] bg-mobileDropdownBackground rounded-[6px] mt-[12px] lg:absolute top-[64px] 
          lg:bg-white lg:text-headings lg:min-w-[200px] lg:py-[16px] lg:drop-shadow"
        >
          <ul className="flex flex-col gap-2 w-full text-center lg:text-start lg:px-5">
            {link.map((link, index) => (
              <li
                key={index}
                className="py-1 font-regular cursor-pointer w-full"
              >
                <a className="font-light hover:font-bold">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ));

  return (
    <header className="flex justify-center z-30 w-screen h-[70px] px-[24px] text-white font-[500] font-ubuntu absolute top-[50px] ">
      <div className="flex relative justify-between items-center w-[90%] max-w-[1105px]">
        <a href="/">
          <img src={logo} alt="blogr logo" />
        </a>
        <button onClick={() => toggleMobileMenu()}>
          <img
            className="flex lg:hidden"
            src={isOpen ? iconClose : iconHamburger}
            alt="mobile menu"
          />
        </button>

        {isOpen ? (
          <nav
            id="mobile-nav"
            className="absolute flex flex-col lg:hidden w-full max-w-[324px] justify-between px-6 bg-white right-0 top-20 z-20 rounded-md drop-shadow-2xl "
          >
            <ul className="py-6 text-headings border-b border-mobileDropdownBackground">
              {links}
            </ul>
            <Buttons />
          </nav>
        ) : (
          <nav className="hidden lg:flex items-center w-full h-full justify-between ml-16 z-20">
            <ul className="flex items-center h-full gap-[30px]">{links}</ul>
            <Buttons />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
