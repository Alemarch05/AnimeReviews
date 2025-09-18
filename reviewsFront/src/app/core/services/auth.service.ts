import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment-local';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Inject , PLATFORM_ID} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiUrl = `${environment.apiUrl}`;
private authState = new BehaviorSubject<boolean>(false);

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

  isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    console.log("No window object")
    return false;
  }

  const token = localStorage.getItem('token');
  console.log('Token:', token);


  if (token) {
    console.log('Token found, navigating to admin');
    return true;
  } else {
    console.log('No token found, navigating to login');
    return false;
  }
}

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    
      
    const token = localStorage.getItem('token');

    if (token) {
      return token;
    }

    return null;
  }

   isTokenExpired(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;
    return Date.now() >= exp * 1000;
  }

  logoutLocal(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.authState.next(false);
  }


}
