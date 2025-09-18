import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-comment',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
@Input() reviews : Review[] = [];
}
