import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseService} from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuardGuard implements CanActivate {
  constructor(public firebase: FirebaseService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return localStorage.getItem('user') !== null;
  }
}
