import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment-local';
import { HttpClient } from '@angular/common/http';
import { Rating } from '../../interfaces/rating';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RatingService {

private apiUrl = `${environment.apiUrl}/ratings`
  constructor(private http : HttpClient) { }
  getratings():Observable<Rating[]>
  {
    return this.http.get<Rating[]>(this.apiUrl)
  }
  getrating(id : number):Observable<Rating>
  {
    return this.http.get<Rating>(`${this.apiUrl}/${id}`)
  }
  postrating(rating : Rating):Observable<Rating>
  {
    return this.http.post<Rating>(this.apiUrl,rating)
  }
  putrating(id : number, rating :Rating):Observable<Rating>
  {
    return this.http.put<Rating>(`${this.apiUrl}/${id}`,rating)
  }

}
