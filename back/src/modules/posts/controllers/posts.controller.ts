import { NextFunction, Request, Response } from "express";
import * as postsService from '../services/posts.service';
import { PostCreation } from "../interfaces/postcreation";
import { AuthRequest } from "../../auth/interfaces/authrequest";
import { PostFilter } from "../interfaces/postfilter";
export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await postsService.getAllPosts();
        return res.json({
            ok: true,
            posts
        });
    } catch (error) {
        next( error );
    }
}

export const createPost = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const post: PostCreation = req.body;
    try {
        post.authorId = req.user!.id;
        const postDB = await postsService.createPost( post );
        return res.status(201).json({
            ok: true,
            post: postDB
        });
    } catch (error) {
        next( error );
    }
}

export const filterPosts = async (req: Request, res: Response, next: NextFunction) => {
    const filters: PostFilter = req.body;
    try {
        const posts = await postsService.filterPosts( filters );
        return res.json({ok: true, posts });
    } catch (error) {
        next( error );
    }
}

export const getAuthUserPosts = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { id } = req.user!;
    try {
        const posts = await postsService.getUserPosts( id );
        return res.json({ok: true, posts });
    } catch (error) {
        next( error );
    }
}

export const getPostsByUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    try {
        const posts = await postsService.getUserPosts( +userId );
        return res.json({ok: true, posts });
    } catch (error) {
        next( error );
    }
}