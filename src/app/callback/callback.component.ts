import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as oidc from 'oidc-client';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.css'
})
export class CallbackComponent {

  constructor(private router:Router) {
    
  }

ngOnInit():void{

  new oidc.UserManager({response_mode:'query'}).signinRedirectCallback().then(()=>{
    this.router.navigateByUrl('/')
  })
}

}
