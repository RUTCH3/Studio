import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Lesson } from '../../interfaces/lesson';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonDetailsComponent {
  @Input() lesson!: Lesson;
  isLessonVisible(): boolean {
    const now = new Date();
    const a: boolean = this.lesson.startDate <= now && Number(this.lesson.time) >= now.getHours() && this.lesson.day === now.toLocaleDateString('en-US', { weekday: 'long' })
    return a;
  }
}
