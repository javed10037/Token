import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login']);
    }
  }
  getFirstName(){
    let value = JSON.parse(localStorage.getItem('user'));
    let name = value.data.firstName;
    return name;
  }
  getLastName(){
    let value = JSON.parse(localStorage.getItem('user'));
    let name = value.data.lastName;
    return name;
  }
  getEmail(){
    let value = JSON.parse(localStorage.getItem('user'));
    let name = value.data.email;
    return name;
  }
  getVerified(){
    let value = JSON.parse(localStorage.getItem('user'));
    let name = value.data.verified;
    return name;
  }


  getverificationToken(){
    let value = JSON.parse(localStorage.getItem('user'));
    let EthAddress = value.data.verificationToken;
    return EthAddress;
  }
  getEthAddress(){
    let value = JSON.parse(localStorage.getItem('user'));
    let EthAddress = value.data.EthAddress;
    return EthAddress;
  }
  getgeneratedInvestorCode(){
    let value = JSON.parse(localStorage.getItem('user'));
    let EthAddress = value.data.generatedInvestorCode;
    return EthAddress;
  }
  getaccountType(){
    let value = JSON.parse(localStorage.getItem('user'));
    let accountType = value.data.accountType;
    return accountType;
  }
}