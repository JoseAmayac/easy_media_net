import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit{
  posts: Post[] = [];
  isLoading: boolean = false;
  error?: string;

  private postService = inject( PostService );

  ngOnInit(): void {
    this.loadAllPosts()
  }

  loadAllPosts(): void{
    this.isLoading = true;
    this.postService.getAllPosts().subscribe({
      next: ( posts ) => this.handleCorrectLoad( posts ),
      error: ( err ) =>  this.handleErrorLoad( err )
    });
  }

  handleCorrectLoad( posts: Post[] ){
    this.isLoading = false;
    this.posts = posts;
  }
  handleErrorLoad( err: HttpErrorResponse ){
    this.error = err.error.message || 'Server error';
  }
}
