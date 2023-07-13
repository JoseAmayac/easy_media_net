import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts-layout',
  templateUrl: './posts-layout.component.html',
  styleUrls: ['./posts-layout.component.scss']
})
export class PostsLayoutComponent {
  @Input() title!: string;
  @Input() posts!: Post[];
}
