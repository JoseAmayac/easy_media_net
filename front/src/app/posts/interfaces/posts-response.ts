import { Post } from "./post";

export interface PostsResponse {
  ok: boolean;
  posts: Post[];
}

export interface PostResponse{
  ok: boolean;
  post: Post;
}
