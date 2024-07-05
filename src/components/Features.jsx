import React from "react";

const Features = () => {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer relative card w-1/2 h-[75vh] rounded-xl ">
            <h1 className="absolute text-[#CDEA68]  -translate-x-1/2 top-1/2 -translate-y-1/2  text-6xl left-full tracking-tighter font-['Founders_Grotesk_X-Condensed']">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className=" relative cardContainer card w-1/2 h-[75vh] rounded-xl ">
            <h1 className="absolute text-[#CDEA68]  translate-x-1/2 top-1/2 -translate-y-1/2  text-6xl right-full tracking-tighter font-['Founders_Grotesk_X-Condensed']">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
