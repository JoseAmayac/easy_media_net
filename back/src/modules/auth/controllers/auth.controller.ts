import { NextFunction, Request, Response } from "express";
import * as authService from "../services/auth.service";
import { comparePasswords, hashPassword } from "../utils/bcrypt";
import jwt from '../../shared/utils/jwt';
import { UserModel } from "../interfaces/usermodel";
import { UserCreation } from "../interfaces/usercreation";
import { AuthRequest } from "../interfaces/authrequest";

export const loginUser = async(req: Request, res: Response, next: NextFunction ) => {
    const { email, password } = req.body;

    try {
        const user = await authService.findUserByEmail( email );
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

export const registerUser = async(req: Request, res: Response, next: NextFunction) => {
    const user: UserCreation = req.body;
    try {
        user.password = hashPassword( user.password );
        const currentUser = await authService.findUserByEmail(user.email);
        if ( currentUser ) {
            return res.status(422).json({ok: false, message: 'User already exists'});
        }

        const userDB = await authService.register( user );
        return createAuthenticationResponse(res, userDB, 201);
    } catch (error) {
        next( error );
    }
}

export const me = async(req: AuthRequest, res: Response) => {
    const user = req.user!;
    return createAuthenticationResponse(res, user);
}

const createAuthenticationResponse = ( res: Response, user: UserModel, status: number = 200 ) => {
    const accessToken = jwt.generateToken( user.id );
    return res.status(status).json({
        ok:true,
        user,
        accessToken
    });
}