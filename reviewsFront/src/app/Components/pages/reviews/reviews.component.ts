import { Component } from '@angular/core';
import { ReviewService } from '../../../core/services/review.service';
import { AlertService } from '../../../core/services/alert.service';
import { Review } from '../../../interfaces/review';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews : Review[] = [];
  constructor(private reviewService: ReviewService, private alertService: AlertService) { }
  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getreviews().subscribe({
      next: (reviews) => {
        this.reviews = reviews;
      },
      error: (err) => {
        this.alertService.showError('Fallo Api', 'error en las reviews');
      }
    });
  }


}
