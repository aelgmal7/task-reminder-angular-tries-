import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  showToggle = true;
  subject = new Subject();

  constructor() { }
  toggleShow(){
    console.log(this.showToggle)
    this.showToggle = !this.showToggle;
    this.subject.next(this.showToggle);
  }
  onToggleTask():Observable<any>{
    return this.subject.asObservable()
  }
}
