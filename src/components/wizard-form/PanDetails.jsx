import React, { useState } from "react";
import { useFocus } from "../../context/FocusContext";

const PanDetails = ({ pageNumber }) => {
  const { handleInputFocusChange } = useFocus();

  const [panMode, setPanMode] = useState("automatic");

  const handleInputFocus = () => {
    handleInputFocusChange(true);
  };

  const handleInputBlur = () => {
    handleInputFocusChange(false);
  };

  const handlePanMode = (exp) => {
    setPanMode(exp);
  };
  return (
    <div >
      <div className="flex items-start py-4 justify-evenly z-[100] ">
        <h1 className="text-xl font-semibold font">
          How much trading experience do you have?
        </h1>
        <span className="px-2 py-[1px] text-center text-sm mt-2 text-white bg-black rounded-xl">
          {pageNumber}/2
        </span>
      </div>
      <form>
        <p className="text-sm text-gray-600">Verification method</p>
        <div className="flex w-full gap-4 py-2 text-verdun-green">
          <div
            className={`px-12 py-2 rounded-xl w-1/2 border-2 border-transparent focus:outline-none ${
              panMode === "manual" ? "border-verdun-green  bg-opacity-10 bg-citron": "" }`}
              
              onClick={() => handlePanMode("manual")} >
           
           
         
            <h5 className="text-base font-semibold">Manual</h5>
          </div>
          <div
            className={`px-12 py-2 rounded-xl  w-1/2  border-2 border-transparent focus:outline-none ${
              panMode === "automatic"
                ? "border-verdun-green  bg-opacity-10 bg-citron"
                : ""
            }`}
            onClick={() => handlePanMode("automatic")}
          >
            <h5 className="text-base font-semibold">Automatic</h5>
          </div>
        </div>
        <div className="flex items-center w-full gap-4 py-2">
          <p className="w-1/2 text-sm text-gray-600">PAN Card Number</p>
          <input
            type="text"
            placeholder="DKWPAXXXM "
            className="w-1/2 p-2 text-base font-semibold uppercase border rounded-lg outline-none placeholder-verdun-green border-citron bg-opacity-10 bg-citron text-verdun-green"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </form>
    </div>
  );
};

export default PanDetails;
