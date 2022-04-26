import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string= 'Task'
  showToggle!:boolean
  subscription!:Subscription ;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggleTask().subscribe(value => this.showToggle = value);
  }

  ngOnInit(): void {
    this.showToggle= this.uiService.showToggle
  }
  onClick(){
    console.log('hi')
    this.uiService.toggleShow()
  }
  
}
