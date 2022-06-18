import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// our interface is this
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  //  this is like a prop
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }
  // since we emit it we have to go to parent component html which is tasks and add the ontogglereminder there and we'll call a function called togglereminder
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
}
