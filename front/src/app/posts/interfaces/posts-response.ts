import { Post } from "./post";

export interface PostsResponse {
  ok: boolean;
  posts: Post[];
}
