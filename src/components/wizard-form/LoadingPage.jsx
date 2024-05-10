import React, { useEffect, useState } from "react";
import sceneryImg from "../../assets/scenery.svg";
import car from "../../assets/car.svg";

const LoadingPage = () => {
  const [translucent, setTranslucent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTranslucent(true);
    }, 8000);

    return () => clearTimeout(timeoutId);
  });

  const backgroundImgStyle = {
    backgroundImage: `url('${sceneryImg}')`,
    backgroundSize: "cover",
  
  };

  return (
    <div
      className="relative h-screen mx-auto overflow-hidden rounded-t-3xl md:w-1/2 "
      style={backgroundImgStyle}
    >
      <div className={`${translucent? 'glass':""}`}>
        <div className="absolute top-10 left-5 text-bay-of-many">
          <h1 className="text-2xl font-semibold">Fetching your PAN Details</h1>
          <p className="py-1 text-sm">
            Getting your PAN details by your chosen method
          </p>
        </div>
        <img
          className="absolute left-0 w-32 h-auto bottom-[13%] car-bounce"
          src={car}
          alt="car"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
