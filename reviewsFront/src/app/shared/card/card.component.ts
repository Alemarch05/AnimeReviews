import { Component, Inject } from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingPipe } from '../star-rating.pipe';
import { MatDialog} from '@angular/material/dialog';
import { AnimeDialogComponent } from '../../Components/dialog/anime-dialog/anime-dialog.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, StarRatingPipe],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   @Input() animes: Anime[] = [];
   constructor(private dialog : MatDialog) {}

   openDialog(anime: Anime) {
    this.dialog.open(AnimeDialogComponent, {
      width: '600px',
      height: '500px',
      data: anime
    });
   }

}
