import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';
import { Task} from '../../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task;
  @Output() onDeleteTask:EventEmitter<any> = new EventEmitter();
  @Output() onToggleTask:EventEmitter<any> = new EventEmitter();
  ico=faTimes
  faTimes =faTimes


  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }
  toggleTaskReminder(task:Task):void {
    this.onToggleTask.emit(task);
  }

}
