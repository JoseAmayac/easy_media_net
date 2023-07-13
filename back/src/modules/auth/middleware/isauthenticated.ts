import { NextFunction, Request, Response } from "express";
import jwt from '../../shared/utils/jwt';
import { findUserById } from "../services/auth.service";
import { JwtPayload } from "jsonwebtoken";
import { AuthRequest } from "../interfaces/authrequest";

export const isAuthenticated = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if ( !header ) return unAuthorizedResponse( res );
    const token = header.split(' ')[1];
    console.log( token );
    
    try {
        const payload = jwt.validateToken( token );
        const user = await findUserById( (payload as JwtPayload).id );
        req.user = user!;
        next();
    } catch (error) {
        unAuthorizedResponse( res );
    }
}

const unAuthorizedResponse = (res: Response) => {
    return res.status(401).json({
        ok: false,
        message: "Unauthorized",
    });
};