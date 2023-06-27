import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreatePostComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin', children: [
          { path: '', component: DashboardComponent },
          { path: 'create', component: CreatePostComponent }
        ]
      }
    ])
  ],
})
export class AdminModule { }
