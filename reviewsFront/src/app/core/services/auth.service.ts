import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment-local';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Inject , PLATFORM_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiUrl = `${environment.apiUrl}`
  constructor(private http : HttpClient, @Inject(PLATFORM_ID) private platformId: Object
) { }

  login(credentials:{u_email: string,u_password:string}):Observable<any>{
    return this.http.post<User>(`${this.apiUrl}/login`,credentials).pipe(
      tap((response: any) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
        }
      })
    );

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
