import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { PiWarningCircleBold } from "react-icons/pi";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-24 p w-screen aspect-video bg-gradient-to-r from-black absolute">
      <h1 className="text-5xl text-white font-bold">{title}</h1>
      <h2 className=" py-6 text-white w-2/4">{overview}</h2>
      <div className="flex ">
        <button className="bg-white rounded-md px-10 py-2 text-md flex items-center hover:bg-opacity-80  ">
          {" "}
          <FiPlayCircle className="mx-1" /> Play
        </button>
        <button className="bg-slate-400 mx-2 rounded-md px-10 py-2 text-md flex items-center ">
          <PiWarningCircleBold className="mx-1" />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
