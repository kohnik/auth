import {Component, Input, OnInit} from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'authorization';
  isSignedIn = false;
  InputLogin = false;


  constructor(public firebase: FirebaseService, private router: Router){}
  }





