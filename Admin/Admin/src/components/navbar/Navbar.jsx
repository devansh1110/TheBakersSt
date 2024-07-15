import React from 'react'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 mx-5 '>
        <div>
            <p className=" text-[#FFB703] text-3xl font-bold">
            <span className="text-black text-3xl font-bold">The</span>
            BakerSt.
        </p>
        <p className=' text-sm font-semibold text-left'>Admin Panel</p>
        </div>
        <img className='w-10 cursor-pointer' src={assets.profile_image} alt="Profile" />
    </div>
  )
}

export default Navbar