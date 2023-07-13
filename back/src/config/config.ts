
export const config = {
    tokenKey: process.env.JWT_TOKEN || 'somerandomkey',
    tokenExpiration: process.env.JWT_TOKEN_EXPIRATION || 6 * 60 * 60
}