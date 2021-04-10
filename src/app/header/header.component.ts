import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() changeStatusLogin = new EventEmitter()
  InputLogin = this.firabase.InputLogin
  constructor(public firabase: FirebaseService, private router: Router) { }

  changeLogin()
  {
    this.changeStatusLogin.emit();
      if (this.firabase.InputLogin)
      {
        this.firabase.InputLogin = false;
      }
      else {
        this.firabase.InputLogin = true;
      }
  }
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
    {
      this.router.navigate(['home']);
      console.log(this.router.navigate(['']));
    }
    else
    {
      this.router.navigate(['']);
    }
  }
}
