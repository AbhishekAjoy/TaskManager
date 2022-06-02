import { Injectable } from '@angular/core';
import { taskModel } from './taskModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }

  addTask(task: taskModel):Observable<taskModel>{
    return this.http.post<taskModel>(this.apiUrl,task);
  }

  getTasks(): Observable<taskModel[]>{    
    return this.http.get<taskModel[]>(this.apiUrl);
  }

  removeTask(id:string): Observable<taskModel>{
    const taskUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<taskModel>(taskUrl);
  }
}
