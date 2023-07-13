import bcrypt from 'bcrypt';

export const hashPassword = ( plainPassword: string, saltRounds: number = 10 ): string => {
    const salt = bcrypt.genSaltSync( saltRounds );
    return bcrypt.hashSync(plainPassword, salt);
}

export const comparePasswords = (plainPassword: string, hashedPassword: string ): boolean => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
}