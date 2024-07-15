import express from "express"
import { addToCart, removeFromCart, getCart } from "../controller/cartController.js"
import authhMiddleware from "../middleware/auth.js";


const cartRouter = express.Router();

cartRouter.post("/add", authhMiddleware , addToCart)
cartRouter.post("/remove", authhMiddleware , removeFromCart)
cartRouter.get("/get", authhMiddleware , getCart)

export default cartRouter;
