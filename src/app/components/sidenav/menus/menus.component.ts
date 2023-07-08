import { Component } from '@angular/core';
import { MenuLink } from './menus';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {
  menuLinks: MenuLink[];
  constructor() {
    this.menuLinks = [
      {
        label: 'Posts',
        url: '/posts',
        slug: 'posts'
      },
      {
        label: 'Menus',
        url: '/menus',
        slug: 'menus'
      },
      {
        label: 'Global',
        url: '/global',
        slug: 'global'
      },
      {
        label: 'Settings',
        url: '/settings',
        slug: 'settings'
      },
    ];
  }
}
