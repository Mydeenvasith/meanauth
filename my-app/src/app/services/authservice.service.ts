import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
authToken;
user;

  constructor(private http:HttpClient) { }

  registerUser(user){
   let headers=new HttpHeaders();
   headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:3000/users/register',user,{headers:headers});
    
  }
}
