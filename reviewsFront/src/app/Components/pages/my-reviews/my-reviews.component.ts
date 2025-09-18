import { Component } from '@angular/core';
import { ReviewService } from '../../../core/services/review.service';
import { AlertService } from '../../../core/services/alert.service';
import { Review } from '../../../interfaces/review';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../../../shared/comment/comment.component';

@Component({
  selector: 'app-my-reviews',
  imports: [CommonModule, CommentComponent],
  standalone: true,
  templateUrl: './my-reviews.component.html',
  styleUrl: './my-reviews.component.scss'
})
export class MyReviewsComponent {
  reviews : Review[] = [];
    constructor(private reviewService: ReviewService, private alertService: AlertService) { }
    ngOnInit(): void {
      this.getReviews();
    }
  
    getReviews(): void {
      this.reviewService.getReviewsByUser().subscribe({
        next: (reviews) => {
          this.reviews = reviews;
        },
        error: (err) => {
          this.alertService.showError('Fallo Api', 'error en las reviews');
        }
      });
    }
  

}
