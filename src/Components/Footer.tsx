import React from "react";
import { AiOutlineLink, AiOutlineCopyrightCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="bg-[#004f9a] h-28 font-bold  flex flex-col items-center justify-center text-center text-white">
      <p className="text-[20px] pb-2">This Product was made by Matthew Hess using 🪄</p> 
      <p className="m-1">Inspired by <span className="underline"><a href="https://github.com/andreibarbu5/walmart">Andrei Barbu's Walmart Mocked Project</a></span> <AiOutlineLink className="inline"/>, and is by no means necessary affiliated with <AiOutlineCopyrightCircle className="inline"/> 2023 Walmart</p>
    </div>
  );
};

export default Footer;