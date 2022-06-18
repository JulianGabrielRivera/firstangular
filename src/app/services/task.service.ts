import { Injectable } from '@angular/core';
// this is like axios
// interacts with json server here
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  // this allows us to use this.http.get/post and stuff like that the private
  constructor(private http: HttpClient) {}

  //  you subscribe to an observable so you can constantly watch it
  getTasks(): Observable<Task[]> {
    // turns into an observable.
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    //  the url and task here is the same as our axios on react
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
