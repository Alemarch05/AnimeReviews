import { Component } from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingPipe } from '../star-rating.pipe';

@Component({
  selector: 'app-card',
  imports: [CommonModule, StarRatingPipe],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   @Input() animes: Anime[] = [];

}
