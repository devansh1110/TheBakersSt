import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const cart = () => {

  const{cart, food_list, removeFromCart, cartTotal,url}= useContext(StoreContext);
  const navigate= useNavigate();

  return (
    <div className='my-24 '>
      <div>
        <div className='grid grid-cols-6 items-center text-gray-600 text-xs text-center mx-5'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='w-full h-[1px] bg-[#e2e2e2] border-none'/>
        {food_list.map((item, index)=>{
          if(cart[item._id]>0)
            {
              return(
                <div>
                <div className='grid grid-cols-6 items-center text-black text-xs text-center mx-5'>
                 <img className='rounded-full place-self-center size-20 my-2' src={url+"/images/"+item.image} alt="" />
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <p>{cart[item._id]}</p>
                 <p>${cart[item._id]*item.price}</p>
                 <p onClick={()=>removeFromCart(item._id)} className=' cursor-pointer font-semibold'>X</p>
                </div>
                <hr className='w-full h-[1px] bg-[#e2e2e2] border-none' />
                </div>
              )
            }     
        })}
      </div>
      <div className='mt-20 flex justify-between gap-4 mx-10'>
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
            <button onClick={()=>navigate('/placeorder')} className=' mt-2 bg-blue-500 hover:bg-blue-400 text-white mx-3 px-16 py-2 rounded-md cursor-pointer'>Checkout</button>
            </div>
        </div>
        <div className=' flex-1 flex items-center justify-center'>
          <div>
            <p>Enter your promo code here</p>
            <div>
              <input className='border bg-gray-300 border-gray-500 text-sm px-5 py-1 rounded-lg mr-1' type="text" placeholder='Enter your promo code' />
              <button className=' bg-blue-500 hover:bg-blue-400 text-white px-4 py-1 mx-1 rounded-lg cursor-pointer'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart