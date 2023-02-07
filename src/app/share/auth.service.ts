import { Injectable } from '@angular/core';
import { GoogleAuthProvider  } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { User } from './user.model'; // optional
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$!: Observable<User>;
  constructor(
    public afAuth: AngularFireAuth  // Inject Firebase auth service
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(this.AuthLogin);
        this.afAuth.currentUser;
        provider.addScope('email');
        
      })
      .catch((error) => {
        console.log(error);
        console.log("Some Error");
        
      });
  }
  

}
