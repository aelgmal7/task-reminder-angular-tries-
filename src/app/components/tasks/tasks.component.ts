import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];
  constructor(private tasksService:TaskService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks:Task[]) => {
      this.tasks=tasks;
    })
  }
  deleteTask(task:Task){
    this.tasksService.deleteTask(task).subscribe(()=>{
      this.tasks= this.tasks.filter(t=> t.id !== task.id)
      console.log(this.tasks)
    })

  }
  changeReminder(task:Task) {
    task.reminder = ! task.reminder
    this.tasksService.updateTask(task).subscribe(()=> {
      
    })
  }

}
