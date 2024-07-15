import React from 'react'
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className='m-auto my-24 text-2xl text-center font-semibold '>
        <p>For Better Experience Download <br />TheBakerSt.</p>
        <div className='flex justify-center gap-3 my-10'>
            <img className='w-24 max-w-44 ease-in-out duration-300 cursor-pointer hover:scale-105' src={assets.play_store} alt="Play Store" />
            <img className='w-24 max-w-44 ease-in-out duration-300 cursor-pointer hover:scale-105' src={assets.app_store} alt="App Store" />
        </div>
    </div>
  )
}

export default AppDownload