import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthData } from './auth-data.model';
import {UiService} from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private uiservice: UiService) {}

  registerUser(authData: AuthData) {
    this.uiservice.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email, authData.password
    ).then(result => {
      this.uiservice.loadingStateChanged.next(false);
      this.authSuccessfully();
      }).catch(error => {
      this.uiservice.loadingStateChanged.next(false);
        this.uiservice.showSnackbar(error.message, null, 3000);
    });
  }

  login(authData: AuthData) {
    this.uiservice.loadingStateChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email, authData.password
    ).then(result => {
      this.uiservice.loadingStateChanged.next(false);
      this.authSuccessfully();
    }).catch(error => {
      this.uiservice.loadingStateChanged.next(false);
      this.uiservice.showSnackbar(error.message, null, 3000);
    });
  }

  logout() {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }


  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
