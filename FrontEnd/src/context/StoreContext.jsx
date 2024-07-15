import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {



  const [cart, setCart] = useState({});
  const url="http://localhost:5000";
  const [token, setToken]= useState("");
  const [food_list, setFoodList]= useState([])



  const addToCart = async (itemId) => {
    if (!cart[itemId]) {
      setCart((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }if (token) {
      await axios.post(url+"/api/cart/add", {itemId},{headers:{token}})
    }
  };
  const removeFromCart = async (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}})
    }
  };

  const cartTotal = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        total += itemInfo.price * cart[item];
      }
    }
    return total;
  };

  const fetchFoodList= async ()=>{
    const response= await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }

  const loadCartData = async (token)=>{
    const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCart(response.data.cartData)
  }

  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    cartTotal,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
