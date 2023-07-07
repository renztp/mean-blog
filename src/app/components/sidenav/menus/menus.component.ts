import { Component } from '@angular/core';
import { Menus } from './menus';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {
  menuLinks: Menus;
  constructor() {
    this.menuLinks = {
      items: [
        {
          label: 'Posts',
          url: '/posts',
          slug: 'posts'
        }
      ]
    };
  }
}
