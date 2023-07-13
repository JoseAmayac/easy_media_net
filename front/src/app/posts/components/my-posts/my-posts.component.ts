import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit{
  posts: Post[] = [];
  isLoading: boolean = false;
  error?: string;

  private postService = inject( PostService );

  ngOnInit(): void {
      this.loadMyPosts();
  }

  loadMyPosts(): void{
    this.postService.getMyPosts().subscribe({
      next: ( posts ) => this.handleCorrectLoad( posts ),
      error: ( err ) =>  this.handleErrorLoad( err )
    });
  }

  handleCorrectLoad( posts: Post[] ){
    this.isLoading = false;
    this.posts = posts;
  }
  handleErrorLoad( err: HttpErrorResponse ){
    this.isLoading = false;
    this.error = err.error.message || 'Server error';
  }
}
