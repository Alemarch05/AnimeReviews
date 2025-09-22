import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(a_average_rating: number, maxStars: number = 5): string {
      if (!a_average_rating) return '';

    const rating = Math.round((a_average_rating / 10) * maxStars);

    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(maxStars - rating);

    return fullStars + emptyStars;
  }

}
