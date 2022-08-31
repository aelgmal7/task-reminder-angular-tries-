import { Component, OnInit } from '@angular/core';
import {Tasks} from '../../mock-tasks'
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor() { }
  tasks:Task[] = Tasks;
  ngOnInit(): void {
  }

}
