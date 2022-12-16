
import IUser from "../api/interfaces/user.interface";
import jwt from "jsonwebtoken";

export default async (data: IUser ): Promise<string> => {
  let { password, ...rest } = data;

  // create a token and send it
  const token = jwt.sign({... rest }, process.env.jwtSecret!, {
    expiresIn: process.env.tokenExpirationInSeconds,
  });

  return token;
};
