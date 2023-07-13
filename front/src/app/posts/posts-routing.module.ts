import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostsDashboardComponent } from './screens/posts-dashboard/posts-dashboard.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsDashboardComponent,
    children: [
      {
        path: 'all-posts',
        component: AllPostsComponent
      },
      {
        path: 'create-post',
        component: CreatePostComponent
      },
      {
        path: 'my-posts',
        component: MyPostsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-posts'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
