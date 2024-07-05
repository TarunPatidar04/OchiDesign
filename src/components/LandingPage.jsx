import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1  "
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] rounded-md w-[9vw] h-[5vw] bg-red-300"
                ></motion.div>
              )}
              <h1 className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For pubic and private companies", "From the first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}

        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 rounded-full border-[1px] border-zinc-400 font-light text-md uppercase">
            start the project
          </div>
          <div className="w-9 h-9 flex items-center justify-center  border-[1px] border-zinc-400 rounded-full">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
