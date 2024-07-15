import React from "react";
import { menu_list } from "../../assets/assets";
import { useState } from "react";

const ExploreMenu = ({category , setCategory}) => {

    const [activeCategory, setActiveCategory] = useState(category);

  const handleCategoryClick = (menuName) => {
    const newCategory = activeCategory === menuName ? "All" : menuName;
    setActiveCategory(newCategory);
    setCategory(newCategory);
  };

  return (
    <div className="flex flex-col gap-4" id="explore-menu">
      <h1 className="font-bold text-black text-xl mt-4 ml-8">Explore our menu</h1>
      <p className="ml-8">
        Dive into our diverse menu and indulge in the flavors that will make
        your meal unforgettable. Choose a dish that speaks to your taste buds.
      </p>
      <div className="flex justify-between items-center gap-5 text-center mx-6 ">
        {menu_list.map((item, id) => {
          const isActive = activeCategory === item.menu_name;
          return (
            <div
              key={id}
              onClick={() => handleCategoryClick(item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt={item.name}
                className={`w-[7.5vw] min-w-[80px] rounded-full cursor-pointer p-2 ${isActive ? " border rounded-full bg-red-400" : ""}`}
              />
              <p className={`mt-3 text-md ${isActive ? "font-bold text-cyan-700" : ""}`}>
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-2 h-0.5 bg-slate-200 border-none" />
    </div>
  );
};


export default ExploreMenu;
