import React, { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/home/Home'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/LoginPopup/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='m-auto'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App