import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-12 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text flex whitespace-nowrap border-t-2 border-b-2 border-zinc-300  overflow-hidden tracking-tighter">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[16vw]  leading-none  uppercase -mb-1 pt-[0.5rem] font-light font-['Founders_Grotesk_X-Condensed'] pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[16vw] leading-none  uppercase -mb-1 pt-[0.5rem] font-light font-['Founders_Grotesk_X-Condensed']  pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
