import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment-local';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiUrl = `${environment.apiUrl}`
  constructor(private http : HttpClient) { }

  login(credentials:{email: string,password:string}):Observable<any>{
    return this.http.post<User>(`${this.apiUrl}/login`,credentials)
  }

  getusers():Observable<User[]>
  {
    return this.http.get<User[]>(this.apiUrl)
  }
  getuser(id : number):Observable<User>
  {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
  postuser(user : User):Observable<User>
  {
    return this.http.post<User>(this.apiUrl,user)
  }
  putuser(id : number, user :User):Observable<User>
  {
    return this.http.put<User>(`${this.apiUrl}/${id}`,user)
  }

}
