import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'


const Login = ({ setShowLogin }) => {

  const {url, setToken}= useContext(StoreContext);

  const [curr, setCurr] = useState("SignUp");
  const [data, setData]= useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange= (e)=>{
    const name= e.target.name;
    const value= e.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const onLogin = async(e)=>{
    e.preventDefault();
    let newUrl= url;
    if (curr==="Login") {
      newUrl+="/api/user/login"
    }else{
      newUrl+="/api/user/register"
    }
    const response= await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
  }else{
    alert(response.data.message);
  }
}
 


  return (
    <div className="absolute z-50 w-full h-full bg-[#00000090] grid">
      <form onSubmit={onLogin} className=" place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 text-lg animate-[fadeIn_0.3s_ease-in-out] rounded-md">
        <div className="flex justify-between items-center">
          <h2>{curr}</h2>
          <img
            className=" cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          {curr === "Login" ? (
            <></>
          ) : (
            <input className="border rounded p-2 text-sm" type="text" name="name" onChange={handleChange} value={data.name} placeholder="Your Name Please" required />
          )}
          <input name="email" onChange={handleChange} value={data.email} className="border rounded p-2 text-sm" type="email" placeholder="Email" required />
          <input name="password" onChange={handleChange} value={data.password} className="border rounded p-2 text-sm" type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          {curr === "SignUp" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-center gap-2 text-sm">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
        {curr === "Login" ? (
          <p className="text-sm ml-4">
            Create a new account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setCurr("SignUp")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm ml-4">
            Already have an account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setCurr("Login")}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
