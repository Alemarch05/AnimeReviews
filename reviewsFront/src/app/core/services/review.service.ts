import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../interfaces/review';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

private apiUrl = `${environment.apiUrl}/reviews`
  constructor(private http : HttpClient) { }
  getreviews():Observable<Review[]>
  {
    return this.http.get<Review[]>(this.apiUrl)
  }
  getreview(id : number):Observable<Review>
  {
    return this.http.get<Review>(`${this.apiUrl}/${id}`)
  }
  postreview(review : Review):Observable<Review>
  {
    return this.http.post<Review>(this.apiUrl,review)
  }
  putreview(id : number, review :Review):Observable<Review>
  {
    return this.http.put<Review>(`${this.apiUrl}/${id}`,review)
  }

  getReviewsByUser(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/Me`);
  }

}
