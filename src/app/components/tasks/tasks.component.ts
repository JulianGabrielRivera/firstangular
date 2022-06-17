import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
//  interface
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //  this is like a prop
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //  think of subscribe as a promise
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
