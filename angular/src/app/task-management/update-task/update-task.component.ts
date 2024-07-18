import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent {
  task: any = {};

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe((task) => {
      this.task = task;
    });
  }

  updateTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.updateTask(id, this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}

