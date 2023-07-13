import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostFilter } from '../../interfaces/post-filter';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-posts-layout',
  templateUrl: './posts-layout.component.html',
  styleUrls: ['./posts-layout.component.scss']
})
export class PostsLayoutComponent {
  @Input() title!: string;
  @Input() posts!: Post[];
  @Input() modeFilter: string = 'full';

  @Output() onFilter = new EventEmitter<PostFilter>();
  searchSubject: Subject<void> = new Subject<void>();

  filters: PostFilter = {};

  constructor(){
    this.searchSubject.pipe(debounceTime(300)).subscribe(()=>{
      this.onFilter.emit( this.filters );
    })
  }

  onWordsChange( text: string ){
    this.filters.text = text;
    this.searchSubject.next();
  }

  onDateChanged( date: Date|null ){
    this.filters.createdAt = date ?? undefined;
    this.onFilter.emit( this.filters );
  }
}
