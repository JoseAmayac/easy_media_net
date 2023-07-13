import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, PostCreation } from '../interfaces/post';
import { PostResponse, PostsResponse } from '../interfaces/posts-response';
import { PostFilter } from '../interfaces/post-filter';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http: HttpClient = inject( HttpClient );

  getAllPosts(): Observable<Post[]> {
    return this.http.get<PostsResponse>(`${URL}/posts`).pipe(
      map((resp: PostsResponse) => resp.posts)
    );
  }

  getMyPosts(): Observable<Post[]> {
    return this.http.get<PostsResponse>(`${URL}/posts/my-posts`).pipe(
      map((resp: PostsResponse) => resp.posts)
    );
  }

  filterPosts(filters: PostFilter): Observable<Post[]>{
    return this.http.post<PostsResponse>(`${URL}/posts/filter`, filters).pipe(
      map((resp: PostsResponse) => resp.posts)
    );
  }

  createPost(post: PostCreation): Observable<Post> {
    return this.http.post<PostResponse>(`${URL}/posts`, post).pipe(
      map((resp: PostResponse) => resp.post)
    );
  }
}
