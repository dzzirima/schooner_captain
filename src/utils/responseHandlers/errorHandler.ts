import { NextFunction, Request, Response } from "express";


export const notFound = (req :Request, res:Response, next: NextFunction) => {
    // res.status(httpStatus.NOT_FOUND).send({
    //   success: false,
    //   message: "Requested Resource Not Found",
    // });
  };
  
  // handle internal server errors
  export const internalServerError = (err : Error, req:Request, res: Response, next : NextFunction) => {
    // res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).send({
    //   success: false,
    //   message: err.message,
    // });
  };
  
  // handle bad request errors
  export const badRequest = (err : Error, req: Request, res: Response, next: NextFunction) => {
    // res.status(err.status || httpStatus.BAD_REQUEST).send({
    //   success: false,
    //   message: err.errors,
    // });
  };