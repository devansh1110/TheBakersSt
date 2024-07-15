import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-[#2D3142] text-[#BFC0C0] px-5 py-8 " id="footer">
      <div className="w-full grid grid-cols-3 gap-20">
        <div className="flex flex-col items-start">
        <p className=" text-[#FFB703] text-3xl font-bold">
          <span className="text-white text-3xl font-bold">The</span>
          BakerSt.
        </p>
          <p className="mt-1 text-md mr-2">Savor the flavors.</p>
          <div className="flex flex-wrap cursor-pointer ">
            <img className="w-8 mr-4 mt-2" src={assets.twitter_icon} alt="twitter" />
            <img className="w-8 mr-4 mt-2" src={assets.linkedin_icon} alt="linkedin" />
            <img className="w-8 mr-4 mt-2" src={assets.facebook_icon} alt="facebook" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-lg font-semibold text-white">COMPANY</h2>
          <ul className=" cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-lg font-semibold text-white">Get in touch</h2>
          <ul className=" cursor-pointer">
            <li>Phone: +1 234 567 890</li>
            <li>Email: [info@thebakerst.com](mailto:info@theb</li>
            <li>Address: 123 Main St, New York, NY 10001</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-300 mt-5" />
      <p className="mt-3">Copyright 2022 TheBakerSt. All rights reserved.</p>
    </div>
  );
};

export default Footer;
