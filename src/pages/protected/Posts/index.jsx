import React from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import { IoHeartSharp, IoLocationSharp } from "react-icons/io5";
import { FaClock, FaFilter } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "../../../components/posts/Carousel";
import SearchInput from "../../../components/SearchInput";
import { ImNewspaper } from "react-icons/im";
import { BsEye, BsStars } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const newsItems = [
  {
    title: "Heute gibt es Schlussverkauf",
    description:
      "Alle sind herzlich eingeladen den heute gibt es einen besonderen Anlass, daher reduzier...",
    img: "https://via.placeholder.com/150",
    author: "Sebastian Weidel",
    location: "Montfort",
    time: "vor 2 Stunden",
  },
  {
    title: "Besondere Gelegenheit!",
    description:
      "Kommen Sie vorbei und entdecken Sie unsere Sonderangebote und reduzierten Preise für ei...",
    img: "https://via.placeholder.com/150",
    author: "Phillip Arecht",
    location: "Montfort",
    time: "vor 5 Stunden",
  },
  {
    title: "Besondere Gelegenheit!",
    description:
      "Kommen Sie vorbei und entdecken Sie unsere Sonderangebote und reduzierten Preise für ei...",
    img: "https://via.placeholder.com/150",
    author: "Phillip Arecht",
    location: "Montfort",
    time: "vor 5 Stunden",
  },
  // Add more news items as needed
];

function Posts() {
  const navigate = useNavigate();
  return (
    <>
      <Outlet />
      <DrawerModal2 left={"md:left-[15rem] h-full"}>
        <div className="bg-white">
          <Carousel />
          <div className="my-4">
            <SearchInput />
          </div>
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <button className="border bg-primary text-white flex items-center gap-3 text-sm p-2.5 rounded-full">
              <ImNewspaper />
              Neuigkeiten
            </button>
            <button className="border bg-white flex items-center gap-3 text-sm p-2.5 rounded-full">
              <BsStars />
              Spenderiste
            </button>
            <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaFilter />
              5/12
            </button>
            <button className="border bg-primary text-white flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaClock />
              Neue
            </button>
            <button className="border bg-white flex items-center gap-3 text-sm p-2.5 rounded-full">
              <BsEye />
              Meiste Ansichten
            </button>
            <button className="border bg-primary text-white flex items-center gap-3 text-sm p-2.5 rounded-full">
              <MdMyLocation />
              In der Nahe
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-350px)]  scrollbar-hide">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b py-4 cursor-pointer"
                onClick={() => navigate("sample")}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <p className="text-xs">
                      {item.author} • {item.location} • {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerModal2>
    </>
  );
}

export default Posts;
