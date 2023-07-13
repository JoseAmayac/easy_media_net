import { PrismaClient } from "@prisma/client";
import { PostCreation } from "../interfaces/postcreation";
import { PostFilter } from "../interfaces/postfilter";

const prisma = new PrismaClient();

export const createPost = ( post: PostCreation ) => {
    return prisma.post.create({ data: post });
}

export const getAllPosts = () => {
    return prisma.post.findMany({ include: { author: true }});
}

export const getUserPosts = ( authorId: number ) => {
    return prisma.post.findMany({where: { authorId }});
}

export const filterPosts = ( filters: PostFilter ) => {
    const queryFilters = [];
    if ( filters.text ) {
        queryFilters.push({
            title: {
                contains: filters.text
            }
        });
    }

    if ( filters.createdAt ) {
        queryFilters.push({
            createdAt: {
                gte: filters.createdAt
            }
        });
    }

    return prisma.post.findMany({
        where: {
            AND: [ ...queryFilters ]
        }
    });
}