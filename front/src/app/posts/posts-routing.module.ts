import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostsDashboardComponent } from './screens/posts-dashboard/posts-dashboard.component';

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
