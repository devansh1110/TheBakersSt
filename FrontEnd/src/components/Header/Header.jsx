import React, { useState } from 'react'
import imagePath from '/src/assets/img.jpg'

const Header = () => {
  return (
    <div>
    <div
      className='bg-cover bg-center h-screen max-h-[85vh]'
      style={{ backgroundImage: `url(${imagePath})` }}
    >
    <div className='flex flex-col items-start justify-end h-full mb-8 p-4 animate-[fadeIn_1s_ease-in]'>
      <h2 className='font-bold text-white text-6xl mb-2'>Place your favourite food here.</h2>
      <p className='text-center text-white text-xl mb-4'>
        Savor the Flavor: Where Every Meal is a Journey, Every Bite a Delight,
        and Every Visit a Celebration of Culinary Excellence.
      </p>
      <button className='hover:bg-slate-200 border bg-white text-black rounded-full px-6 py-2'>
        Show Food
      </button>
      </div>
    </div>
  </div>
);
};

export default Header