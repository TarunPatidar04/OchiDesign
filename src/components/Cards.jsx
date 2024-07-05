import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card w-full rounded-xl  h-full bg-[#004D43] flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card w-1/2 rounded-xl  h-full bg-[#212121] flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
        <div className="card w-1/2  rounded-xl h-full bg-[#212121] flex justify-center items-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
