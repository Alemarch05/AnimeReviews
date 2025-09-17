import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment-local';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../interfaces/comment';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

private apiUrl = `${environment.apiUrl}/comments`
  constructor(private http : HttpClient) { }
  getcomments():Observable<Comment[]>
  {
    return this.http.get<Comment[]>(this.apiUrl)
  }
  getcomment(id : number):Observable<Comment>
  {
    return this.http.get<Comment>(`${this.apiUrl}/${id}`)
  }
  postcomment(comment : Comment):Observable<Comment>
  {
    return this.http.post<Comment>(this.apiUrl,comment)
  }
  putcomment(id : number, comment :Comment):Observable<Comment>
  {
    return this.http.put<Comment>(`${this.apiUrl}/${id}`,comment)
  }

}
