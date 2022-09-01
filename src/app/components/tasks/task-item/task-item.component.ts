import { Component, OnInit ,Input,Output ,EventEmitter } from '@angular/core';
import { Task} from '../../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  constructor() { }
  faTimes =faTimes
  onDeleteTask(task:Task) {
    this.onDelete.emit(task);
  }
  ngOnInit(): void {
  }

}
