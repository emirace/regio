import React from "react";
import DrawerModal2 from "../../components/Modals/DrawerModal2";
import { FiSearch } from "react-icons/fi";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import SearchInput from "../../components/SearchInput";
import { FaClock, FaFilter, FaTruck } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { IoHeartSharp, IoLocationSharp } from "react-icons/io5";

const items = [
  {
    name: "Sebastian Weidel",
    type: "Landwirte",
    location: "Montfort",
    likes: 126,
    liked: false,
    distance: "1 km",
    status: "Geöffnet",
    img: "https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I=",
    count: 7,
  },
  {
    name: "Uwe Becker",
    type: "Landwirte",
    location: "Montfort",
    likes: 241,
    liked: true,
    distance: "2 km",
    status: "Geöffnet",
    img: "https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?cs=srgb&dl=pexels-dodogr8-916406.jpg&fm=jpg",
    count: "NEU",
  },
  // Add more items here...
];

function SellersList() {
  return (
    <DrawerModal2 left={"md:left-[15rem] h-full"}>
      <div className="">
        {/* Search Bar */}
        <SearchInput />
        {/* Filter Buttons */}
        <div className="flex space-x-2 my-4">
          <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
            <FaClock />
            Geöffnet
          </button>
          <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
            <FaTruck />
            Liefert
          </button>
          <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
            <FaFilter />
            5/12
          </button>

          <button className="border flex items-center gap-3 text-sm px-2 rounded-full">
            <BsFillGridFill />
          </button>
        </div>

        {/* Item List */}
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-center py-2 border-b">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold items-center flex gap-1">
                    {item.name}{" "}
                    <div className="bg-red-500 text-white py-0.5 px-1.5 rounded-full text-xs">
                      {item.count}
                    </div>
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  {item.type} • {item.location}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="mr-2 flex items-center gap-1">
                    <IoHeartSharp
                      size={18}
                      color={item.liked ? "red" : "black"}
                    />
                    {item.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <IoLocationSharp size={18} color="black" />
                    {item.distance}
                  </div>

                  <span
                    className={`text-sm flex items-center gap-1 ml-2 ${
                      item.status === "Geöffnet"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status === "Geöffnet" ? (
                      <FaClock />
                    ) : (
                      <IoMdCloseCircle />
                    )}
                    {item.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DrawerModal2>
  );
}

export default SellersList;
