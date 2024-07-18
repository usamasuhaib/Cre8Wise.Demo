import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/api/app/task`;

  constructor(private http: HttpClient) {}



  getCompletedTasks(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/tasks/completed`);
  }

  getTaskSuggestions(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/tasks/suggestions`);
  }

  getTrainingResources(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/tasks/training-resources`);
  }

  getTasksList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks/list`);
  }


  createTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  getTask(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }







}
