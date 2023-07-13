import { PrismaClient } from "@prisma/client"
import { UserCreation } from "../interfaces/usercreation";

const prisma = new PrismaClient();

export const findUserByEmail = (email: string) => {
    return prisma.user.findUnique({ where: { email } });
}

export const findUserById = ( id: number ) => {
    return prisma.user.findFirst({ where: { id } });
}

export const register = ( user: UserCreation ) => {
    return prisma.user.create({ data: user });
}