import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Anime } from '../../../interfaces/anime';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-anime-dialog',
  imports: [],
  templateUrl: './anime-dialog.component.html',
  styleUrl: './anime-dialog.component.scss'
})
export class AnimeDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Anime,
   private dialogRef: MatDialogRef<AnimeDialogComponent>
   ) {}

  close(): void {
    this.dialogRef.close();
  }
}
