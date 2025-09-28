import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from '../../interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
private apiUrl = `${environment.apiUrl}/animes`

  constructor(private http : HttpClient) { }
  getAnimes():Observable<Anime[]>
  {
    return this.http.get<Anime[]>(this.apiUrl)
  }
  getAnime(id : number):Observable<Anime>
  {
    return this.http.get<Anime>(`${this.apiUrl}/${id}`)
  }
  postAnime(anime : Anime):Observable<Anime>
  {
    return this.http.post<Anime>(this.apiUrl,anime)
  }
  putAnime(id : number, anime :Anime):Observable<Anime>
  {
    return this.http.put<Anime>(`${this.apiUrl}/${id}`,anime)
  }

}
