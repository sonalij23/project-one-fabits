import React from "react";
import fabits from "../assets/fabits.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";

const Home = () => {
  return (
    <div >
      <div className="flex justify-between p-4 border-b ">
        <img src={fabits} className="w-24 h-6 " alt="Flowbite React Logo" />

        <div className="flex items-center justify-between gap-4 md:hidden">
          <span>
            <IoMdNotificationsOutline className="w-6 h-6" />
          </span>
          <span>
            <RiAccountCircleLine className="w-6 h-6" />
          </span>
        </div>

        <ul className="hidden w-1/4 text-xl font-semibold md:flex md:justify-evenly">
          <li>Home</li>
          <li>Plans</li>
          <li>About</li>
        </ul>
      </div>

    </div>
  );
};

export default Home;
