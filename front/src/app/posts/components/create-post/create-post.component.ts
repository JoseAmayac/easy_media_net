import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../../interfaces/post';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PostService } from '../../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{
  post: Partial<Post> = {};
  isSending: boolean = false;
  error?: string;
  created: boolean = false;

  private authService = inject(AuthService);
  private postService = inject(PostService);
  private router = inject(Router);

  ngOnInit(): void {
    this.post.author = this.authService.user;
    this.post.createdAt = new Date();
  }

  onCreatePost(): void{
    if ( !this.validate() ) return;

    this.isSending = true;
    this.postService.createPost({
      title: this.post.title!,
      message: this.post.message!
    }).subscribe({
      next: ( ) => this.handleCorrectCreation(),
      error: ( err ) => this.handleErrorCreation( err )
    });
  }

  handleCorrectCreation(){
    this.isSending = false;
    this.created = true;
    this.error = undefined;
  }
  handleErrorCreation( err: HttpErrorResponse ){
    this.isSending = false;
    this.error = err.error.message || 'Server error';
  }

  validate(): boolean{
    const isTitleValid = this.post.title && this.post.title.trim().length > 0;
    const isMessageValid = this.post.message && this.post.message.trim().length > 0;

    return (isTitleValid && isMessageValid) || false;
  }

  navigate(path: string): void{
    this.router.navigateByUrl( path );
  }
}
