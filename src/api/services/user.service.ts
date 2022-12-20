import { QueryOptions } from "sequelize";
import IUser from "../interfaces/user.interface";
import User from "../models/UserModel";

import bcrypt from "bcrypt";
import generateSignedToken from "../../utils/generateSignedToken";

import { generateUserId } from "../../utils/generateId";

export const addUser = async (userOption: IUser): Promise<User> => {
  const hashedPassedword = await bcrypt.hash(userOption.password, 10);

  let user = await User.create({
    ...userOption,
    password: hashedPassedword,
    userId: generateUserId(),
  });

  return user.toJSON();
};

export const getUserById = async (userId: string): Promise<User | null> => {
  let froundUser = await User.findByPk(userId, {
    attributes: { exclude: ["password"] },
  });

  return froundUser;
};

export const updateUser = async (
  userId: string,
  updateOptions: IUser
): Promise<number[]> => {
  let updateRes = await User.update(
    {
      ...updateOptions,
    },
    {
      where: { id: userId },
    }
  );

  return updateRes;
};

export const deleteUser = async (userId: string): Promise<number> => {
  let deleteRes = await User.destroy({
    where: {
      id: userId,
    },
  });

  return deleteRes;
};

export const searchUsers = async (
  searchQuery: QueryOptions
): Promise<null | User[]> => {
  let foundUsers = await User.findAll(searchQuery);

  return foundUsers;
};

export const login = async (email: string, password: string): Promise<any> => {
  let loginResult = {
    token: "",
    success: false,
    msg: "",
    user: {},
  };

  let userFound = await User.findOne({
    raw: true,

    where: {
      email: email,
    },
  });

  if (!userFound) {
    loginResult.msg = "User with that email is  not found ...!!";
    return Promise.resolve(loginResult);
  }

  
  let comparedPassword = await bcrypt.compare(password, userFound.password);
  console.log(comparedPassword)

  if (!comparedPassword) {
   return  Promise.resolve(loginResult);
  }

  const token = await generateSignedToken(userFound);

  //removing password
  //@ts-ignore
  delete userFound["password"];
  loginResult.success = true;
  loginResult.token = token;
  //@ts-ignore
  loginResult.user = userFound;

  return loginResult;
  /**
   * checkif  the passwordhash  is the same
   */
};
