import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "./components/Button";

function App() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary flex flex-col gap-10 justify-center items-center h-screen">
      <div className="absolute top-5 left-10 text-4xl font-bold text-white">
        Regio
      </div>
      <FaLocationDot className="text-white animate-bounce text-6xl" />
      <Button
        onClick={() => navigate("/auth/register")}
        className="bg-white text-[#013d3d] "
      >
        Start now
      </Button>
    </div>
  );
}

export default App;
