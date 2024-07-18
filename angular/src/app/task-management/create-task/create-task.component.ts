
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class TaskCreateComponent {
  task = {
    title: '',
    description: '',
    isCompleted: false
  };

  constructor(private taskService: TaskService, private router: Router) {}

  createTask(): void {
    this.taskService.createTask(this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
