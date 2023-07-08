import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenusComponent } from '../../components/sidenav/menus/menus.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    CreatePostComponent,
    DashboardComponent,
    AdminComponent,
    SidenavComponent,
    MenusComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          {
            path: 'posts', component: PostsComponent, children: [
              { path: 'create', component: CreatePostComponent },
            ]
          },
          { path: '**', component: NotfoundComponent }
        ]
      }
    ])
  ],
})
export class AdminModule {
}
