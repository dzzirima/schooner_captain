import { Request, Response } from "express";
import missingParams from "../../utils/missingParams";
import jwt from "jsonwebtoken";

import * as Userservice from "../services/user.service";
import generateSignedToken from "../../utils/generateSignedToken";

export const addUserController = async (req: Request, res: Response) => {
  let requiredParams = [
    "displayName",
    "email",
    "password",
    "phone",
    "firstName",
    "lastName",
  ];
  let missing_params = missingParams(requiredParams, req.body);

  if (missing_params.length > 0) {
    return res.status(400).json({
      success: false,
      msg: "missing params from your request",
      missingParams: missing_params,
    });
  }

  try {
    let newUser = await Userservice.addUser({ ...req.body });

    const token = await generateSignedToken(newUser);

    const { password, ...rest } = newUser;

    return res.json({
      success: true,
      user: rest,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

//get user by id
export const getUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    let userFound = await Userservice.getUserById(userId);

    if (userFound == null) {
      return res.status(400).json({
        success: false,
        msg: "No entry was found please provide a valid userId!!",
      });
    }

    return res.json({
      success: true,
      user: userFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const getAllUserController = async (req: Request, res: Response) => {
  let query: any = { attributes: { exclude: ["password"] } };

  try {
    let usersFound = await Userservice.searchUsers(query);

    return res.json({
      success: true,
      users: usersFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
export const upDateUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    let userUpdateResults = await Userservice.updateUser(userId, {
      ...req.body,
    });

    if (userUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was updated please provide a valid userId !!",
      });
    }

    return res.json({
      success: true,
      msg: "user was successfully updated ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    let userDeleteResults = await Userservice.deleteUser(userId);

    if (userDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was deleted please provide a valid userId !!",
      });
    }

    return res.json({
      success: true,
      msg: "Entry  was successfully deleted  ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let requiredParams = ["email", "password"];
  let missing = missingParams(requiredParams, req.body);

  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      msg: "missing params from your request",
      missingParams: missing,
    });
  }
  try {
    let loginResult = await Userservice.login(email, password);

    if (!loginResult.success) {
      return res.status(401).json({
        success: false,
        msg: "Failed to login check your credentials ",
        data: {
          loginResult,
        },
      });
    }

    res.json({
      success: true,
      msg: "Login successfull",
      ...loginResult,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      msg: "Failed to login",
      //@ts_ignore
      error: error.message,
    });
  }
};
