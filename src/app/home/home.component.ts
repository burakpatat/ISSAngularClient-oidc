import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService:AuthService){}

  _status;

  ngOnInit():void{
    this.authService.userManager.getUser().then((user)=>{
        if(user){
          this._status = 'login yapıldı başarılı'
          console.log(user)
        }
        else{
          this._status = 'not login!'
        }
    })
  }

  login():void{
    this.authService.userManager.signinRedirect()
  }
  logout():void{
    this.authService.userManager.signoutRedirect()
  }
}
