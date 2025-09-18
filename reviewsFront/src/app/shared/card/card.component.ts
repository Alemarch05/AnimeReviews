import { Component } from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   @Input() animes: Anime[] = [];

}
