import jwt from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";
import User from "../models/UserModel";

export const authRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.json({
      success: false,
      message: "No authorization token was found in your headers",
      requiredFormat: {
        authorization: "Bearer  <your_token>",
      },
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret!);
    //@ts-ignore
    let email = decoded.email;

    let userFound;

    userFound = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!userFound) {
      return res.status(404).json({
        succes: false,
        message: "This token is not linked to any of the users in the system",
      });
    }
    //@ts-ignore
    req.user = userFound;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized to access this router",
      error: `${error}`,
    });
  }
};
