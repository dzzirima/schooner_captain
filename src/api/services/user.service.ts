/** this file  has the implementation of the user service */

import { QueryOptions } from "sequelize";
import IUser from "../interfaces/user.interface";
import User from "../models/User.model";

export const createUserService = async (userOptions: IUser) => {
  return await  User.create({ userOptions });
};



export const getUser = async(userId:number) =>{
    return await User.findByPk(userId)
}


export const getAllUsers = async ():Promise<any> =>{

    try {
      let usersFound  = await User.findAll()
    
      return usersFound

    
    } catch (error) {

      console.log(error)
      
    }

  }


export const updateUser = async (updateOptions: { [x: string]: any; }):Promise<any> =>{

    try {
      //return the number of destroyed rows
      let usersFound  = await User.update({
        ...updateOptions

      } , {
        where:{
          Id :updateOptions.Id
        }
      })
    
      return usersFound

    
    } catch (error) {

      console.log(error)
      
    }

  }
  

  export const  deleteUser = async (Id:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedUser  = await User.destroy({where:{
        Id:Id
      }})

    
      return deletedUser
    } catch (error) {

      console.log(error)
      
    }

  }





