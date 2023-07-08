import React from "react";
import LOGO from "../../assets/logowithoutback.png";


const Header = () => {
  return (
    <header className={`flex items-center h-screen justify-center bg-gradient-to-b from-black to-red-950`}>
      <div className="text-center w-3/4 items-start flex justify-between h-2/4">
        <div className="flex flex-col gap-4">
          <h5 className="text-gray-500 text-xl">Welcome to</h5>
          <h1 className="font-bold text-6xl animate-neon">Dungeons and Weather</h1>
          <h5 className="text-2xl text-white">Weather dnd</h5>
        </div>
        <div className="w-2/4 flex justify-center relative">
          <img
            className="rounded-[50%] w-logo h-logo absolute top-[-40px]"
            src={LOGO}
            alt="logo"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
