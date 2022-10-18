/**this file contains user controllers */
import { Request, Response } from "express";
import { createUserService, getUserService } from "../services/user.service";
import IUser from "../interfaces/user.interface";
import log from "../../utils/logger";

export const addUserController = async (req: Request, res: Response) => {
  const { displayName, email, password, photoURL } = req.body;
  let userOptions: IUser = {...req.body };

  try {
    let userResult = await createUserService(userOptions);

    return res.json({
      success: true,
      user: userResult,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const getAllUserController= async (req: Request, res: Response) => {
    const { userId } = req.params
    
    // console.log(Id)
    try {

      let userFound = await getUserService(userId)

      if( userFound == null){
        return res.status(400).json({
          success:false,
          msg:"No entry was found please provide a valid userId!!"
        })

      }
      

      return res.json({
        success: true,
        user:userFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
