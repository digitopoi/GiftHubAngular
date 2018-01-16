import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  name: string;
  isLoggedIn: boolean;

  constructor(public router: Router, public _authService: AuthService) { }

  ngOnInit() {
    this._authService.userInfo.subscribe((d: UserData) => {
      console.log('the value of data', d);
      this.username = d.user;
      this.name = d.name;
      this.isLoggedIn = d.isloggedin;
    });

    if (localStorage.getItem('id_token')) {
      this.isLoggedIn = true;
      this.name = localStorage.getItem('user');
    }
    
  }

  onLoggout() {
    this._authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}

export interface UserData {
  user: string;
  name: string;
  isloggedin: boolean;
}
