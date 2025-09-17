import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDialogComponent } from './anime-dialog.component';

describe('AnimeDialogComponent', () => {
  let component: AnimeDialogComponent;
  let fixture: ComponentFixture<AnimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
