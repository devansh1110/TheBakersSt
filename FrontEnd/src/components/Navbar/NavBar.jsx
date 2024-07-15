import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";
import {useNavigate} from 'react-router-dom'

const NavBar = ({setShowLogin}) => {
  const {cartTotal,token, setToken}= useContext(StoreContext)
  const [menu, setMenu] = useState("home");
  const navigate= useNavigate()
  
  const logOut= ()=>{
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  }

  const getLinkClass = (link) => {
    return menu === link
      ? "nav-link border-b-2 border-slate-500 font-semibold"
      : "nav-link text-gray-700";
  };

  return (
    <div className="flex items-center justify-between p-3">
      <div > <Link to='/'>
        <p className=" text-[#FFB703] text-3xl font-bold">
          <span className="text-black text-3xl font-bold">The</span>
          BakerSt.
        </p></Link>
      </div>
      <div>
        <ul className="flex flex-wrap gap-4 cursor-pointer">
          <Link to="/"
            href="/"
            className={getLinkClass("home")}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          <a
            href='#explore-menu'
            className={getLinkClass("menu")}
            onClick={() => setMenu("menu")}
          >
            Menu
          </a>
          <a
            href='#footer'
            className={getLinkClass("contact")}
            onClick={() => setMenu("contact")}
          >
            Contact Us
          </a>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4 pr-2">
        <Link to='/cart'> <img
          className="p-2 cursor-pointer"
          src={assets.basket_icon}
          alt="Cart LOGO"
        /></Link> 
        {cartTotal()===0?"":(
        <div className="absolute min-w-2 min-h-2 bg-red-400 rounded-full right-28"></div>)}
        {!token?<button onClick={()=>setShowLogin(true)} className="border border-slate-400 rounded-full px-4 text-sm hover:bg-slate-200">
          Sign In
        </button>:
        <div className="relative mt-2 group">
          <img className="cursor-pointer" src={assets.profile_icon}/>
          <ul className="rounded absolute right-0 hidden group-hover:block bg-white shadow-lg z-10 mt-2 min-w-[160px]">
            <li className="flex gap-2 items-center p-3 hover:bg-gray-100 cursor-pointer"><img className="w-5" src={assets.bag_icon} alt="" /><p className="hover:font-semibold">Orders</p></li>
            <hr className="border-t my-1"/>
            <li onClick={logOut} className="flex gap-2 items-center p-3 hover:bg-gray-100 cursor-pointer"><img className="w-5" src={assets.logout_icon} alt="" /><p className="hover:font-semibold">Log Out</p></li>
          </ul>
          </div>}
        
      </div>
    </div>
  );
};

export default NavBar;
