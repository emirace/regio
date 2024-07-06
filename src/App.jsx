import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <div className="bg-primary flex flex-col gap-10 justify-center items-center h-screen">
      <div className="absolute top-5 left-10 text-4xl font-bold text-white">
        Regio
      </div>
      <FaLocationDot className="text-white animate-bounce text-6xl" />
      <Link
        to={"/auth/register"}
        className="text-lg font-medium p-2 px-4 rounded-md bg-white text-[#013d3d] "
      >
        Start now
      </Link>
      <Link
        to={"/map"}
        className="text-lg font-medium p-2 px-4 rounded-md bg-white text-[#013d3d] "
      >
        Goto Map
      </Link>
    </div>
  );
}

export default App;
