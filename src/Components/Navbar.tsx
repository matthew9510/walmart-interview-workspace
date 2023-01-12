import React, { useState, useEffect } from "react";
import WalmartLogo from "../Assets/Images/walmartLogo.svg";
import MiniWalmartLogo from "../Assets/Images/walmart-mini-logo.png";
import HomeIcon from "../Assets/Images/home-icon.png";
import { HiUserGroup, HiOutlineViewGrid } from "react-icons/hi";
import { GoSearch, GoLocation } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isLargeScreen = width >= 1608;
  const searchPlaceholder = isLargeScreen
    ? "Hello Pei and other potential interviewers, thank you for your time and consideration!"
    : "Thank you for your time and consideration!";

  return (
    <React.Fragment>
      <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center cursor-default">
        {/* Left */}
        <div className="flex items-center gap-x-3 shrink-0 grow sm:grow-0">
          <div className="visible xl:hidden p-2 cursor-pointer">
            <RxHamburgerMenu className="text-[26px]" />
          </div>
          <div className="hidden sm:flex xl:hidden p-2">
            <img
              src={MiniWalmartLogo}
              alt="Mini Walmart Icon"
              className="h-8"
            />
          </div>
          <div className=" w-[100%] flex justify-center sm:max-xl:hidden p-2 rounded-full cursor-pointer">
            <img
              src={WalmartLogo}
              alt="Larger Walmart Icon"
              className="h-12 align-center"
            />
          </div>
          <div className="hidden xl:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full cursor-pointer">
            <HiOutlineViewGrid className="text-[20px]" />
            <p className="text-[16px] font-semibold">Departments</p>
          </div>
          <div className="hidden xl:flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full cursor-pointer">
            <HiUserGroup className="text-[20px]" />
            <p className="text-[16px] font-semibold">Partners</p>
          </div>
        </div>
        {/* Middle */}
        <div className="hidden sm:flex relative items-center flex-1 mx-6 ">
          <input
            type="search"
            className="rounded-full py-1.5 outline-0 flex-1 text-black pl-10"
            placeholder={searchPlaceholder}
          />
          <div className="absolute bg-[#ffc220] p-1.5 rounded-full left-1.5 cursor-pointer">
            <GoSearch className="text-black" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center gap-x-2">
          <div className="hidden lg:flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full cursor-pointer">
            <MdLogin className="text-[17px] rotate-90" />
            <p className="text-[16px] font-semibold">Register</p>
          </div>
          <div className="hidden lg:flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap cursor-pointer">
            <MdLogout className="text-[20px] -rotate-90" />
            <p className="text-[16px] font-semibold">Sign in</p>
          </div>
          <div className="hover:bg-[#06529a] p-3 rounded-full cursor-pointer">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* Global Intent Center */}
      <div className="hidden sm:flex bg-[#0071dc] mt-[1px] text-white px-3 py-3 lg:px-8 justify-between cursor-default">
        <div className=" flex items-center gap-6">
          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <BsPhone />
            <p className="text-[15px] font-bold">Place an order on the App</p>
            <p className="text-[15px] ml-3">|</p>
          </div>
          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <GoLocation />
            <button className="text-[15px] hover:underline ml-1">San Diego, 92116</button>
          </div>
          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <img src={HomeIcon} alt="Warehouse Icon" className="invert w-5" />
            <button className="text-[15px] hover:underline ml-1">
              San Diego Supercenter
            </button>
          </div>
        </div>
        {/* Categories */}
        <div className="flex items-center gap-6">
          <button className="hidden lg:flex font-bold hover:underline">
            New Year reset
          </button>
          <button className="hidden xl:flex font-bold hover:underline">Clearance</button>
          <button className="hidden xl:flex font-bold hover:underline">
            Grocery & essentials
          </button>
          <button className="hidden lg:flex font-bold hover:underline">Tech</button>
          <button className="hidden lg:flex font-bold hover:underline">Walmart+</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
