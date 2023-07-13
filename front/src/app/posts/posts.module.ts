import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsDashboardComponent } from './screens/posts-dashboard/posts-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PostsLayoutComponent } from './components/posts-layout/posts-layout.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { FiltersComponent } from './components/filters/filters.component';



@NgModule({
  declarations: [
    AllPostsComponent,
    PostCardComponent,
    PostsDashboardComponent,
    PostsLayoutComponent,
    CreatePostComponent,
    MyPostsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PostsModule { }
