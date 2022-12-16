import { Request, Response } from "express";

import { Router } from "express";

import * as UserAuthController from "../controllers/user.controller";


const userRoutes = Router();

userRoutes.post("/", UserAuthController.addUserController);
userRoutes.get("/:userId", UserAuthController.getUserController);
userRoutes.patch("/", UserAuthController.upDateUserController);
userRoutes.get("/", UserAuthController.getAllUserController);
userRoutes.delete("/:userId", UserAuthController.deleteUserController);
userRoutes.post("/login", UserAuthController. login);

export default userRoutes;
