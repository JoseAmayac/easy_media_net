import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';
import { PostsResponse } from '../interfaces/posts-response';

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
}
