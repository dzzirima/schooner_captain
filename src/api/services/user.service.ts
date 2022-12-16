/** this file  has the implementation of the user service */


import IUser from "../interfaces/user.interface";
import User from "../models/UserModel";

export const createUserService = async (userOptions: IUser) => {
  return await  User.create({ ...userOptions });
};


export const getUserService = async(userId: number | string) =>{
    return await User.findByPk(userId)
}


export const getAllUsersService = async ():Promise<any> =>{

    try {
      let usersFound  = await User.findAll()
    
      return usersFound

    
    } catch (error) {

      console.log(error)
      
    }

  }


export const updateUserService = async (updateOptions: { [x: string]: any; }):Promise<any> =>{

    try {
      //return the number of destroyed rows
      let usersFound  = await User.update({
        ...updateOptions

      } , {
        where:{
          userId :updateOptions.userId
        }
      })
    
      return usersFound

    
    } catch (error) {

      console.log(error)
      
    }

  }
  

  export const  deleteUserService = async (userId:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedUser  = await User.destroy({where:{
        userId:userId
      }})

    
      return deletedUser
    } catch (error) {

      console.log(error)
      
    }

  }





