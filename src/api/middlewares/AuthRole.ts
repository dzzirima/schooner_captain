import { NextFunction, Request, Response } from "express";

export const authRole = (role: string) => {
  return (req: Request | any, res: Response, next: NextFunction) => {
    if (req.user.role !== role) {
      return res
        .status(401)
        .send(
          `Your role : ${req.user.role} is not allowed to perfome this operation !! , only ${role}'s can`
        );
    }
    next();
  };
};
