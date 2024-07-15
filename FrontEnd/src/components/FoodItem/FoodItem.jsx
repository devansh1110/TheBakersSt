import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, category, image }) => {
  const {cart, addToCart, removeFromCart,url}= useContext(StoreContext)

  return (
    <div className=" w-full h-full m-auto rounded-lg hover:shadow-md animate-[fadeIn_0.3s_ease-in]">
      <div className="relative">
        <img className="w-full h-52 rounded-t-lg" src={url+"/images/"+image} alt={name} />
        {!cart[id] ? (
          <img className="absolute w-8 bottom-4 right-4 cursor-pointer rounded-3xl"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            alt=""
          />
        ) : (
          <div className="bg-white animate-[fadeIn_0.2s_ease-in-out] absolute bottom-4 right-4 flex items-center gap-2 p-1 cursor-pointer rounded-3xl">
            {" "}
            <img className="w-8" onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" /> 
            <p>{cart[id]}</p>
            <img className="w-8" onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col min-h-[230px]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">{name}</h2>
          <img className="w-[70px]" src={assets.rating_starts} alt="rating" />
        </div>
        <p className="text-[#676767] text-[12px] flex-grow">{description}</p>
        <div>
        <p className="text-[tomato] text-lg my-2 font-semibold">
          Price: ${price}
        </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
