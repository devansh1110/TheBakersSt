import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

//app config
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//db connection
connectDb();

//routes
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)


app.get("/", (req, res)=>{
    res.send("Hello World")
})

//listen
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`
    )
})