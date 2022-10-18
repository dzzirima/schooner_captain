/**this file contains user controllers */
import { Request, Response } from "express";
import { createUserService, deleteUserService, getAllUsersService, getUserService, updateUserService } from "../services/user.service";
import IUser from "../interfaces/user.interface";
import logger from "../../utils/logger";

export const addUserController = async (req: Request, res: Response) => {
  const { displayName, email, password, photoURL } = req.body;
  let userOptions: IUser = {...req.body };

  logger.info(userOptions)
  

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


export const getUserController= async (req: Request, res: Response) => {
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

  export const getAllUserController = async (req: Request, res: Response) => {
 
   
    
    try {

      let usersFound = await getAllUsersService()

      return res.json({
        success: true,
        users:usersFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  export const  upDateUserController = async (req: Request, res: Response) => {

    try {

      let userUpdateResults =  await updateUserService({...req.body})


      

      if( userUpdateResults[0] !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was updated please provide a valid userId !!"
        })

      }

      return res.json({
        success: true,
        msg:"user was successfully updated "
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  export const  deleteUserController = async (req: Request, res: Response) => {

    const {userId } = req.params
    try {

      let userDeleteResults = await deleteUserService(userId)

    

     

      if( userDeleteResults !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was deleted please provide a valid userId !!"
        })

      }

      return res.json({
        success: true,
        msg:"Entry  was successfully deleted  "
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
  

