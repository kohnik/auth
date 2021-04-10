import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
// import * as firebase from 'firebase';
// import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import firebase from 'firebase/app';
import 'firebase/auth';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap'; // This line is important

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 isLoggedIn: boolean = false;
  InputLogin: boolean  = false;
  reg: boolean  = true;
 constructor(public firebaseAuth: AngularFireAuth, private modalService: NgbModal )
 {}
  async signup(email: string, password: string)
  {
    await  this.firebaseAuth.fetchSignInMethodsForEmail(email)
      .then( checkEmail =>
      {
        if ( checkEmail.length < 1 )
        {
          this.reg = true;
        }
        else {
          this.reg = false;
        }
      })
    if ( this.reg)
    {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(rez =>
        {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(rez.user));
        });
    }
  }

  async signin(email: string, password: string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(rez =>
      {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(rez.user));
      });
  }


  SignGoogle() {
    return this.AuthLogin(googleProvider);
  }
  SignFacebook() {
    return this.AuthLogin(FacebookProvider);
  }
  SignGithub() {
    return this.AuthLogin(GithubProvider);
  }

  async AuthLogin(provider: any) {
    await this.firebaseAuth.signInWithPopup(provider)
      .then((res) => {
        this.isLoggedIn = true;
        console.log(res.user)
        localStorage.setItem('user', JSON.stringify(res.user));
      }).catch((error) => {
        console.log(error);
      });
  }
  logout()
  {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

}
