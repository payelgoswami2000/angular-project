import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginD, Userdata } from './userdata';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  registration_url="https://nodeprojectapi.herokuapp.com/register";
  login_url="https://nodeprojectapi.herokuapp.com/login";

  constructor(private http:HttpClient) { }
  
 registerData(formobj:Userdata):Observable<Userdata[]>{
  return this.http.post<Userdata[]>(this.registration_url,formobj)
 }
  
   loginData(logobj:loginD):Observable<loginD[]>{
      return this.http.post<loginD[]>(this.login_url,logobj)
    
  }
}
