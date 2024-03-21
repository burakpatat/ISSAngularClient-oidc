import { Injectable } from '@angular/core';
import * as oidc from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  config={
    authority:'https://localhost:5445',
    client_id:'angular-client',
    redirect_uri:'http://localhost:4200/callback',
    response_type:'code',
    scope:'API.read API.write openid profile',
    post_logout_redirect_uri:'http://localhost:4200',
  };

  userManager;
  constructor() { 
    this.userManager = new oidc.UserManager(this.config)
  }
}
