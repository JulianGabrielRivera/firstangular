import { Component, OnInit, Input } from '@angular/core';
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
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
}
