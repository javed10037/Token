import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
  
  constructor(
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigate(['/profile']);
    }
  }
  email : any;
  password : any;
  
  onSubmit(){
    let loginData = {
      email : this.email,
      password : this.password
    };
    this.authService.loginConfig(loginData)
    .subscribe((data:any) => {
        if(!data || data.status==200){
          console.log("response login data==>",data)
          this.authService.storeUserData(data.token, data);
          this.router.navigate(['/profile']);
        } else{
          alert(data.message)
        }
      });
    }

}
