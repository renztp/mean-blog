import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.email = '';
  }

  login() {
    console.log('username', this.username);
  }
}
