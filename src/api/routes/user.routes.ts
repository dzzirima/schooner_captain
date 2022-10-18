import { Request, Response } from "express"


import {Router } from "express"
import { addUserController, deleteUserController, getAllUserController, getUserController, upDateUserController } from "../controllers/user.controller"


const userRoutes = Router()

userRoutes.post("/",addUserController)
userRoutes.get("/:userId",getUserController)
userRoutes.put("/",upDateUserController)
userRoutes.get("/",getAllUserController)
userRoutes.delete("/:userId",deleteUserController)




export default userRoutes