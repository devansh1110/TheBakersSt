import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'

const PlaceOrder = () => {
  
  const {cartTotal}= useContext(StoreContext);

  return (
    <form className='flex items-start justify-between gap-12 my-24 mx-32'>
      <div className='w-full'>
        <p className=' text-xl font-semibold mb-9'>Delivery Information</p>
        <div className='flex gap-2'>
         <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='First Name' />
         <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='Last Name' />
        </div>
        <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="email" placeholder='Email' />
        <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='Street'/>
        <div className='flex gap-2'>
         <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='City' />
         <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='State' />
        </div>
        <div className='flex gap-2'>
         <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='Zip Code' />
         <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='Country' />
        </div>
        <input className=' mb-3 w-full p-2 border border-[#c5c5c5] rounded outline-orange-400' type="text" placeholder='Mobile' />
      </div>
      <div className='w-full'>
      <div className=' flex-1 flex flex-col gap-2 '>
          <h2 className='font-bold text-lg'>Cart Total</h2>
          <div className='w-[90%]'>
            <div className='flex justify-between text-[#555] m-2'>
              <p>SubTotal</p>
              <p>${cartTotal()}</p>
            </div>
            <hr className='w-full h-[1px] bg-[#e2e2e2] border-none'/>
            <div className='flex justify-between text-[#555] m-2'>
              <p>Delivery & Taxes</p>
              <p>${cartTotal()===0?0:2.75}</p>

            </div>
            <hr className='w-full h-[1px] bg-[#e2e2e2] border-none'/>
            <div className='flex justify-between text-[#555] m-2'>
              <b>Total</b>
              <b>${cartTotal()===0?0:cartTotal()+2.75}</b>
            </div>
            <button className=' text-sm mt-2 bg-blue-500 hover:bg-blue-400 text-white mx-3 px-16 py-3 rounded-md cursor-pointer'>Complete Payment</button>
            </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder