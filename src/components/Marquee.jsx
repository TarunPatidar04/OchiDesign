import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-12 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text flex whitespace-nowrap border-t-2 border-b-2 border-zinc-300  overflow-hidden tracking-tighter">
        <h1 className="text-[18vw]  leading-none  uppercase -mb-1 pt-[0.5rem] font-light font-['Founders_Grotesk_X-Condensed']">
          We are ochi
        </h1>
        <h1 className="text-[18vw] leading-none  uppercase -mb-1 pt-[0.5rem] font-light font-['Founders_Grotesk_X-Condensed']">
          We are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
