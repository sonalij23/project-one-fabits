import React, { useState } from "react";
import TradingExp from "./TradingExp";
import PanDetails from "./PanDetails";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import { useLoading } from "../../context/LoadingContext";


const gradientStyle = {
  background: "linear-gradient(180deg, #E6E66A 10%, #FFFFDB 90%)",
};

const Wizard = () => {
  
  const { setLoading } = useLoading();

  const [page, setPage] = useState(1);

  return (
    <div style={gradientStyle}>
      <div
        className={`px-3 pt-8 pb-20 transition-transform duration-300 ease-in-out `}
      >
        {page === 1 ? (
          <TradingExp pageNumber={page} />
        ) : (
          <PanDetails pageNumber={page} />
        )}

        {page === 2 ? (
          <div className="flex w-full gap-5 py-5">
            <button
              className="w-1/4 py-3 pl-5 text-2xl text-center border text-verdun-green border-citron bg-opacity-10 bg-citron rounded-xl"
              onClick={() => setPage(1)}
            >
              <MdKeyboardBackspace />
            </button>

            <button
              className="flex items-center justify-between w-full p-3 text-base text-white bg-citron rounded-xl"
              onClick={() => setLoading(true)}
            >
              <p className="text-white">Complete </p> <FaArrowRightLong />
            </button>
          </div>
        ) : (
          <button
            className="flex items-center justify-between w-full p-3 text-base text-white bg-citron rounded-xl"
            onClick={() => setPage(2)}
          >
            <p className="text-white">Next </p> <FaArrowRightLong />
          </button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
