import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Lesson } from '../../interfaces/lesson';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [NgIf, NgFor, MatCardModule, MatGridListModule, CommonModule, LessonDetailsComponent],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  lessons: Lesson[] = [
    {
      title: 'שיעור 1',
      teacher: 'גב׳ כהן',
      description: 'מבוא ל-HTML',
      numberOfMeetings: 5,
      startDate: new Date('2025-01-10'),
      price: 100,
      day: 'יום ראשון',
      time: '9:00',
      imageUrl: 'assets/4.jpg'
    },
    {
      title: 'שיעור 2',
      teacher: 'גב׳ לוי',
      description: 'יסודות CSS',
      numberOfMeetings: 6,
      startDate: new Date('2025-02-15'),
      price: 120,
      time: 'יום שני',
      day: '10:00',
      imageUrl: 'assets/5.jpg',
    },
    {
      title: 'שיעור 3',
      teacher: 'גב׳ ישראלי',
      description: 'JavaScript למתחילים',
      numberOfMeetings: 8,
      startDate: new Date('2025-03-20'),
      price: 150,
      time: 'יום שלישי',
      day: '11:00',
      imageUrl: 'assets/6.jpg',
    },
    {
      title: 'שיעור 4',
      teacher: 'גב׳ שלום',
      description: 'JavaScript למתקדמים',
      numberOfMeetings: 10,
      startDate: new Date('2025-03-20'),
      price: 150,
      time: 'יום שלישי',
      day: '12:00',
      imageUrl: 'assets/8.jpg',
    }
  ];
}
