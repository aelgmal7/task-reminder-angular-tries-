import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  tasks:Task[] = [];
  deleteTask(task:Task):void {
    console.log(task);
    this.taskService.deleteTask(task).subscribe(()=> {
     this.tasks = this.tasks.filter(t=> t.id !== task.id)
    })
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=> this.tasks = tasks);
  }

}
