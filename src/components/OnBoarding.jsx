import React, { useEffect, useState } from "react";
import Wizard from "../components/wizard-form/Wizard";
import { useFocus } from "../context/FocusContext";
import CarAnimation from "./CarAnimation";
import { useLoading } from "../context/LoadingContext";
import LoadingPage from "./wizard-form/LoadingPage";
import UserDetails from "./UserDetails";
import { IoMdClose } from "react-icons/io";

const OnBoarding = () => {
  const { isInputFocused } = useFocus();
  const { isLoading, setLoading} = useLoading();
  const [modalState, setmodalState] = useState(true);
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setShowUserDetails(true);
        setLoading(false)

      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, setLoading]);


  const handleCloseModal = () => {
    setmodalState(false);
  };

  return (
    <div
      className={`transition-transform duration-300 ease-in-out ${
        isInputFocused ? "-translate-y-44 md:-translate-y-0" : ""
      }`}
    >
      <div className="mb-4 text-center ">
        {/* close button */}
        <button
          className={`p-2 text-center text-white rounded-full bg-fuscous-gray ${
            modalState === false ? "hidden" : ""
          }`}
          onClick={() => handleCloseModal()}
        >
          <IoMdClose />
        </button>
      </div>
      <div className={modalState === false ? "hidden" : ""}>
        {isLoading ? (
          <LoadingPage />
        ) : showUserDetails ? (
          <UserDetails />
        ) : (
          <div className=" md:mx-10 md:justify-center md:mb-10 md:flex"
          >
            <CarAnimation />
            <Wizard />
          </div>
        )}
      </div>
    </div>
  );
};


// 
export default OnBoarding;
