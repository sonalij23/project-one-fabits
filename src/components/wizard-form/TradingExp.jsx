import React, { useState } from "react";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";

const TradingExp = ({ pageNumber }) => {
  const [selectedExp, setSelectedExp] = useState("beginner");

  const handleSelectedExp = (exp) => {
    setSelectedExp(exp);
  };

  return (
    <div className="py-10">
      <div className="flex items-start py-4 justify-evenly">
        <h1 className="text-xl font-semibold font">
          How much trading experience do you have?
        </h1>
        <span className="px-2 py-[1px] text-center text-sm mt-2 text-white bg-black rounded-xl">
          {pageNumber}/2
        </span>
      </div>
      <div className="flex items-center justify-evenly text-verdun-green">
        {/* none selection */}
        <div
          className={`px-4 py-2 rounded-xl border-2 border-transparent  focus:outline-none ${
            selectedExp === "none"
              ? "border-verdun-green  bg-opacity-10 bg-citron"
              : ""
          }`}
          onClick={() => handleSelectedExp("none")}
        >
          <h5 className="text-base font-semibold">None</h5>
          <p className="flex items-center text-xs">
            <LiaLessThanSolid />
            <span> 1Y </span>
          </p>
        </div>

        {/* Beginner selection */}
        <div
          className={`px-4 py-2 rounded-xl border-2 border-transparent focus:outline-none ${
            selectedExp === "beginner"
              ? "border-verdun-green  bg-opacity-10 bg-citron"
              : ""
          }`}
          onClick={() => handleSelectedExp("beginner")}
        >
          <h3 className="text-base font-semibold">Beginner</h3>
          <p className="text-xs text-center "> 1Y-3Y</p>
        </div>

        {/* mid selection */}
        <div
          className={`px-4 py-2 rounded-xl border-2 border-transparent  focus:outline-none ${
            selectedExp === "mid"
              ? "border-verdun-green bg-opacity-10 bg-citron"
              : ""
          }`}
          onClick={() => handleSelectedExp("mid")}
        >
          <h3 className="text-base font-semibold">Mid</h3>
          <p className="text-xs "> 3Y-5Y</p>
        </div>

        {/* pro selection */}
        <div
          className={`px-4 py-2  rounded-xl border-2 border-transparent  focus:outline-none ${
            selectedExp === "pro"
              ? "border-verdun-green bg-opacity-10 bg-citron"
              : ""
          }`}
          onClick={() => handleSelectedExp("pro")}
        >
          <h3 className="text-base font-semibold">Pro</h3>
          <p className="flex items-center text-xs">
            <LiaGreaterThanSolid />
            <span>5Y</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradingExp;
