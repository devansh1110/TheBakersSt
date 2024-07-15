import React from 'react'
import {assets} from "../../assets/assets"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border border-[#a9a9a9] border-t-0'>
        <div className=' pt-12 pl-[20%] flex flex-col gap-5'>
            <NavLink to='/add' className='sideOP flex items-center gap-5 border border-[#a9a9a9] border-r-0 py-2 px-2 rounded-s cursor-pointer'>
                <img src={assets.add_icon} alt="add items" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className='sideOP flex items-center gap-5 border border-[#a9a9a9] border-r-0 py-2 px-2 rounded-s cursor-pointer'>
                <img src={assets.order_icon} alt="add items" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className='sideOP flex items-center gap-5 border border-[#a9a9a9] border-r-0 py-2 px-2 rounded-s cursor-pointer'>
                <img src={assets.order_icon} alt="add items" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar