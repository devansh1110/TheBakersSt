import React, {  useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';


const Add = ({url}) => {

    
    const [image, setImage]= useState(false);
    const [data, setData]= useState({
        name: '',
        price: '',
        description: '',
        category: 'Salad',
    });

    const handleChange= (e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setData(data=>({...data, [name]:value}))
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('name', data.name);
        formData.append('price', Number(data.price));
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('image', image);
        const res= await axios.post(`${url}/api/food/add`, formData)
        if(res.data.success){
            setData({       
                name: '',
                price: '',
                description: '',
                category: 'Salad',
            })
            setImage(false);
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }
        }

  return (
    <div className='w-[70%] ml-12 my-12 text-[#6d6d6d] text-lg'>
        <form className='gap-8 flex flex-col' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-[120px]' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className='flex flex-col gap-2 w-[40%]'>
                <p>Product Name</p>
                <input onChange={handleChange} value={data.name} className='p-2 border border-black rounded' type="text" name="name" placeholder='Type Here' />
            </div>
            <div className='flex flex-col gap-2 w-[40%]'>
                <p>Product Description</p>
                <textarea onChange={handleChange} value={data.description} className='p-2 border border-black rounded' name="description" required rows={4} placeholder='Type Here'></textarea>
            </div>
            <div className='flex gap-7'>
                <div className='flex flex-col gap-2'>
                    <p>Product Category</p>
                    <select onChange={handleChange} value={data.category} className='p-2 max-w-32 border border-black rounded' name="category" required>
                        <option value="Salad">The Signature Salad</option>
                        <option value="Rolls">Rolls&Taco</option>
                        <option value="Dessert">Sweet Truth</option>
                        <option value="SandWhich">Wraps&Sandwhich</option>
                        <option value="Noodles">Chinese&Noodels</option>
                        <option value="Pure veg">Vegan</option>
                        <option value="Cake">Cakes&Bites</option>
                        <option value="Pasta">Ravioli&Pastas</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Product Price</p>
                    <input onChange={handleChange} value={data.price} className='p-2 max-w-32 border border-black rounded' type="number" name="price" required placeholder='$25' />
                </div>
            </div>
            <button className='bg-black text-white w-32 py-2 rounded' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Add