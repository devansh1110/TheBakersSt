import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list}= useContext(StoreContext);
  return (
    <div className='mt-5 mb-10 mx-10'>
        <h2 className='font-bold text-xl m-2'>Best dishes near you</h2>
        <div className='grid grid-cols-4 gap-4 m-5'>
            {food_list.map((item, index)=>{
                if(category==="All" || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay