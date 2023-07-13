import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../../interfaces/post';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{
  post: Partial<Post> = {};

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.post.author = this.authService.user;
    this.post.createdAt = new Date();
  }

}
