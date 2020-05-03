import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient){}
  login(){
    return this.http.get("http://www.mocky.io/v2/5e9e927d34000061b56eed7a")
    
  }

  // constructor(private http: HttpClient,
  //             private _router: Router) { }
  //             authenticate(username, password) {
                
  //               if(username==="nidhi" && password === 'nidhi') {
                 
                 
  //                 return true;
  //               }
  //               return false;
  //             }
  
}