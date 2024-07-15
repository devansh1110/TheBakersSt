import mongoose from "mongoose";

export const connectDb= async()=>{
   await mongoose.connect("mongodb+srv://saxenadevansh6:Aligarh1234@cluster1.qef0syp.mongodb.net/TheBakerSt").then(()=>console.log("DB connected"));
}