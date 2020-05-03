import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false

 // constructor( private auth:AuthService) { }

  ngOnInit() {
  }
loginUser(){
 
}
  // loginUser () {
  //   if(this.auth.authenticate(this.username, this.password)) { debugger
  //     //Redirect to Welcome Page
  //     this.router.navigate(['/first'])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }
}