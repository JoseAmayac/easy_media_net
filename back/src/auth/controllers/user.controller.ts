import { NextFunction, Request, Response } from "express";
import * as userService from "../services/auth.service";
import { comparePasswords } from "../utils/bcrypt";
import jwt from '../../shared/utils/jwt';
import { UserModel } from "../interfaces/UserModel";

export const login = async(req: Request, res: Response, next: NextFunction ) => {
    const { email, password } = req.body;

    try {
        const user = await userService.findUserByEmail( email );
        if ( !user || !comparePasswords( password, user.password )) {
            return res.status(401).json({
                ok: false,
                message: 'Invalid email or password'
            });
        }
        return createAuthenticationResponse( res, user );
    } catch (error) {
        next( error );
    }
}

const createAuthenticationResponse = ( res: Response, user: UserModel, status: number = 200 ) => {
    const accessToken = jwt.generateToken( user.id );
    return res.status(status).json({
        ok:true,
        user,
        accessToken
    });
}