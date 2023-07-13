import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostFilter } from '../../interfaces/post-filter';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post: Post | Partial<Post> = {
    message: 'Create message for share with your friends',
    title: 'Your post title'
  };
  @Input() filters: PostFilter = {};

}
