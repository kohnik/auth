import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FirebaseService} from './services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AuthCardComponent } from './auth-card/auth-card.component';
import {FormsModule} from '@angular/forms';
import { AuthGuard } from './auth-guard.guard';
import {Routes, RouterModule, Router} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthHomeGuardGuard } from './guards/auth-home-guard.guard';


// let pathTo : any;
// import { AboutGuard } from './about.guard';
const appRoutes: Routes = [
  { path: '', component: AuthCardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthHomeGuardGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthCardComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC0H-FzocDRMRYJoJI3VJQ0EzWZ5fDKBHc',
      authDomain: 'fir-auth-9b2a0.firebaseapp.com',
      projectId: 'fir-auth-9b2a0',
      storageBucket: 'fir-auth-9b2a0.appspot.com',
      messagingSenderId: '889994812961',
      appId: '1:889994812961:web:fb453d643920cb51eb0d60'
    }),
    NgbModule,
    FormsModule
  ],
  providers: [FirebaseService, AuthGuard, AuthHomeGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule{
  // constructor( private router: Router)
  // {}
  // ngOnInit(): void {
  //     if (localStorage.getItem('user') !== null)
  //     {
  //       pathTo = 'home';
  //     }
  //     else
  //     {
  //       pathTo = '';
  //     }
  // }
}
