import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../service/ui.service'
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder: boolean = false;
  subscription!:Subscription
  showToggle:boolean=true;
  @Output() addTaskEmit = new EventEmitter();
  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggleTask().subscribe(value => this.showToggle= value)
   }

  ngOnInit(): void {
  }
  addTask(): void {
    if(!this.text) {
      alert("Please enter text")
      return;
    }
    const payload = {
      text: this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.addTaskEmit.emit(payload)
    this.text='';
    this.day='';
    this.reminder=false;
  }
}
