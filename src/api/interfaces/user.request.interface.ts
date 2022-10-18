
import { Request } from "express";

export interface IUserAuthRequest extends Request {
    locals: body;
}

export interface body {
    client: string;
    iss?: string;
    aud?: string | string[];
    iat?: number;
    exp?: number;
    integration_id?: string;
}