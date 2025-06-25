import React, { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarButton from "./NavbarButton";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`max-w-[1300px] mx-auto w-full px-4  fixed left-[50%] -translate-x-[50%] flex gap-4 mt-2 z-20 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between w-full items-center max-w-[1200px] bg-black rounded-r-full rounded-l-full p-6 mx-auto border-[0.5px] border-orange ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block `}>
          <NavbarLinks />
        </div>
        <NavbarButton />
      </div>
      <div className="flex lg:hidden sm:block justify-center items-center rounded-full p-6 border-[0.5px] border-orange">
        <button
          className="text-2xl rounded-full p-3 text-white border border-orange"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
