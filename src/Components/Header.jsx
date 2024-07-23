import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { BsCaretDown } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showsSideMenu = () => {
    setToggle(true);
  };

  const hideShowMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      name: "Search",
      icon: <CiSearch />,
    },
    {
      name: "Offers",
      icon: <CiDiscount1 />,
      sup: "New",
    },
    {
      name: "Help",
      icon: <IoHelpSharp />,
    },
    {
      name: "Sign-In",
      icon: <CiLogin />,
    },

    {
      name: "Cart",
      icon: <FaCartArrowDown />,
      sup: "2",
    },
  ];
  return (
    <>
      <div
        className="black-overlay h-full w-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideShowMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[400px] h-full bg-white absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl  top-0 sticky bg-white z-20">
        <div className="max-w-[1200px] mx-auto flex items-center gap-7">
          <div className="w-[50px] ">
            <img src={logo} className="w-full"></img>
          </div>
          <div className="">
            <span className="border-b-black border-b-2 font-bold">
              {" "}
              Ratanada
            </span>{" "}
            , Jodhpur Rajasthan India{" "}
            <RxCaretDown
              fontSize={20}
              className="inline font-bold text-[#fc8019] cursor-pointer"
              onClick={showsSideMenu}
            />
          </div>
          <nav className="flex gap-[39px] list-none text-[18px] font-semibold ml-auto">
            {links.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" hover:text-[red] flex items-center gap-1 cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                  <sup className="text-[orange]">{item.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
