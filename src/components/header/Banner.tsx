import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div
        id="banner"
        tabIndex={-1}
        className="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center lg:py-4"
      >
        <div className="text-xl ps-32">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          magnam velit accusantium quis quasi numquam optio minus odio
          reprehenderit reiciendis quos labore amet, atque pariatur eligendi,
          corrupti fugit consequatur. Iure.
        </div>
        {/* <p className="text-sm font-light text-gray-500 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          harum repellat iure ipsam aspernatur inventore delectus odit
          doloremque dicta autem, necessitatibus commodi pariatur, libero,
          voluptatibus quam vero? Doloribus, earum inventore?
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
