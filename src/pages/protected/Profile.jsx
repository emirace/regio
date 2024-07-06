import React from "react";
import DrawerModal2 from "../../components/Modals/DrawerModal2";

const products = [
  {
    name: "Super Bio Markt",
    price: "18.92#",
    status: { color: "green", value: "Unterweegs" },
    stock: "4 Artikel",
    img: "https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg",
  },
  {
    name: "Dennis Pohl",
    price: "21.43#",
    status: { color: "blue", value: "In Bearbeitung" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrss02Xko_tqUyXzsStRpzX4zP_rVPpdXHQ&s",
    stock: "2 Artikel",
  },
  {
    name: "Philip Arecht",
    price: "12.82#",
    status: { color: "black", value: "Stomiert" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMhJwikKLv2zo8ZteeO6AOdEBHwkd5QI6Tw&s",
    stock: "3 Artikel",
  },
  {
    name: "Super Bio Markt",
    price: "18.92#",
    status: { color: "green", value: "Unterweegs" },
    stock: "4 Artikel",
    img: "https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg",
  },
  {
    name: "Bio Mar",
    price: "31.93#",
    status: { color: "green", value: "Abholbereit" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMhJwikKLv2zo8ZteeO6AOdEBHwkd5QI6Tw&s",
    stock: "11 Artikel",
  },
];

function Profile() {
  return (
    <DrawerModal2
      left={"md:left-[15rem] h-4/5 md:h-full"}
      isRounded={"rounded-tl-lg rounded-tr-lg md:rounded-tl-0 md:rounded-tr-0"}
    >
      <div className="flex items-center py-2 ">
        <img
          src={
            "https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
          }
          alt={"Tobias Senkel"}
          className="w-16 h-16 rounded-lg mr-4 "
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold items-center flex gap-1">
              Tobias Senkel
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            <span className="text-blue-500">Natuliebhaber</span> • Montfort
          </p>
          <div className="flex items-center text-sm text-red-500">Spender</div>
        </div>
      </div>
      <div className="flex items-center justify-around border-t border-b p-3 my-4">
        <div className="">
          <div className="text-lg font-medium">7</div>
          <div className="text-sm text-gray-400">mal besteli</div>
        </div>
        <div className="">
          <div className="text-lg font-medium">148..9#</div>
          <div className="text-sm text-gray-400">ausgegeben</div>
        </div>
        <div className="">
          <div className="text-lg font-medium">5.0#</div>
          <div className="text-sm text-gray-400">grespendel</div>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-350px)] scrollbar-hide">
        {products.map((item, index) => (
          <div key={index} className="flex items-center py-2 border-b">
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold items-center flex gap-1">
                  {item.name}{" "}
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                {item.stock} • {item.price} •{" "}
                <span style={{ color: item.status.color }}>
                  {item.status.value}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </DrawerModal2>
  );
}

export default Profile;
