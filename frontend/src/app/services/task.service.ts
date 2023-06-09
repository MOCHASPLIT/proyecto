import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/tasks'
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.myAppUrl}${this.myApiUrl}`)

  }

}
