import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeService } from '../../../core/services/anime.service';
import { AlertService } from '../../../core/services/alert.service';
import { Anime } from '../../../interfaces/anime';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule, CardComponent],  
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.scss'
})
export class RecommendedComponent implements OnInit{
  animes : Anime[] = [];
  constructor(private animeService: AnimeService, private alertService: AlertService) {}
  ngOnInit(): void {
    this.getAnimes();
  }
  getAnimes(): void {
    this.animeService.getAnimes().subscribe({
      next: (animes) => {
        this.animes = animes;
      },
      error: (err) => {
        this.alertService.showError('Fallo Api', 'error en los animes');
      }
    });
}

}
