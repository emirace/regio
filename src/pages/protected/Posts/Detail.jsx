import React from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import {
  IoArrowBackOutline,
  IoHeartSharp,
  IoLinkOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Carousel from "../../../components/posts/Carousel";
import { FaClock } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function Detail() {
  const navigate = useNavigate();
  return (
    <DrawerModal2 left={"md:left-[43rem] right-0 h-full"}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="fixed bottom-16 left-5 md:relative md:bottom-auto md:left-auto border flex items-center bg-white  gap-3 text-sm p-2 rounded-full"
          >
            <IoArrowBackOutline size={25} />
          </button>
          <div className="">
            <div className="font-bold text-lg">15 Mai 2024</div>
            <div className="text-gray-400 text-xs">12:32 • Montfort</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="fixed bottom-16 left-5 md:relative md:bottom-auto md:left-auto border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
            <GoHeart size={25} />
          </button>
          <button className="fixed bottom-16  left-5 md:relative md:bottom-auto md:left-auto border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
            <HiOutlineDotsVertical size={25} />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-full pb-60 ">
        <Carousel styleContent={"h-60"} />
        <div className="font-bold text-lg my-4">
          Heute gibt es Schlussverkauf
        </div>
        <div className="relative max-w-full overflow-hidden">
          <div className="relative z-10 p-4 mb-4">
            Alle sind herzlich eingeladen den heute gibt es einen besonderen
            Anlass, daher reduzier. Kommen Sie vorbei und entdecken Sie unsere
            Sonderangebote und reduzierten Preise für eiKommen Sie vorbei und
            entdecken Sie unsere Sonderangebote und reduzierten Preise für
            eiKommen Sie vorbei und entdecken Sie unsere Sonderangebote und
            reduzierten Preise für ei
          </div>
          <div className="absolute inset-0 bg-gradient-to-t z-10 from-white to-transparent pointer-events-none"></div>
        </div>
        <button className="border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
          <IoLinkOutline size={25} />
          sebastianweidel.de
        </button>
      </div>
      <div className="flex items-center py-2 px-4 border-y absolute bottom-16 md:bottom-0 bg-white w-full left-0 z-10">
        <img
          src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
          alt="Sebastian Weidel"
          className="w-16 h-16 rounded-lg mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold items-center flex gap-1">
              Sebastian Weidel{" "}
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            Lanwirte • Montfort • <span className="text-blue-500">Liefert</span>
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <div className="mr-2 flex items-center gap-1">
              <IoHeartSharp size={18} color={false ? "red" : "black"} />
              126
            </div>
            <div className="flex items-center gap-1">
              <IoLocationSharp size={18} color="black" />1 km
            </div>

            <span
              className={`text-sm flex items-center gap-1 ml-2 ${
                "Geöffnet" === "Geöffnet" ? "text-green-500" : "text-red-500"
              }`}
            >
              {"Geöffnet" === "Geöffnet" ? <FaClock /> : <IoMdCloseCircle />}
              {"Geöffnet"}
            </span>
          </div>
        </div>
      </div>
    </DrawerModal2>
  );
}

export default Detail;
