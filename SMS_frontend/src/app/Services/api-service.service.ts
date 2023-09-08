import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signupmodel } from '../Models/Signupmodel';
import { Loginmodel } from '../Models/Loginmodel';
import { Adminmodel } from '../Models/Adminmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly apiUrl:string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  
  userSignup(user: Signupmodel): Observable<any> {
    const url=`${this.apiUrl}/user/signup`;
    return this.http.post<Signupmodel>(url, user);
  }
  userLogin(user:Loginmodel):Observable<any>{
    const url=`${this.apiUrl}/user/login`;
    return this.http.post<Loginmodel>(url, user);
  }
  adminSignup(admin: Adminmodel): Observable<any> {
    const url=`${this.apiUrl}/admin/signup`;
    return this.http.post<Adminmodel>(url, admin);
  }
  adminLogin(admin: Loginmodel): Observable<any> {
    const url=`${this.apiUrl}/admin/login`;
    return this.http.post<Loginmodel>(url, admin);
  }
}
