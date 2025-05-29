import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Lesson } from '../../interfaces/lesson';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [NgIf, NgFor, MatCardModule, MatGridListModule, CommonModule,LessonDetailsComponent],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  lessons = [
    { title: 'שיעור 1', description: 'מבוא ל-HTML', imageUrl: 'assets/1.png' },
    { title: 'שיעור 2', description: 'יסודות CSS', imageUrl: 'assets/2.png' },
    { title: 'שיעור 3', description: 'JavaScript למתחילים', imageUrl: 'assets/3.png' }
  ];
}
