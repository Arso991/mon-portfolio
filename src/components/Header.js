import React from "react";
import { Link } from "react-scroll";

//images
//import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#" className="text-[2rem] font-bold">
            G. ARSENE
            {/* <img src={Logo} alt="" /> */}
          </a>

          <Link to="contact" smooth={true} spy={true} className="btn btn-sm flex justify-center items-center cursor-pointer">Collaborer</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
