import jwt from 'jsonwebtoken';
import { config } from '../../config/config';

const generateToken = ( payload: number ) => {
    return jwt.sign({user: payload}, config.tokenKey, {
        expiresIn: config.tokenExpiration
    })
}

const validateToken = ( token: string ) => {
    return jwt.verify(token, config.tokenKey);
}

export default {
    generateToken, validateToken
}