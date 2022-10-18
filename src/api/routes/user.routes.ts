import { Request, Response } from "express"


import {Router } from "express"
import { createUserService, getAllUsersService, getUserService, updateUserService } from "../services/user.service"


const userRoutes = Router()

userRoutes.post("/",createUserService)
userRoutes.get("/:userId",getUserService)
userRoutes.put("/",updateUserService)
userRoutes.get("/",getAllUsersService)




export default userRoutes