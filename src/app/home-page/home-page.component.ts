import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  name: any;
  constructor(public firebaseService: FirebaseService, private router: Router) { }
  @Output() isLogout = new EventEmitter()

  ngOnInit(): void {
    this.name = localStorage.getItem('user');
    console.log(JSON.parse(this.name));
    this.name = JSON.parse(this.name).email
    console.log(this.name);
  }
  logout()
  {
    this.router.navigate(['']);
    this.firebaseService.logout()
    this.isLogout.emit();
  }

}

