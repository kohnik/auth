import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';



export class Validation{

  email: any;
  password: any;
}


@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss']
})
export class AuthCardComponent  {
  isSignedIn = false;
  status = false;
  @Output() lol = new EventEmitter()
  validation: Validation = new Validation();



  @Input() InputLogin: any;

  constructor(public firebase: FirebaseService, private router: Router){}

  async onSignup(email: string, password: string)
  {
    if ( email !== '' && password !== '')
    {
      await this.firebase.signup(email, password)
        .catch(err => console.log(err))
      if (!this.firebase.reg)
      {
        this.status = true;
      }
      if (this.firebase.isLoggedIn)
      {
        this.router.navigate(['home']);
      }
    }
  }
  async onSignip(email: string, password: string,)
  {
    if ( email !== '' || password !== '') {
      await this.firebase.signin(email, password)
      if (this.firebase.isLoggedIn)
      {
        this.router.navigate(['home']);
      }
    }
  }
  async onSignupWithGoogle()
  {

    await this.firebase.SignGoogle();
    if (this.firebase.isLoggedIn)
    {
      this.router.navigate(['home']);

    }
  }
  async onSignupWithFacebook()
  {
    await this.firebase.SignFacebook();
    if (this.firebase.isLoggedIn)
    {
      this.router.navigate(['home']);
    }
  }
  async onSignupWithGitHub()
  {
    await this.firebase.SignGithub();
    if (this.firebase.isLoggedIn)
    {
      this.router.navigate(['home']);
    }
  }

  // ngOnInit(): void {
  //   if (localStorage.getItem('user') !== null)
  //   {
  //     this.router.navigate(['']);
  //     console.log(this.router.navigate(['']));
  //   }
  //   else
  //   {
  //     this.isSignedIn = false;
  //   }
  // }
  }
