import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'http://127.0.0.1:8000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }
}
