import React from "react";
import { personal } from "../../data/Data";

const NavbarLogo = () => {
  return (
    <div>
      <h1 className="text-white text-2xl sm:hidden lg:block">{personal?.name} </h1>
      <h1 className="text-white font-special text-4xl font-extrabold lg:hidden sm:block">
        SN
      </h1>
    </div>
  );
};

export default NavbarLogo;
