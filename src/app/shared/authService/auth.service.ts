import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  checkingLoging = new BehaviorSubject<boolean>(false);

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (user) => {
        console.log(user?.user?.multiFactor);
        let local = JSON.stringify(user?.user?.multiFactor);
        localStorage.setItem('token', local);
        this.checkingLoging.next(true);
        this.router.navigate(['/browse']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (user) => {
        let local = JSON.stringify(user?.user?.multiFactor);
        localStorage.setItem('token', local);
        this.checkingLoging.next(true);
        this.router.navigate(['/browse']);
      },
      (err) => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }
  logout() {
   return this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
