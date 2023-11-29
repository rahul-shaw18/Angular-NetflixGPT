import { Component, OnInit } from '@angular/core';
import { LOGO_URL, DEFAULT_PROFILE_PIC } from './../../../../utils/utils';
import { Router } from '@angular/router';
import { AuthService } from '../../authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  brandLogo = LOGO_URL;
  defaultProfilePic = DEFAULT_PROFILE_PIC;
  isUserLoggedIn: boolean = false;
  loggedInUser: any;

  constructor(private router: Router, private authService: AuthService) {
    let token = localStorage.getItem('token');
    if (token) {
      this.loggedInUser = JSON.parse(token);
    }
    if (this.loggedInUser) {
      this.isUserLoggedIn = true;
      this.router.navigate(['/browse']);
    } else {
      this.isUserLoggedIn = false;
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    if (this.loggedInUser) {
      console.log('--->>', this.loggedInUser);
    }
    this.authService.checkingLoging.subscribe((res) => {
      if (res) {
        this.isUserLoggedIn = res;
      }
    });
  }

  handleSignOut() {
    this.authService
      .logout()
      .then(() => {
        this.isUserLoggedIn = false;
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
