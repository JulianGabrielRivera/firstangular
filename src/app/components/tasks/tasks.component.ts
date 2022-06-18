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
  // to add a service we must add a provider inside the constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //  think of subscribe as a promise
    //  use observables if dealing with async data
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  // subscribe calls the delete tasks from the service its going to delte from server and then when its done it filters it out from UI
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  // set up our service after this
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
