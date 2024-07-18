import { AuthService } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faBook, faCalendar, faCheck, faChevronDown, faEdit, faFilePdf, faInfo, faInfoCircle, faLightbulb, faPlus, faSun, faTrash, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  completedTasks: number=0;
  taskSuggestions: number=0;
  trainingResources: number=0;
  tasksList: any[] = [];

// fa icons 
  faAdd=faPlus;
  faBell=faBell;
  faCheck=faCheck;
  faCalender=faCalendar
  faBook=faBook
  faLightbulb=faLightbulb
  faPdf=faFilePdf;
  faEdit=faEdit;
  faUpload=faUpload

  faInfoCircle=faInfoCircle;
  faUser=faUser;
  faArrowDown=faChevronDown;
  faTrash=faTrash;
  faSun=faSun

  constructor(private authService: AuthService,private taskService:TaskService) {


  }



  ngOnInit(): void {
    this.loadDashboardData();
  }
  loadDashboardData(): void {
    this.taskService.getCompletedTasks().subscribe(data => {
      this.completedTasks = data;
    });

    this.taskService.getTaskSuggestions().subscribe(data => {
      this.taskSuggestions = data;
    });

    this.taskService.getTrainingResources().subscribe(data => {
      this.trainingResources = data;
    });

    this.taskService.getTasksList().subscribe(data => {
      this.tasksList = data;
    });
  }
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }


  login() {
    this.authService.navigateToLogin();
  }
}
