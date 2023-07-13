import { Request } from "express";
import { UserModel } from "./usermodel";

export interface AuthRequest extends Request{
    user?: UserModel
}