import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const List = ({url}) => {
  

  const [list, setList]= useState([]);
  const fetchList= async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data)
    }else{
      toast.error("error")
    }
  }

  const removeFood = async (foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    if (response.data.success) {
      fetchList()
      toast.success(response.data.message)
      }else{
        toast.error("error")
        }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex flex-col w-full m-10'>
      <p className=' font-semibold my-2'>All available foods</p>
      <div className='list table'>
        <div className="grid grid-cols-5 items-center gap-3 px-3 py-4 border border-[#cacaca] text-sm bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return(
            <div className="grid grid-cols-5 items-center gap-3 px-3 py-4 border border-[#cacaca] text-sm" key={index}>
              <img className='w-12' src={`${url}/images/`+item.image} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className=' cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List